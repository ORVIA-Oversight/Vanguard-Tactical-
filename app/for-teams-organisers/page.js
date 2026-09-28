import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
export const metadata={title:'Teams, organisers & sites',description:'Choose the Vanguard route that matches how you operate.'};
export default function Page(){return <Shell>
<PageHero kicker="Commercial users" title="Choose the operating view that fits your role." text="Vanguard now separates the team, organiser and site pathways so each audience can see the product through the work they actually need to do." image={IMG} chips={['TEAMS','ORGANISERS','SITES']}/>
<section className="section"><div className="section-inner"><div className="audience-grid">
<a className="audience-card" href="/teams"><div className="audience-icon"><Icon name="shield"/></div><h3>Teams</h3><p>Roster, roles, attendance, equipment, training, actions and events.</p><span className="card-link">Explore teams <Icon name="arrow" size={16}/></span></a>
<a className="audience-card" href="/organisers"><div className="audience-icon"><Icon name="calendar"/></div><h3>Organisers</h3><p>Event builder, check-in, briefing, scenarios, ATAC and post-event record.</p><span className="card-link">Explore organisers <Icon name="arrow" size={16}/></span></a>
<a className="audience-card" href="/sites"><div className="audience-icon"><Icon name="map"/></div><h3>Sites</h3><p>Recurring events, organiser access, venue workflows and field capability.</p><span className="card-link">Explore sites <Icon name="arrow" size={16}/></span></a>
<a className="audience-card" href="/pricing"><div className="audience-icon"><Icon name="check"/></div><h3>Pricing</h3><p>Private-alpha validation pricing and capability bands.</p><span className="card-link">View pricing <Icon name="arrow" size={16}/></span></a>
</div></div></section>
</Shell>}