import {createHash} from 'node:crypto';
// Compare the existing search/filter functions against the pre-refinement implementation.
export function behaviorSnapshot(implementation,data){
  const hash=createHash('sha256');let cases=0;
  const savedIds=new Set(data.resources.slice(0,7).map(r=>r.id));
  for(const q of ['', 'food', 'mental health', 'tutoring', 'environmental health', 'Clyde’s', 'wifi', 'resume', 'zzzyyynotarealresource'])
  for(const category of ['all',...data.categories.map(c=>c.id)])
  for(const location of ['all','campus','community','online'])
  for(const cost of ['all','free','included','paid'])
  for(const appointment of ['all','walk-in','required'])
  for(const official of [false,true])
  for(const saved of [false,true]){
    const state={q,category,location,cost,appointment,official,saved,savedIds};
    const result=implementation.filterResources(data.resources,state).map(r=>[r.id,implementation.searchScore(r,q)]);
    hash.update(JSON.stringify([q,category,location,cost,appointment,official,saved,result])+'\n');cases++;
  }
  return {cases,sha256:hash.digest('hex')};
}
