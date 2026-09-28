import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'6 Troop case study',description:'6 Troop is the sponsored proving team used to field-test Vanguard Tactical workflows.'};
export default function Page(){return <Shell>
<PageHero kicker="Proven in the field" title="6 Troop tests Vanguard. It is not Vanguard." text="6 Troop is an independent sporting airsoft / milsim team sponsored by Vanguard Tactical and used as an early proving environment. 7 Troop is its reserve and augmentation element." image={IMG} chips={['SPONSORED TEAM','PILOT USER','FIELD VALIDATION','PRODUCT FEEDBACK']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Case study</Kicker><h2>A real team gives the product somewhere real to fail, improve and prove itself.</h2></div><p className="section-intro">The purpose of the relationship is product evidence. 6 Troop uses the same underlying workflows Vanguard intends to sell to other teams rather than becoming the platform's identity.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>6 Troop</h3><p>Primary active team and first proving users.</p></div>
<div className="content-card"><Icon name="users"/><h3>7 Troop</h3><p>Reserve and augmentation element associated with the team structure.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Event preparation</h3><p>Availability, attendance, assignments and practical readiness in one operating record.</p></div>
<div className="content-card"><Icon name="box"/><h3>Equipment</h3><p>Test the player/team equipment model against real event needs.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Training</h3><p>Shared team development and resources without claiming military affiliation or qualification.</p></div>
<div className="content-card"><Icon name="eye"/><h3>After action</h3><p>Feed real use, friction and lessons back into product development.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Commercial separation</Kicker><h2>The platform must work when 6 Troop is nowhere near it.</h2></div><p className="section-intro">Vanguard is designed to serve unrelated players, teams, organisers and sites. 6 Troop provides proof of use, not parent-brand authority.</p></div></div></section>
<section className="band"><div className="band-inner"><h2>Field proof, not brand confusion.</h2><Btn href="/workspace">View workspace demo</Btn></div></section>
</Shell>}