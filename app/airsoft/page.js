import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'Airsoft programme',description:'Vanguard Tactical supports organised airsoft through its sponsored 6 Troop and 7 Troop team programme, command suite and player workspaces.'};
export default function Page(){return <Shell>
<PageHero kicker="Sport & recreation / Airsoft" title="A sponsored team programme built to grow itself." text="Airsoft is one Vanguard use case, not the Vanguard identity. Within that sector, Vanguard Tactical sponsors 6 Troop and 7 Troop as dedicated sporting airsoft teams and uses the platform to help them organise, develop, fund equipment and grow sustainably." image={IMG} chips={['6 TROOP','7 TROOP','TEAM COMMAND','PLAYER WORKSPACE','SPONSORSHIP','SELF-SUSTAINING MODEL']}/>

<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>The model</Kicker><h2>Play as one collective team. Grow through the platform around it.</h2></div><p className="section-intro">The aim is not to build a loose collection of individuals who happen to attend the same event. The programme creates a shared team structure, visible roles, equipment readiness, training, attendance and development — while leaving room for different experience levels and personalities.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Mixed experience</h3><p>Experienced players, former service personnel, established airsofters and newer members can all contribute. Nobody has to arrive fully formed to belong.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Collective team</h3><p>The team plans, attends and operates as a collective rather than a collection of individual loadouts and private agendas.</p></div>
<div className="content-card"><Icon name="check"/><h3>Development pathway</h3><p>People can grow into responsibility through participation, reliability, team contribution and demonstrated capability.</p></div>
</div></div></section>

<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Team command suite</Kicker><h2>Structure creates clarity — not theatre.</h2></div><p className="section-intro">The team model borrows useful organisational ideas from UK military team structures because they are easy to understand under pressure: clear leadership, second-in-command cover, defined responsibilities and small-team accountability. It is a sporting structure and does not imply military affiliation or qualification.</p></div><div className="clarity-grid">
<div className="content-card"><Icon name="shield"/><h3>Team Leader</h3><p>Sets the event plan, confirms intent, assigns responsibilities and holds the final team-level decision role.</p></div>
<div className="content-card"><Icon name="users"/><h3>2IC</h3><p>Supports the Team Leader, maintains continuity, tracks readiness and can take over the coordination role when needed.</p></div>
<div className="content-card"><Icon name="radio"/><h3>Team functions</h3><p>Members can hold practical functions such as comms, navigation, logistics, welfare, equipment or event administration according to experience and interest.</p></div>
<div className="content-card"><Icon name="eye"/><h3>Review & learning</h3><p>After-action review is used to improve the team rather than blame individuals. What worked, what did not and what needs action stays visible.</p></div>
</div></div></section>

<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Personalised player area</Kicker><h2>Every member gets their own operating space.</h2></div><p className="section-intro">Each player gets a personal Vanguard area that connects them to the team without making the team own their permanent identity.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Profile & role</h3><p>Callsign, team relationship, current role, availability and event history.</p></div>
<div className="content-card"><Icon name="box"/><h3>Kit & equipment</h3><p>Personal equipment, team-issued kit, gaps, reservations and readiness for the next event.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Events & attendance</h3><p>Upcoming events, attendance decisions, timings, briefs and assigned actions.</p></div>
<div className="content-card"><Icon name="play"/><h3>Training & development</h3><p>Shared resources, optional development, practical team learning and progression into responsibility.</p></div>
<div className="content-card"><Icon name="radio"/><h3>ATAC / field view</h3><p>Where enabled, the event-scoped field layer connects callsigns, map status and field information to the same event.</p></div>
<div className="content-card"><Icon name="check"/><h3>Actions</h3><p>Players can see what they personally need to complete before the next team event.</p></div>
</div></div></section>

<section className="section readiness-section"><div className="section-inner"><div className="section-head"><div><Kicker>Self-sustaining team model</Kicker><h2>Sponsorship should build capability, not dependency.</h2></div><p className="section-intro">Vanguard Tactical sponsors 6 Troop and 7 Troop, but the long-term goal is to create a team programme that can progressively fund its own growth through commercial activity, sponsorship, partnerships and shared equipment planning.</p></div><div className="readiness-grid">
<div><Icon name="box"/><h3>Shared team kit</h3><p>Build common equipment pools where it makes financial and operational sense.</p></div>
<div><Icon name="target"/><h3>Sponsorship</h3><p>Seek relevant commercial partners for equipment, clothing, communications, events and services that genuinely support the team.</p></div>
<div><Icon name="users"/><h3>Team identity</h3><p>Consistent team clothing, patches and visual identity help the group operate and present itself as a collective.</p></div>
<div><Icon name="bolt"/><h3>Reinvestment</h3><p>Where Vanguard-generated or sponsorship income supports the programme, the aim is to reinvest into game days, equipment, training and team growth.</p></div>
</div></div></section>

<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Sponsored teams</Kicker><h2>6 Troop and 7 Troop are the dedicated Vanguard airsoft teams.</h2></div><p className="section-intro">6 Troop is the primary team. 7 Troop is the reserve and augmentation element used to strengthen the main team when required. Both sit inside the sporting programme, not above Vanguard Tactical as a business.</p></div><div className="actions"><Btn href="/6-troop">Explore 6 Troop</Btn></div></div></section>

<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Participation standard</Kicker><h2>Professional attitude. Accessible entry.</h2></div><p className="section-intro">The programme can include highly experienced players and complete novices. The common standard is reliability, respect, safe play, teamwork and willingness to contribute to the group.</p></div><div className="content-grid">
<div className="content-card"><h3>Experienced players</h3><p>Bring technical knowledge, event experience and practical mentoring to the team.</p></div>
<div className="content-card"><h3>Developing players</h3><p>Get a clearer path into equipment, game-day preparation, team skills and responsibility.</p></div>
<div className="content-card"><h3>New players</h3><p>Can join without pretending to know everything. The team structure should make entry easier, not intimidating.</p></div>
</div></div></section>

<section className="band"><div className="band-inner"><h2>One team. Clear roles. Shared growth.</h2><Btn href="/6-troop">Meet the Vanguard airsoft teams</Btn></div></section>
</Shell>}