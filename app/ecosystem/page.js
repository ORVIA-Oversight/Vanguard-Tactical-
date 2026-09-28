import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'Ecosystem',description:'Sponsored teams and capability partners around the independent Vanguard Tactical platform.'};
export default function Page(){return <Shell>
<PageHero kicker="Vanguard ecosystem" title="Independent platform. Field proof. Specialist partners." text="Vanguard can connect players, teams, organisers, sites and specialist suppliers without becoming a warehouse or a single-team brand." image={IMG} chips={['6 TROOP','7 TROOP','CAPABILITY PARTNERS']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Commercial separation</Kicker><h2>The platform remains the parent product.</h2></div><p className="section-intro">Proof teams and capability partners can strengthen Vanguard without becoming the identity of the software business.</p></div><div className="content-grid">
<div className="content-card"><Icon name="users"/><h3>6 Troop</h3><p>Independent sporting airsoft/milsim team sponsored by Vanguard Tactical and used as an early proving environment.</p><div className="actions"><Btn href="/6-troop" secondary>View case study</Btn></div></div>
<div className="content-card"><Icon name="users"/><h3>7 Troop</h3><p>Reserve and augmentation element associated with 6 Troop — part of the team structure, not a Vanguard product.</p></div>
<div className="content-card"><Icon name="box"/><h3>Capability partners</h3><p>Future partner-supplied NVGs, vehicles, comms, equipment, connectivity and specialist services can sit around the platform without unnecessary stock ownership.</p></div>
</div></div></section>
</Shell>}