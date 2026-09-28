import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/10349615/pexels-photo-10349615.jpeg?cs=srgb&dl=pexels-ron-lach-10349615.jpg&fm=jpg';
export const metadata={title:'Teams',description:'Roster, availability, events, equipment, training and actions for organised field teams.'};
export default function Page(){return <Shell>
<PageHero kicker="For teams" title="Run the team without owning the person." text="Vanguard gives organised teams a working operational layer for roster, roles, availability, events, team equipment, training, actions and sub-groups — while the participant keeps their portable identity." image={IMG} chips={['ROSTER','AVAILABILITY','EVENTS','EQUIPMENT','TRAINING','ACTIONS']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Team operations</Kicker><h2>One team picture before the event starts.</h2></div><p className="section-intro">Team leaders need to know who is available, what is missing, what has changed and what still needs action. Vanguard is designed to make that visible without turning the team into an admin project.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Roster & roles</h3><p>Build the active team, sub-groups and reserve/augmentation structures with controlled roles.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Availability & events</h3><p>See attendance against a specific event rather than reconstructing it from messages.</p></div>
<div className="content-card"><Icon name="box"/><h3>Team equipment</h3><p>Keep team-owned assets separate from participant-owned equipment while using both to assess readiness.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Training & standards</h3><p>Record team development, shared resources and event preparation appropriate to the activity.</p></div>
<div className="content-card"><Icon name="check"/><h3>Actions</h3><p>Assign practical pre-event and post-event actions with owners and visible status.</p></div>
<div className="content-card"><Icon name="eye"/><h3>After action</h3><p>Keep useful learning connected to the event and team record instead of losing it in chat.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Portable participant model</Kicker><h2>The team relationship can end. The participant profile remains.</h2></div><p className="section-intro">A person may belong to more than one team or attend independent events. Vanguard separates permanent identity from the team relationship and the information that team is permitted to use.</p></div></div></section>
<section className="band"><div className="band-inner"><h2>Know the team. Know the gaps. Arrive prepared.</h2><Btn href="/signup">Start free</Btn></div></section>
</Shell>}