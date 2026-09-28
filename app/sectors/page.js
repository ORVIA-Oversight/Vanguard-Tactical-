import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/10349615/pexels-photo-10349615.jpeg?cs=srgb&dl=pexels-ron-lach-10349615.jpg&fm=jpg';
export const metadata={title:'Use cases',description:'Vanguard Tactical use cases across airsoft, paintball, field training and readiness exercises.'};
export default function Page(){return <Shell>
<PageHero kicker="Use cases" title="Different fields. Same operating discipline." text="Vanguard is built around a transferable core: people, teams, events, equipment, roles, briefings, actions, scenarios and field information. Sector-specific language and controls sit over that shared operating model." image={IMG} chips={['AIRSOFT','PAINTBALL','TRAINING','READINESS']}/>
<section id="airsoft" className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Airsoft</Kicker><h2>The proving ground.</h2></div><p className="section-intro">Player identity, teams, attendance, loadouts, equipment readiness, scenarios and ATAC-enabled field awareness are the strongest current Vanguard use case.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Players & teams</h3><p>Portable profiles, memberships, roles and event participation.</p></div>
<div className="content-card"><Icon name="box"/><h3>Loadout readiness</h3><p>Compare event requirements against player and team equipment before game day.</p></div>
<div className="content-card"><Icon name="map"/><h3>Field awareness</h3><p>Use ATAC when callsigns, field marks and event-scoped map awareness add value.</p></div>
</div></div></section>
<section id="paintball" className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Paintball</Kicker><h2>Same team and event mechanics. Different sport.</h2></div><p className="section-intro">The platform can support player registration, teams, equipment, event scheduling, competition workflows and venue operations without requiring an airsoft-specific product fork.</p></div><div className="content-grid">
<div className="content-card"><Icon name="calendar"/><h3>Tournaments & events</h3><p>Registration, attendance, scheduling and controlled event records.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Team operations</h3><p>Rosters, availability, roles and preparation.</p></div>
<div className="content-card"><Icon name="box"/><h3>Kit & venue readiness</h3><p>Track what is needed for participants, teams and the site.</p></div>
</div></div></section>
<section id="training" className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Field training</Kicker><h2>Structure the exercise, not just the attendance list.</h2></div><p className="section-intro">Vanguard can support structured non-emergency training exercises with role allocation, equipment readiness, communications checks, scenario injects and after-action learning.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Roles & teams</h3><p>Define participants, functions and exercise relationships.</p></div>
<div className="content-card"><Icon name="radio"/><h3>Comms readiness</h3><p>Record event-specific communications checks and issues.</p></div>
<div className="content-card"><Icon name="eye"/><h3>After action</h3><p>Capture lessons, open actions and readiness gaps after the exercise.</p></div>
</div></div></section>
<section id="readiness" className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Emergency readiness</Kicker><h2>Preparedness and resilience — with clear boundaries.</h2></div><p className="section-intro">Vanguard can support preparedness exercises, volunteer coordination, capability checks and community resilience workflows. It is not currently a safety-critical CAD, emergency dispatch, man-down, or guaranteed communications system.</p></div><div className="content-grid">
<div className="content-card"><Icon name="shield"/><h3>Preparedness exercises</h3><p>Plan and record structured readiness activities with roles, equipment and actions.</p></div>
<div className="content-card"><Icon name="users"/><h3>Volunteer coordination</h3><p>Keep participation, roles and event-specific information in one controlled record.</p></div>
<div className="content-card"><Icon name="check"/><h3>Readiness evidence</h3><p>Show what was tested, what failed, what remains open and what needs repeating.</p></div>
</div><div className="actions"><Btn href="/platform">See the platform</Btn></div></div></section>
<section className="band"><div className="band-inner"><h2>Start with sport. Build toward broader readiness.</h2><Btn href="/signup">Start free</Btn></div></section>
</Shell>}