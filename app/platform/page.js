import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'Platform',description:'Portable player identity, teams, events, equipment, scenarios and ATAC in one connected Vanguard operating model.'};
export default function Page(){return <Shell>
<PageHero kicker="Vanguard platform" title="One identity. Many relationships. One operating record." text="Vanguard connects the player, team, event, field and post-event record without forcing every participant into a duplicate profile or disconnected tool." image={IMG} chips={['PLAYER PASSPORT','TEAMS','EVENTS','EQUIPMENT','SCENARIOS','ATAC']}/>
<section className="platform-band"><div className="shell"><Kicker>Operating model</Kicker><div className="platform-loop">{['PLAYER','TEAM','EVENT','FIELD','RECORD'].map(x=><span className="loop-node" key={x}>{x}</span>)}</div><div className="before-after"><span>BEFORE</span><span>DURING</span><span>AFTER</span></div></div></section>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Platform core</Kicker><h2>Built around relationships, not duplicate records.</h2></div><p className="section-intro">The player owns one identity. Teams, organisers and sites receive the scoped operational view required for the relationship or event. The event then becomes the point where people, equipment, scenario and field capability meet.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Player Passport</h3><p>Callsign, memberships, personal equipment, preferences and event history in a portable player-owned profile.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Teams</h3><p>Roster, roles, availability, reserve structures, team-owned equipment, training, actions and documents.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Events</h3><p>Attendance, timings, briefing, roles, scenario, equipment requirements and the useful post-event record.</p></div>
<div className="content-card"><Icon name="box"/><h3>Equipment readiness</h3><p>Compare the event requirement with player-owned and team-owned kit, then surface the gap before arrival.</p></div>
<div className="content-card"><Icon name="play"/><h3>Scenario engine</h3><p>Reusable event IP combining organiser guidance, objectives, phases, injects, scoring and optional live layers.</p></div>
<div className="content-card"><Icon name="map"/><h3>ATAC</h3><p>Event-scoped field awareness: callsigns, position freshness, ground marks, structured traffic and event brief.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Capability truth</Kicker><h2>Live. In development. Planned.</h2></div><p className="section-intro">Vanguard does not need fake completeness. Public capability should be labelled by what exists today, what is currently being integrated and what remains a future product direction.</p></div><div className="content-grid">
<div className="content-card"><Icon name="check"/><h3>Live</h3><p>Current working product and verified backend capability.</p></div>
<div className="content-card"><Icon name="bolt"/><h3>In development</h3><p>Functions that are actively being built or integrated but should not yet be represented as finished.</p></div>
<div className="content-card"><Icon name="eye"/><h3>Planned</h3><p>Commercial or product direction that remains deliberately labelled until it is built and tested.</p></div>
</div></div></section>
<section className="band"><div className="band-inner"><h2>One platform. Before, during and after.</h2><Btn href="/signup">Start free</Btn></div></section>
</Shell>}