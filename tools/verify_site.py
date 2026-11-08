"""Additional independent checks: anchors, assets, JSON-LD and contact safety."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,re

root=Path(__file__).resolve().parents[1]
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[];self.links=[];self.assets=[];self.titles=0;self.canonicals=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        if tag=='a':self.links.append(a.get('href',''))
        if tag in ('img','script','source') and a.get('src'):self.assets.append(a['src'])
        if tag=='source' and a.get('srcset'):self.assets.append(a['srcset'])
        if tag=='title':self.titles+=1
        if tag=='link' and a.get('rel')=='canonical':self.canonicals.append(a['href'])
pages={};errors=[];schemas=0
for p in root.glob('*.html'):
    doc=Parser();text=p.read_text(encoding='utf-8');doc.feed(text);pages[p.name]=doc
    if any(bad in text for bad in ('\ufffd', '\u00e2\u20ac\u2122', '\u00e2\u20ac\u0153')):errors.append(f'{p.name}: broken Unicode encoding')
    if len(set(doc.ids))!=len(doc.ids):errors.append(f'{p.name}: duplicate ids')
    if doc.titles!=1:errors.append(f'{p.name}: {doc.titles} titles')
    if p.name!='404.html' and len(doc.canonicals)!=1:errors.append(f'{p.name}: canonical count')
    if 'GTM-' in text:errors.append(f'{p.name}: second tag container remains')
    if p.name!='404.html' and len(re.findall(r'src="analytics\.js(?:\?[^"\s]*)?"',text))!=1:errors.append(f'{p.name}: analytics loader count')
    if p.name!='404.html':
        nav=re.search(r'<nav class="site-nav"[^>]*>(.*?)</nav>',text,re.S)
        mobile=re.search(r'<div class="mobile-cta"[^>]*>(.*?)</div>',text,re.S)
        if not nav or len(re.findall(r'<a\b',nav.group(1)))>5:errors.append(f'{p.name}: primary navigation is not simplified')
        if not mobile or len(re.findall(r'<a\b',mobile.group(1)))!=3:errors.append(f'{p.name}: mobile bar must have three direct contact routes')
    if 'gtag/js?id=' in text or "gtag('config'" in text:errors.append(f'{p.name}: inline analytics can bypass the shared privacy guard')
    if 'data-quote-form' in text or 'api.web3forms.com' in text:errors.append(f'{p.name}: retired form remains')
    if re.search(r'<(?:article|div)[^>]*class="review-',text):errors.append(f'{p.name}: unverified testimonial remains')
    for block in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',text,re.S):
        try:json.loads(block);schemas+=1
        except ValueError:errors.append(f'{p.name}: invalid JSON-LD')
for name,doc in pages.items():
    for href in doc.links+doc.assets:
        u=urlsplit(href)
        if u.scheme not in ('','http','https'):continue
        if u.netloc and u.netloc not in ('sjwindowscolchester.co.uk','www.sjwindowscolchester.co.uk'):continue
        path=unquote(u.path).lstrip('/') or name
        if path=='/':path='index.html'
        if href.startswith('https://sjwindowscolchester.co.uk/') and not u.path.strip('/'):path='index.html'
        if not (root/path).is_file():errors.append(f'{name}: missing {href}');continue
        if u.fragment and path in pages and unquote(u.fragment) not in pages[path].ids:
            errors.append(f'{name}: missing fragment {href}')
app=(root/'app.js').read_text(encoding='utf-8')
if 'REPLACE_WITH_ACCESS_KEY' in app:errors.append('app.js: placeholder form key')
if 'link_url:' in app or 'link_text:' in app:errors.append('app.js: potentially private analytics fields')
if re.search(r'quoteCustomer(?:Name|Address)',app):errors.append('app.js: personal detail collection remains')
if re.search(r'(smsButton|whatsappButton|emailButton)\.href\s*=',app):errors.append('app.js: message draft exposed in a link')
if errors:
    print('\n'.join(errors));raise SystemExit(1)
print(f'PASS: {len(pages)} pages, fragments/assets, {schemas} valid JSON-LD blocks, single GA4 configuration and retired forms.')
