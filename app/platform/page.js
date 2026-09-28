import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/10349615/pexels-photo-10349615.jpeg?cs=srgb&dl=pexels-ron-lach-10349615.jpg&fm=jpg';
export const metadata={title:'Platform',description:'Portable participant identity, teams, events, equipment, scenarios and field awareness in one connected Vanguard operating model.'};
export default function Page(){return <Shell>
<PageHero kicker="Vanguard platform" title="One identity. Many relationships. One operating record." text="Vanguard connects the participant, team, event, field and post-event record without forcing every person into a duplicate profile or disconnected tool." image={IMG} chips={['PARTICIPANT ID','TEAMS','EVENTS','EQUIPMENT','SCENARIOS','FIELD AWARENESS']}/>
<section className="platform-band"><div className="shell"><Kicker>Operating model</Kicker><div className="platform-loop">{['PARTICIPANT','TEAM','EVENT','FIELD','RECORD'].map(x=><span className="loop-node" key={x}>{x}</span>)}</div><div className="before-after"><span>BEFORE</span><span>DURING</span><span>AFTER</span></div></div></section>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Platform core</Kicker><h2>Built around relationships, not duplicate records.</h2></div><p className="section-intro">The participant owns one identity. Teams, organisers and sites receive the scoped operational view required for the relationship or event. The event becomes the point where people, equipment, roles, scenario and field capability meet.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Participant profile</h3><p>Identity, memberships, equipment, preferences, readiness and event history in one portable profile.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Teams</h3><p>Roster, roles, availability, sub-groups, team-owned equipment, training, actions and documents.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Events & exercises</h3><p>Attendance, timings, briefings, roles, scenario, equipment requirements and the useful post-event record.</p></div>
<div className="content-card"><Icon name="box"/><h3>Equipment readiness</h3><p>Compare what the event needs with participant-owned and team-owned capability, then surface gaps before arrival.</p></div>
<div className="content-card"><Icon name="play"/><h3>Scenario engine</h3><p>Reusable event or exercise structures combining organiser guidance, objectives, phases, injects, scoring and optional live layers.</p></div>
<div className="content-card"><Icon name="map"/><h3>Field awareness</h3><p>Event-scoped map awareness, identifiers, position freshness, field marks, structured traffic and event brief where appropriate.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Capability truth</Kicker><h2>Live. In development. Planned.</h2></div><p className="section-intro">Vanguard does not need fake completeness. Sports workflows are the strongest current proof. Broader training and readiness functions remain clearly labelled while they are developed and validated.</p></div><div className="content-grid">
<div className="content-card"><Icon name="check"/><h3>Live</h3><p>Current working product and verified backend capability.</p></div>
<div className="content-card"><Icon name="bolt"/><h3>In development</h3><p>Functions actively being built or adapted for additional sectors.</p></div>
<div className="content-card"><Icon name="eye"/><h3>Planned</h3><p>Commercial directions that remain deliberately labelled until built and tested.</p></div>
</div></div></section>
<section className="band"><div className="band-inner"><h2>One platform. Different fields. Same operating discipline.</h2><Btn href="/sectors">Explore use cases</Btn></div></section>
</Shell>}