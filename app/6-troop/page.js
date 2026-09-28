import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'6 Troop case study',description:'6 Troop is the sponsored proving team used to field-test Vanguard Tactical workflows.'};
export default function Page(){return <Shell>
<PageHero kicker="Proven in the field" title="6 Troop is Vanguard Tactical's primary sponsored airsoft team." text="6 Troop is the primary sponsored airsoft team within the Vanguard Tactical sport programme. 7 Troop is its reserve and augmentation element. Together they provide a real team environment for player development, kit readiness, command structure and field testing." image={IMG} chips={['SPONSORED TEAM','PILOT USER','FIELD VALIDATION','PRODUCT FEEDBACK']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Case study</Kicker><h2>A real team gives people somewhere to belong, develop and improve together.</h2></div><p className="section-intro">The programme combines a real sporting team with Vanguard's player workspace, command suite, event planning, equipment readiness and after-action learning. The team remains a secondary Vanguard sector rather than the identity of the wider operational platform.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>6 Troop</h3><p>Primary sponsored team and main active element.</p></div>
<div className="content-card"><Icon name="users"/><h3>7 Troop</h3><p>Reserve and augmentation element that strengthens the main team when required.</p></div>
<div className="content-card"><Icon name="calendar"/><h3>Event preparation</h3><p>Availability, attendance, assignments and practical readiness in one operating record.</p></div>
<div className="content-card"><Icon name="box"/><h3>Equipment</h3><p>Test the player/team equipment model against real event needs.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Training</h3><p>Shared team development and resources without claiming military affiliation or qualification.</p></div>
<div className="content-card"><Icon name="eye"/><h3>After action</h3><p>Feed real use, friction and lessons back into product development.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Commercial separation</Kicker><h2>The team programme supports Vanguard without defining the business.</h2></div><p className="section-intro">Vanguard's wider operational platform serves many sectors. The airsoft programme is one application of the model, with 6 Troop and 7 Troop acting as dedicated sponsored teams.</p></div></div></section>
<section className="band"><div className="band-inner"><h2>One team. Clear roles. Shared growth.</h2><Btn href="/airsoft">Explore the airsoft programme</Btn></div></section>
</Shell>}