import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const metadata={title:'Players',description:'Portable Vanguard player profiles, equipment, memberships and event readiness.'};

export default function Page(){return <Shell>
  <PageHero kicker="VANGUARD PLAYERS" title="ONE PROFILE. EVERY TEAM. EVERY EVENT." text="Create your Vanguard identity once, then carry your callsign, equipment, memberships, preferences and event history with you instead of rebuilding your profile for every team or organiser." image={IMG} chips={['PORTABLE IDENTITY','PERSONAL KIT','MEMBERSHIPS','EVENT HISTORY','PRIVACY']}/>

  <section className="section">
    <div className="section-head"><div><Kicker>PLAYER PASSPORT</Kicker><h2>YOUR PROFILE BELONGS TO YOU.</h2></div><p className="section-intro">A team should not own a player's permanent identity. Vanguard separates the player-owned profile from team and event relationships, so access can be granted for a purpose and removed when that relationship ends.</p></div>
    <div className="content-grid">
      <div className="content-card"><Icon name="users"/><h3>IDENTITY & CALLSIGN</h3><p>Name, callsign, image, home region and the information you choose to make available to teams or organisers.</p></div>
      <div className="content-card"><Icon name="box"/><h3>PERSONAL ARMOURY</h3><p>Record personal replicas, sidearms, optics, magazines, batteries, gas, slings and other equipment so event gaps can be seen before game day.</p></div>
      <div className="content-card"><Icon name="shield"/><h3>PERSONAL EQUIPMENT</h3><p>Clothing sizes, boots, helmet, carrier or chest rig, eye and face protection, hydration, comms, headset, NVG/NOD and thermal capability where relevant.</p></div>
      <div className="content-card"><Icon name="bolt"/><h3>CAPABILITY & EXPERIENCE</h3><p>Roles, leadership, navigation, communications, CQB, woodland, support-gunner, recce and other declared experience — descriptive, not a hidden score.</p></div>
      <div className="content-card"><Icon name="calendar"/><h3>EVENT READINESS</h3><p>Availability, bookings, waivers, event assignments, required equipment and personal gaps against the event brief.</p></div>
      <div className="content-card"><Icon name="lock"/><h3>PRIVACY BY PURPOSE</h3><p>Teams see what they need for the relationship. Unrelated memberships, private notes and sensitive information do not automatically travel with you.</p></div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-head"><div><Kicker>READY FOR ANY EVENT</Kicker><h2>THE EVENT TELLS YOU WHAT IS MISSING.</h2></div><p className="section-intro">Vanguard can compare the event requirement against player-owned and team-owned kit, then show the practical gap: reserve it, borrow it, hire it or source it before arrival.</p></div>
    <div className="steps">
      <div className="step"><b>01 / PROFILE</b><h3>WHAT YOU OWN</h3><p>Your equipment and declared capability.</p></div>
      <div className="step"><b>02 / EVENT</b><h3>WHAT IS REQUIRED</h3><p>The organiser or team sets the event requirement.</p></div>
      <div className="step"><b>03 / GAP</b><h3>WHAT IS MISSING</h3><p>Vanguard shows the difference before game day.</p></div>
      <div className="step"><b>04 / FILL</b><h3>RESERVE / HIRE / SOURCE</h3><p>Close the gap without rebuilding the whole loadout.</p></div>
    </div>
    <div className="actions"><Btn href="/signup">CREATE FREE PROFILE</Btn><Btn href="/pricing" secondary>SEE PLAYER PLANS</Btn></div>
  </section>

  <section className="band"><h2>YOUR CALLSIGN. YOUR KIT. YOUR HISTORY. YOUR PROFILE.</h2><Btn href="/signup">CREATE PROFILE</Btn></section>
</Shell>}
