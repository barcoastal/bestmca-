const fs=require('node:fs'),vm=require('node:vm'),ts=require('typescript'),assert=require('node:assert/strict');
const research={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/data/review-research.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,research);
const x={exports:{},require:(name)=>{assert.equal(name,'./review-research');return research.exports;}};vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/data/reviews.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,x);
const {REVIEWS,RANKED}=x.exports;
assert.equal(RANKED.length,17);assert.equal(RANKED[0].slug,'coastal-debt-resolve');
assert.equal(new Set(RANKED.map(r=>r.rank)).size,17);
const html=(route)=>fs.readFileSync(`.next/server/app/${route}.html`,'utf8');
const visible=(h)=>h.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ');
for(const r of REVIEWS){
 assert(r.sources?.length>=2);assert(r.sourcesCheckedAt);assert(r.ratingNote.includes('not published'));
 const h=html(`reviews/${r.slug}`);assert(h.includes(r.ratingNote));
 const schemas=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 assert(!schemas.some(s=>s['@type']==='Review'||s.reviewRating||s.aggregateRating));
 assert(h.includes(`rel="canonical" href="https://www.mcasettlementreviews.com/reviews/${r.slug}"`));
 assert(!h.includes('content="noindex'));
 assert(!/\b[1-5]\.\d\s*\/\s*5\b/.test(visible(h)),r.slug);
 assert(h.includes(`content="https://www.mcasettlementreviews.com/reviews/${r.slug}"`));
}
const home=html('index');const schema=[...home.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1])).find(s=>s['@type']==='ItemList');
assert.equal(schema.itemListElement[0].name,'Coastal Debt Resolve');assert.equal(schema.itemListElement[0].position,1);
assert(home.includes('Mobile navigation'));assert(home.includes('Coastal is featured first by editorial choice'));
assert(!visible(home).includes('4.9'));assert(home.includes('4.6 from 429 reviews (checked September 12, 2026)'));
assert(html('best-mca-settlement-companies-2026').includes('rel="canonical" href="https://www.mcasettlementreviews.com"'));
for(const r of REVIEWS.filter(r=>!r.isCoastal)){
 const h=html(`compare/coastal-debt-vs-${r.slug}`);assert(h.includes('noindex'));assert(!/won \d of 5|No upfront fee/.test(visible(h)));
 assert(h.includes('no numeric winner is assigned'));
}
const files=fs.readdirSync('.next/server/app').filter(f=>f.startsWith('mca-debt-relief-for-')&&f.endsWith('.html'));assert.equal(files.length,9);
for(const f of files){const h=fs.readFileSync('.next/server/app/'+f,'utf8');assert(h.includes('Scope and legal references'));assert(!/30 to 60 percent|equipment is never|nothing about it is published/.test(h));}
assert(html('methodology').includes('publisher’s featured first provider'));
console.log('PASS: Coastal first, 17 source-backed reviews without unsupported numerical ratings, source dates preserved, 16 comparisons, 9 industry pages, canonicals and indexability.');
