import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'Teams',description:'Roster, availability, events, equipment, training and actions for organised airsoft teams.'};
export default function Page(){return <Shell>
<PageHero kicker="For teams" title="Run the team without owning the player." text="Vanguard gives organised teams a working operational layer for roster, roles, availability, events, team equipment, training, actions and reserve structures — while the player keeps their portable identity." image={IMG} chips={['ROSTER','AVAILABILITY','EVENTS','EQUIPMENT','TRAINING','ACTIONS']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Team operations</Kicker><h2>One team picture before game day.</h2></div><p className="section-intro">Team leaders need to know who is available, what is missing, what has changed and what still needs action. Vanguard is designed to make that visible without turning the team into an admin project.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Roster & roles</h3><p>Build the active team, sub-units and reserve/augmentation structures with controlled team roles.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Availability & events</h3><p>See attendance against a specific event rather than reconstructing it from messages.</p></div>
<div className="content-card"><Icon name="box"/><h3>Team equipment</h3><p>Keep team-owned assets separate from player-owned kit while using both to assess readiness.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Training</h3><p>Record team development, shared resources and event preparation without presenting hobby activity as military qualification.</p></div>
<div className="content-card"><Icon name="check"/><h3>Actions</h3><p>Assign practical pre-event and post-event actions with owners and visible status.</p></div>
<div className="content-card"><Icon name="eye"/><h3>After action</h3><p>Keep useful learning connected to the event and team record instead of losing it in chat.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Portable player model</Kicker><h2>The team relationship can end. The player profile remains.</h2></div><p className="section-intro">A player may belong to more than one team or attend independent events. Vanguard separates permanent player identity from the team relationship and the information that team is permitted to use.</p></div></div></section>
<section className="band"><div className="band-inner"><h2>Know the team. Know the gaps. Arrive prepared.</h2><Btn href="/signup">Start free</Btn></div></section>
</Shell>}