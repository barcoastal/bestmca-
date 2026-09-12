const fs=require('fs'), vm=require('vm'), ts=require('typescript'), assert=require('node:assert/strict');
const x={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/data/reviews.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,x);
const {REVIEWS,RANKED,calculateScore}=x.exports;
assert.equal(calculateScore({transparency:4.5,results:4.5,communication:4.5,cost:4.5,litigation:4}),4.4);
assert.equal(REVIEWS.find(r=>r.slug==='second-wind-consultants').score,4.1);
for(const r of REVIEWS){
 const h=fs.readFileSync(`.next/server/app/reviews/${r.slug}.html`,'utf8');
 const schemas=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const review=schemas.find(s=>s['@type']==='Review');
 if(r.ratingNote){assert.equal(review,undefined);assert(h.includes(r.ratingNote));}else{assert.equal(review.reviewRating.ratingValue,r.score);assert.equal(review.dateModified,r.updatedAt);}
 assert(h.toLowerCase().includes(`datetime="${r.updatedAt}"`));
 assert(h.includes(`https://www.mcasettlementreviews.com/reviews/${r.slug}`));
 assert(!h.includes('content="noindex'));
 assert.equal(r.rank,1+REVIEWS.filter(o=>o.score>r.score).length);
}
for(let i=1;i<RANKED.length;i++)assert(RANKED[i].score<=RANKED[i-1].score);
for(const slug of ['second-wind-consultants','rise-alliance','eastern-financial-partners']){
 const r=REVIEWS.find(r=>r.slug===slug);assert(r.sources.length>=2);assert.equal(r.publicQuotes.length,0);
 const h=fs.readFileSync(`.next/server/app/reviews/${slug}.html`,'utf8');assert(h.replaceAll('<!-- -->','').includes('Sources checked September 11, 2026'));assert(!h.includes('has limited public review footprint'));
}
const home=fs.readFileSync('.next/server/app/index.html','utf8');assert(!home.includes('The only firm in our comparison that is both'));
const compare=fs.readFileSync('.next/server/app/compare/coastal-debt-vs-spergel.html','utf8');assert(compare.includes('noindex'));
const best=fs.readFileSync('.next/server/app/best-mca-settlement-companies-2026.html','utf8');assert(best.includes('rel="canonical" href="https://www.mcasettlementreviews.com"')||best.includes('rel="canonical" href="https://www.mcasettlementreviews.com/"'));
console.log('PASS: 17 review schemas/dates/canonicals, calculated rankings and ties, priority sources, homepage correction, preserved indexing directives.');

const coastal=fs.readFileSync('.next/server/app/reviews/coastal-debt-resolve.html','utf8');
assert(coastal.includes('2026-09-12'));assert(coastal.includes('72 complaints'));assert(coastal.includes('429 reviews'));
for(const unsupported of ['Verified Client Reviews','Documented Outcomes','We confirmed the disclosure pattern','Most cases reach a stabilized payment posture','No upfront retainer','24 to 48'])assert(!coastal.includes(unsupported),unsupported);
assert(!home.includes('420+'));assert(!home.includes('value=\"In-house attorneys\"'));
console.log('PASS: Coastal evidence caveat, current sources, unsupported testimonials removed, rating rich-result markup withheld.');
