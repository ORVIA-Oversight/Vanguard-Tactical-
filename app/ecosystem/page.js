import {Shell,PageHero,Btn,Icon} from '../components';
const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const metadata={title:'Ecosystem',description:'Sponsored teams and capability partners in the Vanguard Tactical ecosystem.'};
export default function Page(){return <Shell>
  <PageHero kicker="VANGUARD ECOSYSTEM" title="THE PLATFORM IS INDEPENDENT. THE FIELD PARTNERS PROVE IT." text="Vanguard can connect players, teams, organisers, sites and specialist suppliers without becoming a warehouse or a single-team brand." image={IMG} chips={['SPONSORED TEAMS','PARTNERS','CAPABILITY SUPPLIERS']}/>
  <section className="section"><div className="content-grid">
    <div className="content-card"><Icon name="users"/><h3>6 TROOP</h3><p>An independent sporting airsoft/milsim team sponsored by Vanguard Tactical and used as an early proving environment.</p><Btn href="/6-troop" secondary>6 TROOP</Btn></div>
    <div className="content-card"><Icon name="users"/><h3>7 TROOP</h3><p>The reserve and augmentation element associated with 6 Troop — part of the team structure, not a Vanguard product.</p></div>
    <div className="content-card"><Icon name="box"/><h3>CAPABILITY PARTNERS</h3><p>Future partner-supplied NVGs, vehicles, comms, equipment, connectivity and specialist services can be packaged through Vanguard without unnecessary stock ownership.</p></div>
  </div></section>
</Shell>}
