const ICONS = {
  search:'<circle cx="10.7" cy="10.7" r="6.6"/><path d="m16 16 4.5 4.5"/>',
  bookmark:'<path d="M6 4h12v17l-6-4-6 4V4Z"/>',
  heart:'<path d="M20.3 5.7a5.1 5.1 0 0 0-7.2 0L12 6.8l-1.1-1.1a5.1 5.1 0 0 0-7.2 7.2L12 21l8.3-8.1a5.1 5.1 0 0 0 0-7.2Z"/>',
  book:'<path d="M12 5v16M3 4c4-1 6 0 9 2 3-2 5-3 9-2v15c-4-1-6 0-9 2-3-2-5-3-9-2V4Z"/>',
  library:'<path d="M4 10h16M3 21h18M5 18v-6m5 6v-6m4 6v-6m5 6v-6M2 7l10-5 10 5H2Z"/>',
  health:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/>',
  people:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  laptop:'<rect x="4" y="3" width="16" height="13" rx="1"/><path d="m2 21 2-5h16l2 5H2Z"/>',
  mountain:'<path d="m2 21 7-13 4 6 3-10 6 17H2Z"/><path d="m7 12 2 2 2-2m3-3 2 2 2-1"/>',
  spark:'<path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7L12 2Z"/>',
  briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0M10 13h4v4h-4z"/>',
  bus:'<rect x="4" y="2" width="16" height="18" rx="3"/><path d="M4 11h16M8 6h8M7 20v2m10-2v2M8 16h.01M16 16h.01"/>',
  ticket:'<path d="M3 6h18v5a3 3 0 0 0 0 6v4H3v-4a3 3 0 0 0 0-6V6ZM15 6v3m0 3v2m0 3v4"/>',
  globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  'check-circle':'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  check:'<path d="m5 12 4 4L20 5"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',
  filter:'<path d="M3 5h18M6 12h12M9 19h6"/>',
  wallet:'<path d="M21 8H4a2 2 0 0 1 0-4h14v4M3 6v14h18V8M21 12h-6v5h6M18 14.5h.01"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18M7 14h2m3 0h2m3 0h1M7 17h2m3 0h2"/>',
  external:'<path d="M14 3h7v7m0-7L10 14M10 3H3v18h18v-7"/>',
  phone:'<path d="m5 3 4 4-2 4a15 15 0 0 0 6 6l4-2 4 4-3 3C9 21 3 15 2 6l3-3Z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  link:'<path d="m10 8 3-3a5 5 0 0 1 7 7l-3 3M14 16l-3 3a5 5 0 0 1-7-7l3-3m1 8 8-8"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  bag:'<path d="M4 7h16l1 15H3L4 7ZM8 7V5a4 4 0 0 1 8 0v2"/>',
  print:'<path d="M6 8V2h12v6M6 18H2V8h20v10h-4M6 14h12v8H6v-8ZM18 11h.01"/>'
};
export const icon = (name,extra='') => `<svg class="icon ${extra}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.spark}</svg>`;
export const esc = text => String(text ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const normalize = value => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9]+/g,' ').trim();
export const safeUrl = url => {try{const u=new URL(url);return ['https:','http:'].includes(u.protocol)?u.href:'';}catch{return '';}};
export function displayResourceUrl(url){
  const safe=safeUrl(url);if(!safe)return '';
  const u=new URL(safe);
  let path=u.pathname;try{path=decodeURIComponent(path);}catch{}
  return u.hostname+(path==='/'?'':path.replace(/\/$/,''))+(u.search?'…':'');
}
export function searchScore(resource,query){
  if(!query.trim())return 1;
  const q=normalize(query), name=normalize(resource.name), description=normalize(resource.description), full=normalize(resource.searchTerms||`${resource.name} ${resource.description}`);
  const words=q.split(/\s+/).filter(Boolean);
  const aliases={counselling:['counseling'],groceries:['grocery','food'],grocery:['groceries','food'],therapy:['mental health','counseling','therapy'],tutor:['tutoring','tutor'],tutoring:['tutoring','tutor'],jobs:['career','job','employment'],job:['career','job','employment'],wifi:['wifi','wi fi','hotspot'],housing:['housing','residence','basic needs'],anxiety:['mental health','counseling','anxiety'],textbooks:['textbook','textbooks'],scholarships:['scholarship','scholarships','grant'],resume:['resume','resumes','cv']};
  if(!words.every(w=>[w,...(aliases[w]||[])].some(token=>full.includes(token)))) return 0;
  return (name===q?100:0)+(name.includes(q)?30:0)+(description.includes(q)?10:0)+words.reduce((n,w)=>n+(name.includes(w)?5:0),1);
}
export function filterResources(resources,state){
  return resources.filter(r=>(state.category==='all'||r.categories.includes(state.category)) && (state.location==='all'||r.modes.includes(state.location)) && (state.cost==='all'||(state.cost==='free'?['free','limited','mixed'].includes(r.costType):state.cost==='paid'?['paid','mixed'].includes(r.costType):r.costType==='included')) && (state.appointment==='all'||r.appointment===state.appointment) && (!state.official||!!r.url) && (!state.saved||state.savedIds.has(r.id)) && searchScore(r,state.q)>0);
}
export function paginateResources(resources,requestedPage=1,pageSize=12){
  const size=Number.isFinite(pageSize)&&pageSize>=1?Math.floor(pageSize):12;
  const totalPages=Math.ceil(resources.length/size);
  const requested=Number.isFinite(Number(requestedPage))?Math.floor(Number(requestedPage)):1;
  const page=Math.max(1,Math.min(requested,totalPages||1));
  const start=(page-1)*size;
  return {page,totalPages,start,end:Math.min(start+size,resources.length),items:resources.slice(start,start+size)};
}
export function pageTokens(page,totalPages){
  if(totalPages<=0)return [];
  if(totalPages<=9)return Array.from({length:totalPages},(_,i)=>i+1);
  const pages=new Set([1,totalPages]);
  const start=page<=4?2:page>=totalPages-3?totalPages-6:page-2;
  const end=page<=4?7:page>=totalPages-3?totalPages-1:page+2;
  for(let i=start;i<=end;i++)if(i>0&&i<=totalPages)pages.add(i);
  const sorted=[...pages].sort((a,b)=>a-b),tokens=[];
  for(const value of sorted){if(tokens.length&&value-sorted[sorted.indexOf(value)-1]>1)tokens.push('ellipsis');tokens.push(value);}
  return tokens;
}
export function resourceStatusFlags(resource){
  const fields=resource.verification?.fields||[],flags=[];
  if(fields.includes('hours')&&/24\s*\/\s*7/.test(resource.hours||''))flags.push({type:'always',label:'24/7 hours listed; check service details'});
  if(resource.modes?.includes('online'))flags.push({type:'online',label:'Online option'});
  if(fields.includes('cost')&&resource.costType==='free')flags.push({type:'free',label:'No-cost option listed; limits may apply'});
  return flags.length?flags:[{type:'details',label:'Check resource details for availability and cost'}];
}
const GENERIC_VERIFICATION_NOTE='Only the fields named as checked have been confirmed against an official page. Other details come from the student research or remain unlisted.';
export function visibleVerificationNotes(resource){
  return (resource.verification?.notes||[]).filter(note=>note!==GENERIC_VERIFICATION_NOTE).map(note=>note
    .replace(/^Details are from the supplied student research\.\s*/,'')
    .replace(/^Named in the supplied community research\.\s*/,'')
    .replace(/^Listed in the supplied printable reference\.\s*/,''));
}

if(typeof document!=='undefined'){
  const $=id=>document.getElementById(id);
  const state={q:'',category:'all',location:'all',cost:'all',appointment:'all',official:false,saved:false,sort:'recommended',page:1,savedIds:new Set()};
  let data={resources:[],categories:[]}, catMap={}, toastTimer, returnFocus, openResourceId=null;
  const featured=['clydes-cupboard','excel-science-center','mental-health-services','kraemer-family-library','clydes-closet','uccs-farm-greenhouse','t-rowe-price-career-and-innovation-center','mountain-metro-bus-passes','500-series-free-parking-permit','telus-health-student-support','linkedin-learning','student-life'];
  function decorate(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
  function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3000);}
  function readSaved(){try{const v=JSON.parse(localStorage.getItem('uccs-resource-hub-saved')||'[]');if(Array.isArray(v))state.savedIds=new Set(v.filter(x=>typeof x==='string'));}catch{state.savedIds=new Set();}}
  function updateSavedCount(){ $('saved-count').textContent=state.savedIds.size;$('saved-nav').classList.toggle('active',state.saved);$('browse-nav').classList.toggle('active',!state.saved); }
  function toggleSave(id){
    if(state.savedIds.has(id)){state.savedIds.delete(id);toast('Resource removed from saved.');}else{state.savedIds.add(id);toast('Resource saved in this browser.');}
    try{localStorage.setItem('uccs-resource-hub-saved',JSON.stringify([...state.savedIds]));}catch{toast('Saved for this visit. Browser storage is unavailable.');}
    if(state.saved)render();else updateSaveButtons();
    updateSavedCount();
  }
  function updateSaveButtons(){document.querySelectorAll('[data-save]').forEach(btn=>{const on=state.savedIds.has(btn.dataset.save),r=data.resources.find(x=>x.id===btn.dataset.save);btn.setAttribute('aria-pressed',on);btn.setAttribute('aria-label',`${on?'Unsave':'Save'} ${r?.name||'resource'}`);if(btn.hasAttribute('data-detail-save'))btn.innerHTML=icon('bookmark')+(on?'Saved in this browser':'Save this resource');else if(btn.querySelector('span'))btn.querySelector('span').textContent=on?'Saved':'Save';});}
  function writeUrl(){
    const u=new URL(location.href);u.search='';
    for(const k of ['q','category','location','cost','appointment','sort'])if(state[k]&&state[k]!==({'q':'',category:'all',location:'all',cost:'all',appointment:'all',sort:'recommended'}[k]))u.searchParams.set(k,state[k]);
    if(state.page>1)u.searchParams.set('page',String(state.page));
    if(state.official)u.searchParams.set('official','1');if(state.saved)u.searchParams.set('saved','1');if(openResourceId)u.searchParams.set('resource',openResourceId);
    history.replaceState(null,'',u);
  }
  function readUrl(){
    const p=new URLSearchParams(location.search);
    state.q=p.get('q')||'';
    for(const [key,options] of Object.entries({category:['all',...data.categories.map(c=>c.id)],location:['all','campus','community','online'],cost:['all','free','included','paid'],appointment:['all','walk-in','required'],sort:['recommended','az']}))state[key]=options.includes(p.get(key))?p.get(key):options[0];
    state.official=p.get('official')==='1';state.saved=p.get('saved')==='1';
    state.page=Math.max(1,Math.floor(Number(p.get('page')))||1);
    $('resource-search').value=state.q;$('location-select').value=state.location;$('cost-select').value=state.cost;$('appointment-select').value=state.appointment;$('sort-select').value=state.sort;$('official-check').checked=state.official;
    return p.get('resource');
  }
  function resetFilters(clearSaved=false){state.q='';state.category='all';state.location='all';state.cost='all';state.appointment='all';state.official=false;if(clearSaved)state.saved=false;$('resource-search').value='';$('location-select').value='all';$('cost-select').value='all';$('appointment-select').value='all';$('official-check').checked=false;state.page=1;render();}
  function setCategory(cat){state.category=cat;state.page=1;state.saved=false;closeFilters();render();$('directory').scrollIntoView({behavior:motion()});}
  function motion(){return matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';}
  function renderCategories(){
    $('categories').innerHTML=[{id:'all',label:'All resources',icon:'grid'},...data.categories].map(c=>{const count=c.id==='all'?data.resources.length:data.resources.filter(r=>r.categories.includes(c.id)).length;return `<button type="button" class="category-button ${state.category===c.id?'active':''}" data-category="${c.id}" aria-pressed="${state.category===c.id}"><span class="category-icon" aria-hidden="true">${icon(c.icon)}</span><span>${esc(c.label)}</span><span class="category-count">${count}</span></button>`;}).join('');
  }
  function fieldCount(r){return r.verification.fields.filter(x=>x!=='url').length;}
  function costBadge(r){
    if(!r.verification.fields.includes('cost'))return '';
    const types={free:['No cost','check'],included:['Student access','check'],limited:['Free sessions available','check'],mixed:['Some fees may apply','wallet'],paid:['Fees apply','wallet']};
    const v=types[r.costType];return v?`<span class="small-badge ${['paid','mixed'].includes(r.costType)?'fee':''}">${icon(v[1])}${v[0]}</span>`:'';
  }
  const modeName={campus:'On campus',community:'Off campus',online:'Online'};
  function card(r){
    const c=catMap[r.category], saved=state.savedIds.has(r.id), checked=fieldCount(r)>0, warning=r.tags.includes('Closure notice');
    const detailUrl=new URL(location.href);detailUrl.searchParams.set('resource',r.id);detailUrl.hash='';
    const website=safeUrl(r.url);
    const dots=resourceStatusFlags(r).map(flag=>`<span class="status-dot status-${flag.type}" role="img" aria-label="${esc(flag.label)}" title="${esc(flag.label)}"></span>`).join('');
    return `<article class="resource-result" data-url="${esc(r.url||'')}"><button type="button" class="save-button" data-save="${r.id}" aria-pressed="${saved}" aria-label="${saved?'Unsave':'Save'} ${esc(r.name)}">${icon('bookmark')}<span>${saved?'Saved':'Save'}</span></button><h3><span class="result-status-dots">${dots}</span><a class="result-title" href="${esc(detailUrl.href)}" data-detail="${r.id}" aria-label="View ${esc(r.name)} details">${esc(r.name)}</a></h3>${website?`<a class="result-url" href="${esc(website)}" target="_blank" rel="noopener noreferrer" aria-label="Official website for ${esc(r.name)}">${esc(displayResourceUrl(website))}</a>`:'<p class="result-url missing-url">Official website not listed</p>'}<p class="result-description">${esc(r.description)}</p><div class="result-meta"><span class="category-tag" data-category="${c.id}">${esc(c.label)}</span><span class="meta-line">${icon('pin')}${esc(r.location||r.modes.map(m=>modeName[m]).join(' · '))}</span></div><div class="result-extras"><div class="result-badges">${costBadge(r)}${r.appointment==='walk-in'?'<span class="small-badge">Drop-in</span>':''}${r.modes.includes('online')?'<span class="small-badge">Online</span>':''}${warning?'<span class="small-badge alert">Closure notice</span>':''}<span class="source-state ${checked?'checked':''}">${icon(checked?'check-circle':'info')}${checked?'Official details checked':r.url?'Official link available':'Details need confirmation'}</span></div><button type="button" class="card-detail" data-detail="${r.id}" aria-label="More about ${esc(r.name)}">View full details <span aria-hidden="true">→</span></button></div></article>`;
  }
  function sortResources(list){return [...list].sort((a,b)=>{
    if(state.sort==='az')return a.name.localeCompare(b.name);
    if(state.q){const d=searchScore(b,state.q)-searchScore(a,state.q);if(d)return d;}
    const ai=featured.indexOf(a.id),bi=featured.indexOf(b.id);
    return (ai<0?1000:ai)-(bi<0?1000:bi);
  });}
  function render(){
    const started=performance.now();
    const matches=sortResources(filterResources(data.resources,state));
    const elapsed=performance.now()-started;
    const page=paginateResources(matches,state.page);state.page=page.page;
    renderCategories();updateSavedCount();writeUrl();
    const keyword=state.q|| (state.saved?'saved resources':state.category==='all'?'all resources':catMap[state.category].label);
    $('directory-title').innerHTML=`Resource Search Results For: <strong>${esc(keyword)}</strong>`;
    $('directory-subtitle').textContent=state.saved?'Saved on this device and browser.':state.category==='all'?'':catMap[state.category].originalLabel;
    const timing=elapsed<1?'&lt;0.001':(elapsed/1000).toFixed(3);
    $('result-count').innerHTML=`<strong>${matches.length}</strong> ${state.saved?'saved resources':'resources'}${state.q?` for “${esc(state.q)}”`:' to explore'} <span class="elapsed-time" title="Time spent searching and filtering this directory on your device" aria-hidden="true">(${timing} seconds)</span>`;
    const google=new URL('https://www.google.com/search');google.searchParams.set('q',state.q.trim()||'UCCS student resources');
    $('search-on-google').href=google.href;
    $('google-search-label').textContent=state.q.trim()?`Search “${state.q.trim()}” on Google`:'Search UCCS student resources on Google';
    const active=[];
    if(state.q)active.push(['q',`Search: ${state.q}`]);if(state.category!=='all')active.push(['category',catMap[state.category].label]);if(state.location!=='all')active.push(['location',modeName[state.location]]);if(state.cost!=='all')active.push(['cost',$('cost-select').selectedOptions[0].text]);if(state.appointment!=='all')active.push(['appointment',$('appointment-select').selectedOptions[0].text]);if(state.official)active.push(['official','Has official link']);
    $('active-filters').innerHTML=active.map(([k,label])=>`<button class="filter-pill" type="button" data-remove="${k}" aria-label="Remove filter ${esc(label)}">${esc(label)} <span aria-hidden="true">×</span></button>`).join('')+(active.length?'<button type="button" class="clear-filters" data-clear>Clear filters</button>':'');
    if(matches.length){
      $('resources').innerHTML=page.items.map(card).join('');
      const tokens=pageTokens(page.page,page.totalPages).map(value=>value==='ellipsis'?'<span class="page-ellipsis" aria-hidden="true">…</span>':`<button type="button" data-page="${value}" aria-label="Page ${value}" ${value===page.page?'aria-current="page"':''}>${value}</button>`).join('');
      $('pagination').innerHTML=`<div class="page-numbers"><button type="button" data-page="${page.page-1}" aria-label="Previous page" ${page.page===1?'disabled':''}>Previous</button>${tokens}<button type="button" data-page="${page.page+1}" aria-label="Next page" ${page.page===page.totalPages?'disabled':''}>Next</button></div><p>Showing ${page.start+1}–${page.end} of ${matches.length} resources · Page ${page.page} of ${page.totalPages}</p>`;
    }
    else{$('pagination').innerHTML='';$('resources').innerHTML=`<div class="empty-state">${icon(state.saved?'bookmark':'search')}<h3>${state.saved&&!active.length?'Keep the good finds close.':'No resources found just yet.'}</h3><p>${state.saved&&!active.length?'Tap the bookmark on any resource to build your personal list. Your saves stay in this browser.':'Try a broader search or clear a filter to see more options.'}</p><button type="button" ${state.saved&&!active.length?'data-browse':'data-clear'}>${state.saved&&!active.length?'Explore resources':'Clear filters'}</button></div>`;}
  }
  function reviewDate(r){const raw=r.verification.checkedAt;return raw?new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'}).format(new Date(raw+'T12:00:00Z')):'Not reviewed';}
  function checkedLine(r,field){return r[field]&&r.verification.fields.includes(field)?`<p class="field-provenance">${icon('check-circle')} Checked against official source · ${reviewDate(r)}</p>`:r[field]?'<p class="field-provenance">Contact provider to confirm current details</p>':'';}
  function detailField(r,label,field,ico,content){return `<div class="detail-field"><div class="field-heading">${icon(ico)}${label}</div><p class="${!r[field]?'missing':''}">${content??esc(r[field]||'Not listed. Contact the provider.')}</p>${checkedLine(r,field)}</div>`;}
  function openResource(id,trigger){
    const r=data.resources.find(x=>x.id===id);if(!r){toast('That resource was not found.');return;}
    if(trigger)returnFocus=trigger;
    const v=r.verification,checked=fieldCount(r)>0,c=catMap[r.category];openResourceId=id;
    const sourceLabel=checked?'Some details checked against official sources':r.url?'Official link found; offering needs confirmation':'Current details need confirmation';
    const website=r.url&&safeUrl(r.url),tel=r.phone?`tel:${r.phone.replace(/[^+0-9]/g,'')}`:'',email=r.email?`mailto:${encodeURIComponent(r.email)}`:'';
    const directions=r.mapAddress?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.mapAddress)}`:'';
    $('detail-content').innerHTML=`<div class="dialog-body"><button type="button" class="dialog-close" data-close aria-label="Close resource details">${icon('close')}</button><p class="eyebrow">${esc(c.originalLabel)}</p><h2 id="detail-title">${esc(r.name)}</h2><div class="detail-top-badges"><span class="small-badge">${esc(r.modes.map(m=>modeName[m]).join(' · '))}</span>${costBadge(r)}${r.tags.includes('Closure notice')?'<span class="small-badge alert">Closure notice</span>':''}</div><p>${esc(r.description)}</p>${checkedLine(r,'description')}<div class="detail-actions">${website?`<a class="button button-dark" href="${esc(website)}" target="_blank" rel="noopener noreferrer">${fieldCount(r)>0?'Visit official resource':'Visit provider page'} ${icon('external')}</a>`:''}${tel?`<a class="button button-light" href="${esc(tel)}">${icon('phone')} Call</a>`:''}${email?`<a class="button button-light" href="${esc(email)}">${icon('mail')} Email</a>`:''}${directions?`<a class="button button-light" href="${esc(directions)}" target="_blank" rel="noopener noreferrer">${icon('pin')} Directions</a>`:''}${!website?'<p>No verified official resource link is listed yet. Contact the relevant campus department or provider.</p>':''}</div><div class="detail-grid">${detailField(r,'Location','location','pin')}${detailField(r,'Hours & availability','hours','clock')}${detailField(r,'Cost & fees','cost','wallet')}${detailField(r,'Eligibility','eligibility','people')}${detailField(r,'How to access','access','calendar')}${detailField(r,'What to bring','bring','bag')}${detailField(r,'Phone','phone','phone',r.phone?`<a href="${esc(tel)}">${esc(r.phone)}</a>`:null)}${detailField(r,'Email','email','mail',r.email?`<a href="${esc(email)}">${esc(r.email)}</a>`:null)}</div><div class="detail-check"><h3>${icon(checked?'check-circle':'info')}${sourceLabel}</h3>${v.checkedAt?`<p>Official source review: ${reviewDate(r)}.<br>Checked fields: ${esc(v.fields.map(x=>({url:'website link',bring:'what to bring',access:'access instructions'}[x]||x)).join(', '))}.</p>`:'<p>Current details have not been independently confirmed.</p>'}<ul>${visibleVerificationNotes(r).map(n=>`<li>${esc(n)}</li>`).join('')}</ul></div>${r.officialSources.length||r.additionalLinks.length?`<h3>Official pages & useful links</h3><ul class="official-links">${[...r.officialSources,...r.additionalLinks].filter((x,i,a)=>safeUrl(x.url)&&a.findIndex(y=>y.url===x.url)===i).map(s=>`<li><a href="${esc(safeUrl(s.url))}" target="_blank" rel="noopener noreferrer">${esc(s.title||s.url)} ${icon('external')}</a></li>`).join('')}</ul>`:''}<div class="detail-bottom"><button type="button" data-save="${r.id}" data-detail-save aria-pressed="${state.savedIds.has(r.id)}">${icon('bookmark')}${state.savedIds.has(r.id)?'Saved in this browser':'Save this resource'}</button><button type="button" data-copy="${r.id}">${icon('link')} Copy resource link</button><button type="button" data-print>${icon('print')} Print details</button></div></div>`;
    if(!$('resource-dialog').open)$('resource-dialog').showModal();
    $('resource-dialog').scrollTop=0;document.body.classList.add('dialog-open');writeUrl();
  }
  function closeDialog(dialog){dialog.close();}
  function openFilters(){$('filters').classList.add('open');$('filter-scrim').hidden=false;$('mobile-filter-open').setAttribute('aria-expanded','true');$('mobile-filter-close').focus();document.body.classList.add('dialog-open');}
  function closeFilters(){const was=$('filters').classList.contains('open');$('filters').classList.remove('open');$('filter-scrim').hidden=true;$('mobile-filter-open').setAttribute('aria-expanded','false');if(!$('resource-dialog').open)document.body.classList.remove('dialog-open');if(was)$('mobile-filter-open').focus();}
  async function copyLink(id){const u=new URL(location.origin+location.pathname);u.searchParams.set('resource',id);try{await navigator.clipboard.writeText(u.href);toast('Resource link copied.');}catch{const area=document.createElement('textarea');area.value=u.href;document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();toast(ok?'Resource link copied.':'Copy the link from your browser address bar.');}}
  document.addEventListener('click',event=>{
    const button=event.target.closest('button,a');if(!button)return;
    if(button.dataset.category){setCategory(button.dataset.category);return;}
    if(button.hasAttribute('data-search')){resetFilters(true);state.q=button.dataset.search;$('resource-search').value=state.q;state.page=1;render();$('directory').scrollIntoView({behavior:motion()});return;}
    if(button.hasAttribute('data-detail')){if(button.tagName==='A'&&(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey))return;event.preventDefault();openResource(button.dataset.detail,button);return;}
    if(button.hasAttribute('data-save')){toggleSave(button.dataset.save);return;}
    if(button.hasAttribute('data-close')){closeDialog(button.closest('dialog'));return;}
    if(button.hasAttribute('data-clear')){resetFilters();return;}
    if(button.hasAttribute('data-browse')){resetFilters(true);return;}
    if(button.dataset.remove){const k=button.dataset.remove;state[k]=k==='q'?'':k==='official'?false:'all';if(k==='q')$('resource-search').value='';if(k==='official')$('official-check').checked=false;const sel=$(`${k}-select`);if(sel)sel.value='all';state.page=1;render();return;}
    if(button.hasAttribute('data-copy')){copyLink(button.dataset.copy);return;}
    if(button.hasAttribute('data-print')){print();return;}
    if(button.hasAttribute('data-page')){state.page=Number(button.dataset.page);render();$('directory-title').focus({preventScroll:true});$('directory').scrollIntoView({behavior:motion()});return;}
  });
  $('search-form').addEventListener('submit',e=>{e.preventDefault();state.q=$('resource-search').value;state.page=1;render();$('directory').scrollIntoView({behavior:motion()});});
  $('resource-search').addEventListener('input',()=>{state.q=$('resource-search').value;state.page=1;render();});
  for(const key of ['location','cost','appointment','sort'])$(`${key}-select`).addEventListener('change',e=>{state[key]=e.target.value;state.page=1;render();});
  $('official-check').addEventListener('change',e=>{state.official=e.target.checked;state.page=1;render();});
  $('saved-nav').addEventListener('click',()=>{resetFilters(true);state.saved=true;render();$('directory').scrollIntoView({behavior:motion()});});
  $('browse-nav').addEventListener('click',()=>resetFilters(true));
  $('starting-point').addEventListener('click',e=>openResource('dean-of-students-basic-needs-portal',e.currentTarget));
  $('mobile-filter-open').setAttribute('aria-expanded','false');$('mobile-filter-open').setAttribute('aria-controls','filters');
  $('mobile-filter-open').addEventListener('click',openFilters);$('mobile-filter-close').addEventListener('click',closeFilters);$('filter-scrim').addEventListener('click',closeFilters);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('filters').classList.contains('open')){closeFilters();e.preventDefault();}if(e.key==='Tab'&&$('filters').classList.contains('open')){const els=[...$('filters').querySelectorAll('button,a')],first=els[0],last=els.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
  for(const id of ['resource-dialog']){
    const dialog=$(id);dialog.addEventListener('close',()=>{if(id==='resource-dialog'){openResourceId=null;writeUrl();}if(!document.querySelector('dialog[open]'))document.body.classList.remove('dialog-open');if(returnFocus?.isConnected)returnFocus.focus();});
    dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)closeDialog(dialog);}});
  }
  addEventListener('storage',e=>{if(e.key==='uccs-resource-hub-saved'){readSaved();render();}});
  addEventListener('popstate',()=>{const id=readUrl();render();if(id)openResource(id);else if($('resource-dialog').open)$('resource-dialog').close();});
  decorate();readSaved();
  try{
    const response=await fetch('/data/resources.json');if(!response.ok)throw new Error(`Directory request failed: ${response.status}`);
    data=await response.json();catMap=Object.fromEntries(data.categories.map(c=>[c.id,c]));
    state.savedIds=new Set([...state.savedIds].filter(id=>data.resources.some(r=>r.id===id)));
    $('total-count').textContent=data.resources.length;
    const resourceId=readUrl();render();if(resourceId)openResource(resourceId);
  }catch(error){$('result-count').textContent='The resource directory could not be loaded.';$('resources').innerHTML='<div class="empty-state"><h3>Let’s try that again.</h3><p>Refresh the page to reload the directory. For local use, start a web server using the setup guide.</p><button type="button" onclick="location.reload()">Reload directory</button></div>';console.error(error);}
}
