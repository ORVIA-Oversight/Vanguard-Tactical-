import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'Organisers',description:'Event operations, attendance, briefings, scenarios and ATAC-ready event records for airsoft organisers.'};
export default function Page(){return <Shell>
<PageHero kicker="For organisers" title="Turn attendance into an organised event." text="Build the event record, connect players and teams, control briefing and preparation, attach scenarios and activate ATAC only when the live field picture adds value." image={IMG} chips={['EVENT BUILDER','CHECK-IN','BRIEFING','SCENARIOS','ATAC','AAR']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Event control</Kicker><h2>Before, during and after in one flow.</h2></div><p className="section-intro">Vanguard is intended to reduce duplicate event administration while preserving a useful record of what was planned, who attended, what capability was activated and what happened afterwards.</p></div><div className="content-grid">
<div className="content-card"><Icon name="calendar"/><h3>Event builder</h3><p>Create the event object, timings, attendance, teams, roles and controlled documents.</p></div>
<div className="content-card"><Icon name="users"/><h3>Registration & check-in</h3><p>Move from declared attendance to the actual people who arrive and participate.</p></div>
<div className="content-card"><Icon name="eye"/><h3>Briefing record</h3><p>Keep arrival instructions, organiser information and the event brief attached to the event.</p></div>
<div className="content-card"><Icon name="play"/><h3>Scenario control</h3><p>Attach reusable scenario packs, objectives, phases and event-specific control information.</p></div>
<div className="content-card"><Icon name="map"/><h3>ATAC activation</h3><p>Add the event-scoped field-awareness layer where callsigns, map status, field marks and structured traffic are useful.</p></div>
<div className="content-card"><Icon name="check"/><h3>Post-event record</h3><p>Retain attendance, actions and learning in the event record rather than losing it after the weekend.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Product truth</Kicker><h2>Live capability and future integration stay separate.</h2></div><p className="section-intro">ATAC already has a live event-based field layer. Full Vanguard-to-ATAC identity and event synchronisation remains an integration task and is labelled accordingly.</p></div><div className="actions"><Btn href="/atac">Explore ATAC</Btn></div></div></section>
<section className="band"><div className="band-inner"><h2>Run the event. Keep the useful record.</h2><Btn href="/pricing">See organiser pricing</Btn></div></section>
</Shell>}