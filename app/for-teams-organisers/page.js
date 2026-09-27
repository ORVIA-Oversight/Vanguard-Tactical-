import {Shell,PageHero,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const metadata={title:'Teams & Organisers',description:'Vanguard Tactical tools for teams, event organisers and sites.'};
export default function Page(){return <Shell>
  <PageHero kicker="TEAMS / ORGANISERS / SITES" title="RUN THE WHOLE WEEKEND FROM ONE OPERATING RECORD." text="Roster, availability, equipment, event setup, scenarios and optional ATAC field awareness — without forcing everyone into a dozen disconnected tools." image={IMG} chips={['TEAMS','SITES','ORGANISERS','EVENTS']}/>
  <section className="section"><div className="content-grid">
    <div className="content-card"><Icon name="users"/><h3>TEAM LEADERS</h3><p>Manage people, reserve elements, attendance, actions and team-owned equipment with scoped permissions.</p></div>
    <div className="content-card"><Icon name="calendar"/><h3>EVENT ORGANISERS</h3><p>Build event records, attach teams, briefings and scenarios, then add ATAC only when the event needs a live field layer.</p></div>
    <div className="content-card"><Icon name="map"/><h3>SITES</h3><p>Future venue workflows support recurring events, organiser access, capability partners and field-system packages.</p></div>
  </div><div className="actions"><Btn href="/signup">CREATE ALPHA ACCESS</Btn><Btn href="/pricing" secondary>SEE PROPOSED PLANS</Btn></div></section>
</Shell>}
