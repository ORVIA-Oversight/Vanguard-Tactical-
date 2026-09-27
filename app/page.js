import {Shell,Kicker,Btn,ProductCard,ImagePanel,Metric} from './components';

const HERO='https://images.pexels.com/photos/3706636/pexels-photo-3706636.jpeg?cs=srgb&dl=pexels-kony-xyzx-2079231-3706636.jpg&fm=jpg';
const TEAM='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?cs=srgb&dl=pexels-gmb-visuals-564876670-20335224.jpg&fm=jpg';
const TEAM2='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?cs=srgb&dl=pexels-gmb-visuals-564876670-20335223.jpg&fm=jpg';

export default function Home(){return <Shell>
<section className="alpha-banner">PRIVATE ALPHA / PRODUCT PROTOTYPE — NOT YET PUBLICLY LAUNCHED</section>
<section className="hero"><div className="hero-copy"><div className="hero-logo-lockup" role="img" aria-label="Vanguard Tactical logo"></div><Kicker>VANGUARD TACTICAL / UNITED KINGDOM</Kicker><h1>PLAN IT.<br/><em>RUN IT.</em><br/>UNDERSTAND IT.</h1><p>Player profiles, team operations, events, equipment, scenarios and ATAC live field awareness — one connected platform for modern airsoft and milsim.</p><div className="hero-actions"><Btn href="/signup">CREATE FREE PROFILE</Btn><Btn href="/for-teams-organisers" secondary>RUN AN EVENT</Btn></div></div><div className="hero-visual" style={{backgroundImage:`url('${HERO}')`}}><div className="hero-stamp"><small>VANGUARD / PRIVATE ALPHA</small><b>PLAYER → TEAM → EVENT → FIELD → RECORD</b></div></div></section>
<div className="metric-strip"><Metric value="01" label="Portable player identity"/><Metric value="02" label="Team & event operations"/><Metric value="03" label="ATAC field awareness"/><Metric value="04" label="Scenario engine"/></div>

<section className="section"><div className="section-head"><div><Kicker>ONE PLATFORM / THREE MOMENTS</Kicker><h2>BEFORE. DURING. AFTER.</h2></div><p className="section-intro">Vanguard connects the whole weekend instead of adding another disconnected team app. Prepare the player and team, run the event, then keep the record that matters afterwards.</p></div><div className="products">
<ProductCard icon="users" tag="BEFORE" title="Player & team ready." href="/platform">Portable profile, memberships, availability, equipment, event attendance and controlled information.</ProductCard>
<ProductCard icon="map" tag="DURING" title="One event picture." href="/atac">ATAC adds event-scoped callsigns, field awareness, marks, messages and status when the event needs it.</ProductCard>
<ProductCard icon="check" tag="AFTER" title="Keep the useful record." href="/platform">Attendance, actions, equipment return, AAR and event history remain connected to the right people.</ProductCard>
</div></section>

<section className="section section-dark"><div className="section-head"><div><Kicker>WHO IT IS FOR</Kicker><h2>THE PLAYER IS PORTABLE. THE PLATFORM CONNECTS EVERYONE ELSE.</h2></div><p className="section-intro">A player owns one Vanguard identity. Teams, organisers and sites interact with that identity through permissions and event relationships rather than creating another copy of the same person.</p></div><div className="products">
<ProductCard icon="users" tag="PLAYERS" title="Your profile travels with you." href="/platform">Callsign, memberships, personal equipment, availability and event history — owned by the player.</ProductCard>
<ProductCard icon="shield" tag="TEAMS" title="Run the team without owning the person." href="/for-teams-organisers">Roster, roles, events, team equipment, actions, documents and reserve structures.</ProductCard>
<ProductCard icon="calendar" tag="ORGANISERS & SITES" title="Turn attendance into an event." href="/for-teams-organisers">Registration, briefing, assignments, scenarios, ATAC activation and post-event records.</ProductCard>
</div></section>

<section className="section"><div className="split"><div><Kicker>PORTABLE PLAYER PASSPORT</Kicker><h2>YOUR PROFILE BELONGS TO YOU — NOT TO A TEAM.</h2><p>Create it once. Join 6 Troop, another team or a future event without rebuilding your identity every time. Teams receive only the operational view they are permitted to use.</p><div className="feature-list"><div className="feature-row"><span className="num">01</span><b>Callsign & identity</b><span>PLAYER OWNED</span></div><div className="feature-row"><span className="num">02</span><b>Personal equipment</b><span>PORTABLE</span></div><div className="feature-row"><span className="num">03</span><b>Team memberships</b><span>MULTI-TEAM</span></div><div className="feature-row"><span className="num">04</span><b>Event history</b><span>CONNECTED</span></div></div><div className="actions"><Btn href="/signup">CREATE PROFILE</Btn></div></div><ImagePanel image={TEAM} label="PLAYER / TEAM / EVENT" title="ONE IDENTITY. MANY RELATIONSHIPS."/></div></section>

<section className="section section-dark"><div className="split"><ImagePanel image={TEAM2} label="ATAC / LIVE FIELD LAYER" title="ACTIVATE IT WHEN THE EVENT NEEDS IT."/><div><Kicker>ATAC</Kicker><h2>LIVE FIELD AWARENESS WITHOUT PERMANENT TRACKING.</h2><p>ATAC is an event-scoped field layer: callsigns, position freshness, accuracy, ground marks, structured traffic and the event brief. Existing live capability and future Vanguard integration are labelled separately.</p><div className="actions"><Btn href="/atac">EXPLORE ATAC</Btn></div></div></div></section>

<section className="section"><div className="section-head"><div><Kicker>SCENARIO ENGINE</Kicker><h2>DON'T JUST BOOK A GAME DAY. RUN AN EXPERIENCE.</h2></div><p className="section-intro">Reusable scenario IP can combine organiser briefs, factions, objectives, injects, scoring and optional ATAC layers. AI Commander, OPFOR and Umpire concepts remain clearly labelled prototype capabilities until field-tested.</p></div><div className="actions"><Btn href="/scenarios">EXPLORE SCENARIOS</Btn></div></section>

<section className="section section-dark"><div className="section-head"><div><Kicker>SPONSORED PROVING TEAM</Kicker><h2>6 TROOP TESTS VANGUARD. IT IS NOT VANGUARD.</h2></div><div><p className="section-intro">6 Troop is an independent sporting airsoft/milsim team sponsored by Vanguard Tactical. 7 Troop is its reserve and augmentation element. Their use helps prove the product without defining the platform.</p><div className="actions"><Btn href="/ecosystem">SEE THE ECOSYSTEM</Btn></div></div></div></section>

<section className="band"><h2>ONE PROFILE. BETTER TEAMS. BETTER EVENTS. A CLEARER FIELD PICTURE.</h2><Btn href="/signup">ENTER THE ALPHA</Btn></section>
</Shell>}
