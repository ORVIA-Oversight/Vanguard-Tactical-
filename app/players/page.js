import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'Players',description:'Portable Vanguard player identity, kit, memberships, readiness and event history.'};
export default function Page(){return <Shell>
<PageHero kicker="For players" title="Your profile should travel with you." text="Create your Vanguard identity once, then carry your callsign, equipment, memberships, preferences and event history across teams and events instead of rebuilding yourself every time." image={IMG} chips={['PORTABLE IDENTITY','PERSONAL KIT','MEMBERSHIPS','READINESS','EVENT HISTORY']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Player Passport</Kicker><h2>Your profile belongs to you.</h2></div><p className="section-intro">Teams need an operational view of the player. They do not need to own the person's permanent identity. Vanguard separates the player-owned profile from memberships and event relationships.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Identity & callsign</h3><p>Name, callsign, image, region and the information you choose to make available for the relationship.</p></div>
<div className="content-card"><Icon name="box"/><h3>Personal equipment</h3><p>Replicas, sidearms, optics, magazines, batteries, gas, slings, clothing, protection, hydration, comms and other declared kit.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Capability profile</h3><p>Record relevant equipment and capability such as comms, headsets, NVG/NOD or thermal where appropriate.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Memberships & events</h3><p>Carry one identity across multiple team relationships and independent events.</p></div>
<div className="content-card"><Icon name="eye"/><h3>Privacy by purpose</h3><p>Information is shared for the relevant team or event relationship rather than automatically exposed everywhere.</p></div>
<div className="content-card"><Icon name="check"/><h3>Readiness</h3><p>See what the next event requires and what you still need to reserve, hire, borrow or source.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Event readiness</Kicker><h2>The event tells you what is missing.</h2></div><p className="section-intro">The practical workflow is simple: confirm attendance, compare requirements against available kit, identify the gap and close it before game day.</p></div><div className="steps">
<div className="step"><b>01 / ATTEND</b><h3>Confirm</h3><p>Make the attendance decision visible.</p></div>
<div className="step"><b>02 / OWN</b><h3>Compare</h3><p>Use your own kit and available team kit.</p></div>
<div className="step"><b>03 / NEED</b><h3>Find the gap</h3><p>See what the event requires that is not yet covered.</p></div>
<div className="step"><b>04 / FILL</b><h3>Resolve</h3><p>Reserve, hire, borrow or source the missing item.</p></div>
</div><div className="actions"><Btn href="/signup">Create free profile</Btn><Btn href="/pricing" secondary>See player plans</Btn></div></div></section>
<section className="band"><div className="band-inner"><h2>Your callsign. Your kit. Your history. Your profile.</h2><Btn href="/signup">Create profile</Btn></div></section>
</Shell>}