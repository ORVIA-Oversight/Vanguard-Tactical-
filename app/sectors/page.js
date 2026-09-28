import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://orvia.org.uk/multi-agency-planning.jpg';
export const metadata={title:'Sectors',description:'Vanguard operational command, tracking and field coordination across resilience, security, utilities, care, training and sport.'};
export default function Page(){return <Shell>
<PageHero kicker="Sectors" title="Same operating logic. Different mission." text="Terminology, roles, resources and workflows can change without rebuilding the core platform. Vanguard is designed around operational coordination rather than one hobby or industry." image={IMG} chips={['EMERGENCY & RESILIENCE','SECURITY & EVENTS','UTILITIES & FIELD OPS','CARE & COMMUNITY','TRAINING','SPORT']}/>

<section id="resilience" className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Emergency & resilience</Kicker><h2>Shared awareness for fast-moving incidents.</h2></div><p className="section-intro">Bring incidents, teams, resources, sectors, hazards, actions and decisions into one operational picture for exercises, preparedness and controlled field coordination.</p></div><div className="content-grid">
<div className="content-card"><Icon name="map"/><h3>Situation picture</h3><p>See teams, assets, areas, hazards and field information together.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Command structure</h3><p>Set objectives, roles, sectors and actions while keeping authority explicit.</p></div>
<div className="content-card"><Icon name="eye"/><h3>Decision record</h3><p>Retain key decisions, changes, information gaps and after-action learning.</p></div>
</div></div></section>

<section id="security" className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Security & events</Kicker><h2>Control without fragmentation.</h2></div><p className="section-intro">Coordinate security, stewards, medical, logistics, control and field teams without relying on disconnected radio traffic, chat threads and spreadsheets.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Teams & zones</h3><p>Structure people by team, role, area and task.</p></div>
<div className="content-card"><Icon name="radio"/><h3>Communications</h3><p>Keep operational communications attached to the event context where possible.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Event control</h3><p>Connect briefing, attendance, tasking, field status and post-event review.</p></div>
</div></div></section>

<section id="field-ops" className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Utilities · care · field operations</Kicker><h2>Operational coordination beyond blue light.</h2></div><p className="section-intro">The same core can support dispersed teams, service continuity, welfare activity, inspections, field tasks and site-based operations where location, status and accountability matter.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>People & welfare</h3><p>Maintain role, availability, welfare and operational status where appropriate.</p></div>
<div className="content-card"><Icon name="map"/><h3>Field tasks</h3><p>Connect jobs, locations, teams, assets and progress.</p></div>
<div className="content-card"><Icon name="check"/><h3>Actions & escalation</h3><p>Keep outstanding actions and escalation routes visible to the responsible lead.</p></div>
</div></div></section>

<section id="training" className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Training & exercises</Kicker><h2>Exercise the plan before it matters.</h2></div><p className="section-intro">Use controlled scenarios to test teams, roles, assets, communications, field coordination and decision-making, then retain the gaps and actions for the next exercise.</p></div><div className="content-grid">
<div className="content-card"><Icon name="play"/><h3>Scenario control</h3><p>Define phases, injects, objectives and expected actions.</p></div>
<div className="content-card"><Icon name="radio"/><h3>Comms & coordination</h3><p>Test information flow and field response without claiming guaranteed emergency communications.</p></div>
<div className="content-card"><Icon name="eye"/><h3>After-action review</h3><p>Retain what worked, what failed, what remains open and what should be retested.</p></div>
</div></div></section>

<section id="sport" className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Sport & recreation</Kicker><h2>Airsoft and paintball sit here — as sector use cases.</h2></div><p className="section-intro">Organised airsoft and paintball remain useful proving environments for participant identity, team operations, equipment, scenarios, event control and ATAC. They no longer define the Vanguard brand.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Airsoft</h3><p>Players, teams, kit, events, scenarios and field awareness.</p></div>
<div className="content-card"><Icon name="target"/><h3>Paintball</h3><p>Teams, tournaments, equipment, site operations and organiser workflows.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Organised field sport</h3><p>Use the same event, readiness and after-action model for other structured activities.</p></div>
</div></div></section>

<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Boundaries</Kicker><h2>Operational support without pretending to be a certified emergency system.</h2></div><p className="section-intro">Vanguard can support operational awareness, exercises, tasking and field coordination. It is not currently a certified CAD, guaranteed dispatch, man-down alarm or guaranteed emergency communications service.</p></div><div className="actions"><Btn href="/platform">Explore the platform</Btn></div></div></section>
<section className="band"><div className="band-inner"><h2>Same operating logic. Different mission.</h2><Btn href="/atac">See field operations</Btn></div></section>
</Shell>}