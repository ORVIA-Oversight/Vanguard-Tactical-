import {Shell,PageHero,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const metadata={title:'Platform',description:'Portable player identity, teams, events and equipment in Vanguard Tactical.'};
export default function Page(){return <Shell>
  <PageHero kicker="VANGUARD PLATFORM" title="ONE IDENTITY. MANY TEAMS. BETTER EVENTS." text="Vanguard keeps the player portable while giving teams and organisers the operational tools they actually need." image={IMG} chips={['PLAYER PASSPORT','TEAMS','EVENTS','EQUIPMENT','AAR']}/>
  <section className="section"><div className="content-grid">
    <div className="content-card"><Icon name="users"/><h3>PLAYER PASSPORT</h3><p>One profile owned by the player, with callsign, memberships, personal equipment, preferences and event history.</p></div>
    <div className="content-card"><Icon name="shield"/><h3>TEAM RELATIONSHIPS</h3><p>Teams manage roles, attendance, actions and team assets without owning the person's permanent identity.</p></div>
    <div className="content-card"><Icon name="calendar"/><h3>EVENT RECORD</h3><p>Briefing, assignment, attendance, scenario, ATAC activation and after-action information connect around one event.</p></div>
  </div><div className="actions"><Btn href="/signup">CREATE PROFILE</Btn><Btn href="/for-teams-organisers" secondary>FOR TEAMS & ORGANISERS</Btn></div></section>
</Shell>}
