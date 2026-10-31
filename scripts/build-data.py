#!/usr/bin/env python3
"""Build the public directory from preserved research and explicit verification records."""
import json, re, pathlib, unicodedata
ROOT = pathlib.Path(__file__).resolve().parents[1]
DATE = '2026-10-23'
SRC = 'Extensive Student Resource List.docx'
CATS = [
 ('basic','Basic needs & financial support','Basic Needs & Financial Support','heart',24,29),
 ('academic','Academic support','Academic Support & Success','book',31,40),
 ('library','Library & research','Library & Research Resources','library',42,58),
 ('technology','Technology & software','Technology, Software & Online Tools','laptop',60,80),
 ('wellness','Health & wellness','Health, Counseling & Wellness','health',82,102),
 ('recreation','Recreation & outdoors','Recreation, Outdoors & Fitness','mountain',104,116),
 ('community','Student life & belonging','Student Life, Community & Belonging','people',118,140),
 ('identity','Identity & student support','Identity-Based / Special Population Support','spark',142,148),
 ('career','Career & experience','Career, Professional Development & Experiential Learning','briefcase',150,162),
 ('transportation','Transportation & safety','Transportation, Safety & Campus Navigation','bus',164,173),
 ('arts','Arts & entertainment','Arts, Culture & Entertainment','ticket',175,180),
 ('leadership','Leadership & study abroad','Study Abroad, Leadership & Student Funding','globe',182,186),
 ('local','Colorado Springs resources','Community / Off-Campus Library & Local Resources','pin',188,194),
]
NAMES = {
31:'Kraemer Family Library',32:'Excel Science Center',33:'Excel Writing & Communication Center',34:'Excel Math Center',38:'Green Action Fund',40:'The Garage',42:'Library collections & checkouts',43:'Banned Books events',44:'Library equipment & everyday supplies',45:'Textbook & course reserves',46:'Library study rooms',47:'University Archives',48:'Library digital exhibits',49:'Library A–Z databases',50:'Academic journals & O’Reilly access',51:'BrowZine',52:'Prospector',53:'The New York Times',54:'Author talks & book events',55:'Library borrowing after graduation',56:'Library document scanning',57:'Campus computers & Paw Prints',58:'UCCS Farm research opportunities',62:'CU ChatGPT Edu',65:'Percipio / Skillsoft',69:'OIT Software Catalog',70:'OIT service desk & technology support',71:'Student Laptop Program',72:'UCCS Linux server',73:'GitHub Student Developer Pack & Copilot',80:'Student subscription discounts',83:'UCCS Farm & Greenhouse',84:'Mental Health Services',88:'Environmental Health & Safety training',89:'STI testing clinics',90:'LARC & contraceptive clinics',91:'Fitness Buddies',93:'PEAK Wellness Boxes',94:'University Center wellness vending',95:'Residence hall essentials vending',97:'Mindful movement & meditation',98:'Student cooking classes',99:'Self-defense classes',100:'QPR & bystander intervention training',101:'BLS, CPR & wilderness certifications',102:'Recreation Center massage chair',104:'Gallogly Recreation Center',105:'Alpine Field',106:'Aquatics & pool',107:'SOLE outdoor equipment rental',108:'Campus bike lockers',109:'SOLE climbing wall & climb nights',110:'Group fitness classes',111:'Campus trails',112:'Recreation participation scholarships',113:'SOLE bike & ski workshop',114:'Pedal Perks',115:'Bicycle & e-bike registration',116:'SOLE outdoor trips',119:'Club Match',120:'Club fairs & tabling',121:'Fraternity & sorority life',122:'Faith & religious student groups',123:'Political & social student groups',125:'Student performances & competitions',126:'Residence hall Halloween activities',127:'Oktoberfest & language events',128:'SGA Friendsgiving',129:'Commuter appreciation events',131:'Clyde’s Kickoff & welcome events',132:'Waffle Wednesday',133:'Donut Stress',134:'Clyde’s Birthday',135:'Lion’s Byte Game Room',136:'Farmhouse Fridays',137:'Climate Café',138:'Campus giveaways & sustainability events',139:'Osborne natural history collection',140:'Paid research & survey participation',144:'McCord-Herbst Student Veteran Center',145:'Army ROTC',146:'Office of Institutional Equity',147:'Human Resources for student employees',148:'Housing & Residence Life support',150:'T. Rowe Price Career and Innovation Center',152:'Handshake & career events',153:'Parker Dewey micro-internships',154:'Forage job simulations',155:'CareerFit Colorado',156:'Career Center webinars',157:'College career resources in Canvas',158:'Professional headshot events',159:'Undergraduate research funding',160:'Research & conference travel funding',161:'Entrepreneurship competitions',162:'UCCSlead Day of Service',164:'Mountain Metro bus passes',165:'Campus shuttle',166:'UCCS Safe App',167:'Campus police safety escorts',168:'Weekend & visitor parking',169:'500-series free parking permit',170:'Campus & accessibility maps',171:'Campus lost & found',172:'Microwaves on campus',173:'Lion One Card',175:'Ent Center for the Arts',176:'Heller Center for Arts & Humanities',177:'Student admission to home athletics',178:'Pikes Peak Culture Pass',179:'UCCS alumni coloring pages',180:'UCCS Farm books & community space',182:'First-time passport grant',183:'Education abroad scholarships',184:'UCCSlead',185:'Clyde’s Five',186:'Mountain Lion Research Day poster printing',188:'PPLD library card',189:'Mango Languages',190:'PPLD Wi-Fi hotspot lending',191:'PPLD Chromebook lending',192:'PPLD makerspaces & studios',193:'PPLD digital resources'}

def slug(text):
    return re.sub(r'[^a-z0-9]+','-',unicodedata.normalize('NFKD',text).encode('ascii','ignore').decode().lower()).strip('-')

def build():
    paras=json.loads((ROOT/'src/research.json').read_text())['paragraphs']
    records=[]
    for cat,label,original,icon,start,end in CATS:
        for i in range(start,end+1):
            if i in [58,180,194]: continue
            raw=paras[i].strip()
            name=NAMES.get(i, raw.split(':',1)[0])
            desc=raw.split(':',1)[1].strip() if ':' in raw else raw
            modes=['online'] if cat=='technology' and i not in [70,71] else ['campus']
            if cat=='local' or i in [178]: modes=['community','online']
            if i in [151,152,153,154,155,156,157,179,183]: modes=['online']
            if i==90: modes=['campus','community']
            records.append(dict(id=slug(name),name=name,category=cat,categories=[cat],description=desc,affiliation='community' if cat=='local' or i==178 else 'uccs',modes=modes,location=None,phone=None,email=None,url=None,hours=None,cost=None,eligibility=None,bring=None,access=None,costType='unknown',appointment='unknown',tags=[],verification=dict(status='research',checkedAt=None,fields=[],notes=['Details are from the supplied student research. Current availability, limits, fees, and access requirements have not been independently confirmed.']),sources=[dict(document=SRC,paragraph=i+1,text=raw)],sourceIndices=[i],officialSources=[],additionalLinks=[]))
    def byidx(i): return next(r for r in records if i in r['sourceIndices'])
    # One canonical Farm entry retains all three source descriptions and appears in four categories.
    farm=byidx(83)
    farm['categories']=['wellness','basic','library','arts']
    for i in [58,180]:
        farm['sourceIndices'].append(i)
        farm['sources'].append(dict(document=SRC,paragraph=i+1,text=paras[i]))
    byidx(31)['category']='library'; byidx(31)['categories']=['library','academic']
    byidx(38)['categories']=['academic','leadership']
    byidx(130)['categories']=['community','wellness']
    byidx(114)['categories']=['recreation','transportation']
    byidx(115)['categories']=['recreation','transportation']
    byidx(143)['categories']=['identity','community']
    byidx(29)['categories']=['basic','identity','community']

    def split(i, items):
        base=byidx(i); records.remove(base)
        for name,desc in items:
            r=json.loads(json.dumps(base)); r.update(id=slug(name),name=name,description=desc); records.append(r)
    split(79,[('Student Beans','Student discounts and offers through Student Beans; verification and offer terms vary.'),('UNiDAYS','Student discounts through UNiDAYS; student verification and individual offer terms apply.')])
    split(80,[(name,desc) for name,desc in [
        ('Amazon student offers','Student subscription offers from Amazon. Confirm the current plan, trial, pricing, and eligibility.'),
        ('Spotify Premium Student','Student subscription pricing from Spotify. Verify eligibility and current subscription terms.'),
        ('Apple Music Student','Student subscription pricing from Apple Music. Verify eligibility and current subscription terms.'),
        ('Headspace student plan','Student pricing for Headspace wellness content. Confirm availability and current terms.'),
        ('YouTube Premium Student','Student subscription pricing from YouTube. Confirm eligibility, pricing, and plan terms.')]])
    split(192,[('PPLD makerspaces','Community access to making equipment, creative tools, and workshops. Requirements and materials fees vary.'),('PPLD recording studios','Community recording spaces and audio/video equipment. Reservations and location-specific rules apply.')])
    # Expand each named service in the final community paragraph rather than losing it in one catch-all card.
    local_items=[
      ('Food to Power No Cost Grocery','Food pantry and grocery support in Colorado Springs.'),
      ('RAD Hostel','A Colorado Springs hostel listed in the research as a short-stay lodging option. Confirm pricing and availability; this is not an emergency shelter.'),
      ('El Paso County Citizen Service Center','County services and public assistance information.'),
      ('Colorado Springs community gardens','Community gardening opportunities. Specific garden locations, fees, and participation rules are not listed.'),
      ('Manitou Springs mineral springs','Explore the mineral springs mentioned in the research; check official visitor information before visiting.'),
      ('PPLD branches & community events','Public library locations, classes, and community events across the Pikes Peak region.'),
      ('Colorado Springs parks & trails','Local parks and trails. The source suggests Strava and AllTrails to explore routes; confirm local conditions.'),
      ('Bear Creek Nature Center','Nature center, trails, and educational programs.'),
      ('Fountain Creek Nature Center','Nature center, trails, and educational programs.'),
      ('Garden of the Gods Visitor & Nature Center','Visitor information and nature experiences in the Garden of the Gods area.'),
      ('Manitou Springs museums','Local museum experiences mentioned in the research. No specific museums or admission policies were named.'),
      ('Local farmers markets','Seasonal farmers markets. The source does not name specific markets, dates, or locations.')]
    for name,desc in local_items:
        records.append(dict(id=slug(name),name=name,category='local',categories=['local']+(['basic'] if name.startswith(('Food','El Paso')) else []),description=desc,affiliation='community',modes=['community'],location=None,phone=None,email=None,url=None,hours=None,cost=None,eligibility=None,bring=None,access=None,costType='unknown',appointment='unknown',tags=[],verification=dict(status='research',checkedAt=None,fields=[],notes=['Named in the supplied community research. Current details need verification.']),sources=[dict(document=SRC,paragraph=195,text=paras[194])],sourceIndices=[194],officialSources=[],additionalLinks=[]))
    # Resources only named on the printable reference sheet.
    for name,cat,desc in [
      ('Dean of Students & Basic Needs Portal','basic','A starting point for basic needs support and connecting with campus assistance.'),
      ('UCCS CARE Team','basic','Support and coordinated outreach for students experiencing challenges or concerning situations.'),
      ('SGA project & student organization funding','leadership','Student Government Association funding opportunities for eligible student activities and projects.'),
      ('Responsible Conduct of Research training','career','Research training and certification mentioned on the printable resource sheet.')]:
        records.append(dict(id=slug(name),name=name,category=cat,categories=[cat],description=desc,affiliation='uccs',modes=['campus','online'],location=None,phone=None,email=None,url=None,hours=None,cost=None,eligibility=None,bring=None,access=None,costType='unknown',appointment='unknown',tags=[],verification=dict(status='research',checkedAt=None,fields=[],notes=['Listed in the supplied printable reference. Contact the provider for current access details.']),sources=[dict(document='Printable UCCS Resources Reference Sheet.pdf',page=1,text=name)],sourceIndices=[],officialSources=[],additionalLinks=[]))

    # Attach cross-references to the shorter sheet; the long source remains the canonical inventory.
    glance=json.loads((ROOT/'src/at-a-glance.json').read_text())['paragraphs']
    anchors={24:'Clyde’s Cupboard',25:'Clyde’s Closet',26:'Mountain Lion Meals',27:'Basic Needs / Single Stop',29:'Wellness Center, MOSAIC Center',31:'Kraemer Family Library (KFL)',32:'Excel Centers',35:'Academic Advising',36:'TRIO / Disability Services',37:'TRIO / Disability Services',82:'Wellness Center:',85:'TELUS Health',83:'UCCS Farm & Greenhouse',118:'Student Life & Club Match',142:'First2Go / MOSAIC',143:'First2Go / MOSAIC',185:'Clyde’s Five / UCCSlead',184:'Clyde’s Five / UCCSlead',150:'Career Center:',164:'Mountain Metro Bus Passes',165:'Campus Shuttle',166:'UCCS Safe App / Police Escorts',167:'UCCS Safe App / Police Escorts',169:'500-Series Parking'}
    for r in records:
        for i in r['sourceIndices']:
            if i in anchors:
                for j,p in enumerate(glance):
                    if anchors[i].lower() in p.lower(): r['sources'].append(dict(document='At a Glance Student Resources.docx',paragraph=j+1,text=p)); break
    # Keep source-provided locations separate from independently checked addresses.
    source_locations={34:'Kraemer Family Library, first floor near circulation',39:'Osborne Center, third floor',40:'Osborne Center, third floor',94:'University Center, first floor',95:'Residence halls, including La Plata first floor',98:'Recreation Center, Mountain Lion Meet room',102:'Recreation Center, near pool locker rooms and basketball courts',105:'Alpine Parking Garage rooftop field',135:'University Center, first floor',139:'Osborne Center, fourth floor',150:'University Center, first floor'}
    for i,v in source_locations.items(): byidx(i)['location']=v
    byidx(83)['description']='A campus farm and greenhouse with a free farm stand, learning opportunities, and a place to connect with food and nature.'
    byidx(84)['description']='Counseling and mental health support through the UCCS Wellness Center.'
    byidx(136)['description']='A past farm meal program listed in the research. Future sessions, including the suggested fall 2027 return, are not confirmed.'
    byidx(107)['description']='Borrow outdoor gear from SOLE for camping, cycling, snow sports, and other outdoor adventures. Rental charges apply.'
    byidx(106)['description']='Lap swimming and recreational aquatics at the Recreation Center. Check the current closure notice before visiting.'
    # Apply official evidence without treating unchecked source fields as verified.
    for path in sorted((ROOT/'src').glob('verified-*.json')):
        entries=json.loads(path.read_text())
        if isinstance(entries,dict): entries=entries.get('resources',entries.get('records',[]))
        for patch in entries:
            match=patch.get('match')
            targets=[r for r in records if (isinstance(match,int) and match in r['sourceIndices']) or (isinstance(match,str) and (match==r['name'] or match==r['id']))]
            if not targets: raise ValueError(f'Unmatched verification entry: {match!r} in {path}')
            for r in targets:
                for field in ['description','phone','email','location','hours','cost','eligibility','bring','access','url','costType','appointment','additionalLinks','modes','tags','linkType']:
                    if field in patch: r[field]=patch[field]
                fields=patch.get('verifiedFields',[])
                r['verification']['status']='partial' if fields else 'research'
                r['verification']['checkedAt']=(patch.get('checkedAt') or patch.get('lastVerified') or DATE) if fields else None
                r['verification']['fields']=sorted(set(r['verification']['fields']+fields))
                notes=patch.get('notes',[])
                if isinstance(notes,str): notes=[notes]
                r['verification']['notes']=notes+['Only the fields named as checked have been confirmed against an official page. Other details come from the student research or remain unlisted.']
                r['officialSources']=patch.get('sources',[])
                if patch.get('mapAddress') and 'location' in fields: r['mapAddress']=patch['mapAddress']
    # Search is based on normalized names, needs, category synonyms, source notes, and details.
    aliases={24:'food pantry hunger groceries grocery toiletries',25:'professional clothes interview clothing',26:'food hunger meals dining',27:'housing rent bills basic needs financial help',28:'money bills rent emergency financial help',32:'tutor tutoring science homework chemistry biology physics',33:'tutor tutoring essay writing paper speech interview resume',34:'tutor tutoring math homework calculus algebra statistics computer science',35:'course schedule degree advising',36:'first generation low income disability academic support',37:'disability accessibility accommodations accessible',44:'chargers cords supplies umbrella bike lock headphones',45:'textbooks school books course materials',57:'print printer printing computer scanner',70:'IT help tech support password computer',71:'borrow laptop computer device',83:'free food produce herbs eggs farm animals community garden',84:'therapy counseling anxiety depression mental health',85:'therapy counseling anxiety depression mental health online support',86:'dietitian nutrition food health',87:'health habits coaching',89:'sexual health sti std testing',90:'birth control contraception iud reproductive sexual health',91:'fitness exercise partner buddy',93:'wellness free supplies boxes',96:'therapy dogs canine stress pets',104:'gym exercise workout fitness',107:'camping tent outdoor equipment gear rentals',113:'bike repair ski workshop tools',118:'friends clubs student organizations campus involvement',142:'first generation firstgen support',143:'friends peer mentor mentorship belonging',150:'jobs career employment resume cover letter interview internship',153:'job internship paid work micro internship',164:'city bus transport commute',165:'shuttle transport ride campus',169:'free car parking permit',175:'theater theatre arts concerts music free tickets',182:'passport study abroad travel grant',183:'study abroad travel scholarship',188:'public library card books',190:'wifi wi fi hotspot internet',191:'laptop chromebook computer device'}
    for r in records:
        r['tags']=list(dict.fromkeys(r['tags']))
        r['searchTerms']=' '.join([r['name'],r['description']]+[aliases[i] for i in r['sourceIndices'] if i in aliases]+r['tags']+[s['text'] for s in r['sources']]+[r.get(f) or '' for f in ['location','eligibility','cost']])
    records.sort(key=lambda r: next(i for i,c in enumerate(CATS) if c[0]==r['category']))
    output=dict(schemaVersion=1,researchDate='October 2026',checkedAt=DATE,title='UCCS Student Resource Hub',categories=[dict(id=c[0],label=c[1],originalLabel=c[2],icon=c[3]) for c in CATS],resources=records)
    (ROOT/'dist/data/resources.json').write_text(json.dumps(output,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(dict(resources=len(records),categories=len(CATS),officialPages=sum(bool(r['url']) for r in records),checked=sum(bool(r['verification']['fields']) for r in records))))
if __name__=='__main__': build()
