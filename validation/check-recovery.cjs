const fs=require('fs'), vm=require('vm'), ts=require('typescript'), assert=require('node:assert/strict');
const x={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/data/reviews.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,x);
const {REVIEWS,RANKED,calculateScore}=x.exports;
assert.equal(calculateScore({transparency:4.5,results:4.5,communication:4.5,cost:4.5,litigation:4}),4.4);
assert.equal(REVIEWS.find(r=>r.slug==='second-wind-consultants').score,4.1);
for(const r of REVIEWS){
 const h=fs.readFileSync(`.next/server/app/reviews/${r.slug}.html`,'utf8');
 const schemas=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const review=schemas.find(s=>s['@type']==='Review');
 assert.equal(review.reviewRating.ratingValue,r.score);assert.equal(review.dateModified,r.updatedAt);
 assert(h.toLowerCase().includes(`datetime="${r.updatedAt}"`));
 assert(h.includes(`https://www.mcasettlementreviews.com/reviews/${r.slug}`));
 assert(!h.includes('content="noindex'));
 assert.equal(r.rank,1+REVIEWS.filter(o=>o.score>r.score).length);
}
for(let i=1;i<RANKED.length;i++)assert(RANKED[i].score<=RANKED[i-1].score);
for(const slug of ['second-wind-consultants','rise-alliance','eastern-financial-partners']){
 const r=REVIEWS.find(r=>r.slug===slug);assert(r.sources.length>=2);assert.equal(r.publicQuotes.length,0);
 const h=fs.readFileSync(`.next/server/app/reviews/${slug}.html`,'utf8');assert(h.includes('Sources checked September 11, 2026'));assert(!h.includes('has limited public review footprint'));
}
const home=fs.readFileSync('.next/server/app/index.html','utf8');assert(!home.includes('The only firm in our comparison that is both'));
const compare=fs.readFileSync('.next/server/app/compare/coastal-debt-vs-spergel.html','utf8');assert(compare.includes('noindex'));
const best=fs.readFileSync('.next/server/app/best-mca-settlement-companies-2026.html','utf8');assert(best.includes('rel="canonical" href="https://www.mcasettlementreviews.com"')||best.includes('rel="canonical" href="https://www.mcasettlementreviews.com/"'));
console.log('PASS: 17 review schemas/dates/canonicals, calculated rankings and ties, priority sources, homepage correction, preserved indexing directives.');
