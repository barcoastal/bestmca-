const fs=require('node:fs'),vm=require('node:vm'),ts=require('typescript'),assert=require('node:assert/strict');
function data(name,key){const m={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync(`src/data/${name}.ts`,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,m);return m.exports[key];}
const guides=data('guides','GUIDES'),funders=data('funders','FUNDERS'),terms=data('glossary','GLOSSARY');
const html=p=>fs.readFileSync(`.next/server/app/${p}.html`,'utf8');
const visible=h=>h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
for(const [items,n] of [[guides,19],[funders,8],[terms,24]]){assert.equal(items.length,n);assert.equal(new Set(items.map(x=>x.slug)).size,n);}
for(const [prefix,items] of [['guides',guides],['funders',funders]])for(const item of items){
 const h=html(`${prefix}/${item.slug}`);assert(item.sources?.length>0,`${item.slug}: missing sources`);
 assert(h.includes(`rel="canonical" href="https://www.mcasettlementreviews.com/${prefix}/${item.slug}"`));
 assert(!h.includes('content="noindex'));assert(!/#1 rated|best settlements in our review data|30 to 60 percent|A COJ converts default into judgment overnight|protect payroll from a clean account/.test(visible(h)),item.slug);
 for(const source of item.sources)assert(h.includes(source.url.replace(/&/g,'&amp;'))||h.includes(source.url),item.slug);
 const schemas=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const faq=schemas.find(x=>x['@type']==='FAQPage');
 if(faq)for(const f of faq.mainEntity)assert(visible(h).includes(f.acceptedAnswer.text.replace(/&/g,'&amp;')),`${item.slug}: FAQ mismatch`);
}
for(const term of terms){const h=html(`glossary/${term.slug}`);assert(h.includes('noindex'));assert(!/#1 rated|30 to 60 percent/.test(visible(h)));}
const css=fs.readdirSync('.next/static/chunks').filter(x=>x.endsWith('.css')).map(x=>fs.readFileSync('.next/static/chunks/'+x,'utf8')).join('\n');assert(css.includes('font-display:optional'));assert(!css.includes('font-display:swap'));
const sitemap=fs.readFileSync('.next/server/app/sitemap.xml.body','utf8');const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);assert.equal(urls.length,new Set(urls).size);
console.log('PASS: 19 unique sourced guides, 8 scoped funder records, 24 corrected noindex glossary pages, FAQ consistency, canonical/indexing preservation, optional fonts and unique sitemap URLs.');
