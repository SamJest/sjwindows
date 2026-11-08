#!/usr/bin/env python3
"""Dependency-free pre/post static audit for SJ Windows.

Example:
  python tools/static_site_audit.py /path/to/sjwindows --out /tmp/sj_audit.json

This is a *source audit*, not a browser crawl and NOT a replacement for Search
Console, mobile checks, hosting verification or structured-data validation.
"""
import argparse
import collections
import datetime
import html
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
import xml.etree.ElementTree as ET

BASE='https://sjwindowscolchester.co.uk'

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title=[];self.in_title=False
        self.h1=[];self.in_h1=False;self.h1_text=[]
        self.description=None;self.canonical=None;self.robots=None
        self.hrefs=[];self.images=[];self.forms=[];self.scripts=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='title':self.in_title=True
        if tag=='h1':self.in_h1=True;self.h1_text=[]
        if tag=='meta':
            if a.get('name','').lower()=='description':self.description=a.get('content')
            if a.get('name','').lower()=='robots':self.robots=a.get('content')
        if tag=='link' and 'canonical' in a.get('rel','').split():self.canonical=a.get('href')
        if tag in ('a','link') and a.get('href'):self.hrefs.append(a['href'])
        if tag=='img':self.images.append(a)
        if tag=='form':self.forms.append(a)
        if tag=='script':self.scripts.append(a)
    def handle_endtag(self,tag):
        if tag=='title':self.in_title=False
        if tag=='h1':
            self.in_h1=False;self.h1.append(' '.join(''.join(self.h1_text).split()))
    def handle_data(self,data):
        if self.in_title:self.title.append(data)
        if self.in_h1:self.h1_text.append(data)

def main():
    ap=argparse.ArgumentParser(description='Audit static HTML, links, metadata, sitemap for SJ Windows')
    ap.add_argument('repo',type=Path,help='Path to cloned repo root')
    ap.add_argument('--out',type=Path,help='Optional JSON report file')
    args=ap.parse_args();repo=args.repo.expanduser().resolve()
    if not (repo/'index.html').is_file():ap.error('index.html is missing: pass the repository root')
    files=sorted(repo.glob('*.html'));warnings=[];errors=[];info=[];summaries=[]
    titles=collections.defaultdict(list);descs=collections.defaultdict(list);page_references={}
    if not (repo/'sitemap.xml').is_file():errors.append('Missing sitemap.xml')
    sitemap_locs=[];lastmods={}
    if (repo/'sitemap.xml').is_file():
        try:
            tree=ET.parse(repo/'sitemap.xml');root=tree.getroot()
            for node in root:
                loc=node.find('{*}loc');mod=node.find('{*}lastmod')
                if loc is not None and loc.text:
                    url=loc.text.strip();sitemap_locs.append(url)
                    if mod is not None and mod.text:lastmods[url]=mod.text.strip()
        except Exception as exc:errors.append(f'Invalid sitemap XML: {exc}')
    for fp in files:
        page=fp.name;source=fp.read_text(encoding='utf-8',errors='replace')
        doc=PageParser()
        try:doc.feed(source)
        except Exception as exc:errors.append(f'{page}: HTML parse error: {exc}')
        title=' '.join(''.join(doc.title).split());canonical=doc.canonical
        expected=BASE+'/' if page=='index.html' else BASE+'/'+page
        if page!='404.html':
            if not title:errors.append(f'{page}: no title')
            if not doc.description:errors.append(f'{page}: no meta description')
            if len(doc.h1)!=1:errors.append(f'{page}: expected 1 h1, got {len(doc.h1)}')
            if not canonical:errors.append(f'{page}: no canonical')
            elif canonical!=expected:warnings.append(f'{page}: canonical {canonical!r} differs from expected {expected!r} (may be intentional)')
            if expected not in sitemap_locs and 'noindex' not in (doc.robots or '').lower():warnings.append(f'{page}: not in sitemap but appears indexable')
            if 'noindex' in (doc.robots or '').lower() and expected in sitemap_locs:errors.append(f'{page}: noindex but in sitemap')
        if title:titles[title].append(page)
        if doc.description:descs[doc.description].append(page)
        if re.search(r'this page is built around the main searches',source,re.I):warnings.append(f'{page}: customer-facing SEO-keyword stuffing phrase')
        if re.search(r'REPLACE_WITH_ACCESS_KEY',source):errors.append(f'{page}: placeholder form access key detected')
        if re.search(r'GTM-[A-Z0-9]+',source) and re.search(r'G-[A-Z0-9]{7,}',source):info.append(f'{page}: GTM and GA4 both referenced; inspect duplication in Tag Manager')
        for i,img in enumerate(doc.images,1):
            if 'alt' not in img:warnings.append(f'{page}: img #{i} missing alt (empty alt is valid for decoration)')
        for href in doc.hrefs:
            if href.startswith(('#','tel:','sms:','mailto:','whatsapp:','javascript:','data:')):continue
            parts=urlsplit(href)
            if parts.scheme and parts.scheme not in ('http','https'):continue
            if parts.netloc and parts.netloc not in ('sjwindowscolchester.co.uk','www.sjwindowscolchester.co.uk'):continue
            path=unquote(parts.path)
            if not path and parts.fragment:continue
            if not path and parts.scheme=='':continue
            if path.startswith('/'):
                target=(repo/path.lstrip('/')) if path!='/' else repo/'index.html'
            else:
                target=(fp.parent/path)
            if target.is_dir():target=target/'index.html'
            if not target.is_file():
                # Query strings do not affect file resolution.
                errors.append(f'{page}: internal link target missing {href}')
        summaries.append({'file':page,'title':title,'h1':doc.h1,'description':doc.description,'canonical':canonical,'robots':doc.robots,'images':len(doc.images),'forms':len(doc.forms)})
    for title,paths in titles.items():
        if title and len(paths)>1:warnings.append(f'Duplicate title {title!r}: {", ".join(paths)}')
    for desc,paths in descs.items():
        if desc and len(paths)>1:warnings.append(f'Duplicate description: {", ".join(paths)}')
    expected_by_name={BASE+'/'+fp.name if fp.name!='index.html' else BASE+'/' for fp in files if fp.name!='404.html'}
    for loc in sitemap_locs:
        sp=urlsplit(loc)
        if sp.netloc!='sjwindowscolchester.co.uk':warnings.append(f'Sitemap non-primary domain URL: {loc}')
        if loc not in expected_by_name:warnings.append(f'Sitemap URL has no matching root HTML file: {loc}')
    duplicate_urls=[url for url,count in collections.Counter(sitemap_locs).items() if count>1]
    for url in duplicate_urls:errors.append(f'Duplicate sitemap URL: {url}')
    date_counts=collections.Counter(lastmods.values())
    if len(lastmods)>30 and len(date_counts)==1:
        warnings.append('All sitemap lastmod entries identical: confirm dates reflect actual changes, not static generator value')
    report={'generated_on':datetime.datetime.now(datetime.timezone.utc).isoformat(),'repo':str(repo),'html_count':len(files),'sitemap_url_count':len(sitemap_locs),'error_count':len(errors),'warning_count':len(warnings),'errors':sorted(set(errors)),'warnings':sorted(set(warnings)),'info':sorted(set(info)),'sitemap_lastmod_counts':dict(date_counts),'pages':summaries}
    if args.out:
        args.out.parent.mkdir(parents=True,exist_ok=True)
        args.out.write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
    print(f'SJ Windows static audit: {len(files)} HTML pages, {len(sitemap_locs)} sitemap entries')
    print(f'Errors: {len(report["errors"])}; warnings: {len(report["warnings"])}; info: {len(report["info"])}')
    for x in report['errors'][:20]:print('ERROR:',x)
    for x in report['warnings'][:20]:print('WARN:',x)
    if len(report['errors'])>20:print('... additional errors in JSON output')
    if len(report['warnings'])>20:print('... additional warnings in JSON output')
    print('Reminder: static inspection cannot validate real HTTP redirects, form delivery, ranking or rendered mobile UX')
    return 1 if errors else 0
if __name__=='__main__':sys.exit(main())
