import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/35355640/pexels-photo-35355640.jpeg?cs=srgb&dl=pexels-steve-besa-2158358525-35355640.jpg&fm=jpg';
export const metadata={title:'Participants',description:'Portable Vanguard identity, equipment, memberships, readiness and event history.'};
export default function Page(){return <Shell>
<PageHero kicker="For participants" title="Your profile should travel with you." text="Create your Vanguard identity once, then carry your equipment, memberships, readiness and event history across teams, sites and events instead of rebuilding yourself every time." image={IMG} chips={['PORTABLE IDENTITY','PERSONAL EQUIPMENT','MEMBERSHIPS','READINESS','EVENT HISTORY']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Participant profile</Kicker><h2>Your profile belongs to you.</h2></div><p className="section-intro">Teams and organisers need an operational view of the participant. They do not need to own the person's permanent identity. Vanguard separates the participant-owned profile from memberships and event relationships.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>Identity & event role</h3><p>Name, callsign or role identifier, image, region and the information you choose to make available for the relationship.</p></div>
<div className="content-card"><Icon name="box"/><h3>Personal equipment</h3><p>Record relevant activity equipment, clothing, protection, hydration, communications and other declared kit.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Capability profile</h3><p>Record relevant equipment, qualifications or declared capability only where the activity or organiser needs it.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Memberships & events</h3><p>Carry one identity across multiple team relationships, sites and independent events.</p></div>
<div className="content-card"><Icon name="eye"/><h3>Privacy by purpose</h3><p>Information is shared for the relevant team or event relationship rather than automatically exposed everywhere.</p></div>
<div className="content-card"><Icon name="check"/><h3>Readiness</h3><p>See what the next event or exercise requires and what still needs to be resolved.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Event readiness</Kicker><h2>The event tells you what is missing.</h2></div><p className="section-intro">The practical workflow stays the same across sectors: confirm attendance, compare requirements against available equipment or capability, identify the gap and resolve it before the event.</p></div><div className="steps">
<div className="step"><b>01 / ATTEND</b><h3>Confirm</h3><p>Make participation visible.</p></div>
<div className="step"><b>02 / OWN</b><h3>Compare</h3><p>Use personal and team capability where appropriate.</p></div>
<div className="step"><b>03 / NEED</b><h3>Find the gap</h3><p>See what the event requires that is not yet covered.</p></div>
<div className="step"><b>04 / FILL</b><h3>Resolve</h3><p>Reserve, hire, borrow, issue or source what is missing.</p></div>
</div><div className="actions"><Btn href="/signup">Create free profile</Btn><Btn href="/sectors" secondary>Explore use cases</Btn></div></div></section>
<section className="band"><div className="band-inner"><h2>Your identity. Your equipment. Your history. Your profile.</h2><Btn href="/signup">Create profile</Btn></div></section>
</Shell>}