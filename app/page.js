import {Shell,Kicker,Btn,Icon} from './components';

const HERO='https://orvia.org.uk/track-field-coordination.jpg';
const TEAM='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1800';
const EVENT='https://orvia.org.uk/multi-agency-planning.jpg';
const CONTROL='https://orvia.org.uk/incident-room-planning.jpg';

export const metadata={
  title:'Vanguard Tactical | Team. Train. Deploy. Together.',
  description:'Teams, events, kit, training, ATAC, organisers and field experiences in one Vanguard Tactical platform.'
};

const Route=({n,title,text,tone,href})=><a href={href} className={'vf-route '+tone}><span>{n}</span><b>{title}</b><p>{text}</p></a>;

export default function Home(){return <Shell>
  <section className="vf-hero">
    <div className="vf-copy">
      <Kicker>Teams · Events · Kit · Field Ops · Community</Kicker>
      <h1>TEAM UP.<br/><em>GET OUT THERE.</em></h1>
      <p>Vanguard Tactical brings the whole team experience into one place — people, private comms, events, kit, training, ATAC and after-action learning.</p>
      <div className="vf-actions"><Btn href="/signup">Join Vanguard</Btn><Btn href="/workspace" secondary>Open Team Area</Btn></div>
      <div className="vf-chips"><span>6 TROOP</span><span>7 TROOP</span><span>TEAM OS</span><span>ATAC</span><span>EVENTS</span><span>ARMOURY</span></div>
    </div>
    <div className="vf-visual" style={{backgroundImage:`url('${HERO}')`}}>
      <video className="vf-hero-video" autoPlay muted loop playsInline preload="metadata" poster={HERO} aria-label="Vanguard Tactical team video">
        <source src="/team-video.mp4" type="video/mp4"/>
      </video>
      <div className="vf-glass top"><small>ONE ACCOUNT</small><b>Your team. Your kit. Your events.</b><span>Everything follows your member profile.</span></div>
      <div className="vf-glass bottom"><small>TEAM EXPERIENCE</small><b>6 Troop + 7 Troop</b><span>Private comms · attendance · readiness · AAR</span></div>
    </div>
  </section>

  <section className="vf-routes">
    <Route n="01" title="TEAM" text="Roster, callsigns, roles and private team space." tone="blue" href="/workspace"/>
    <Route n="02" title="EVENTS" text="Find it, plan it, attend it, review it." tone="teal" href="/events"/>
    <Route n="03" title="KIT" text="Personal locker, team assets and readiness." tone="orange" href="/armoury"/>
    <Route n="04" title="ATAC" text="Live field awareness for controlled events." tone="purple" href="/atac"/>
    <Route n="05" title="ORGANISERS" text="Run better experiences with one operating picture." tone="coral" href="/organisers"/>
  </section>

  <section className="vf-story">
    <div className="vf-section-head"><span>THE WHOLE JOURNEY</span><h2>Join it. Build it. Play it.</h2><p>Vanguard should feel like the home of the team, not a piece of admin software. The member journey starts with identity and belonging, then carries through kit, events, field activity and the stories that come afterwards.</p></div>
    <div className="vf-story-grid">
      <div className="vf-photo" style={{backgroundImage:`url('${TEAM}')`}}><div><small>TEAM FIRST</small><h3>Belong before you deploy.</h3></div></div>
      <div className="vf-panel">
        <span>MY VANGUARD</span>
        <h3>One identity across the whole experience.</h3>
        <div className="vf-flow"><b>CALLSIGN</b><i>→</i><b>TROOP</b><i>→</i><b>EVENT</b><i>→</i><b>KIT</b><i>→</i><b>AAR</b></div>
        <p>Your account should know who you are, which troop you belong to, what you are attending, what you need and what still needs action.</p>
        <Btn href="/workspace">Enter Team Area</Btn>
      </div>
    </div>
  </section>

  <section className="vf-band">
    <div><small>PRIVATE COMMS</small><h3>Talk as a team.</h3><p>Vanguard HQ, 6 Troop, 7 Troop and event rooms with access controlled by membership.</p></div>
    <div><small>EVENT RADAR</small><h3>Know what is next.</h3><p>Team dates and selected UK and international milsim events in one place.</p></div>
    <div><small>READINESS</small><h3>Turn up prepared.</h3><p>Kit, attendance, actions, training and gaps surfaced before event day.</p></div>
  </section>

  <section className="vf-section">
    <div className="vf-section-head"><span>THE VANGUARD ECOSYSTEM</span><h2>One account. More ways to use it.</h2><p>The team area is the front door, but Vanguard can grow with players, teams, organisers and sites without making people learn a different product every time.</p></div>
    <div className="vf-eco-grid">
      <a href="/workspace"><Icon name="users"/><small>TEAM OS</small><h3>Your private team home.</h3><p>Roster, callsigns, comms, events, actions and AAR.</p><b>OPEN TEAM OS →</b></a>
      <a href="/events"><Icon name="calendar"/><small>EVENTS</small><h3>Everything for the next weekend.</h3><p>Dates, attendance, locations, kit, travel and event records.</p><b>EXPLORE EVENTS →</b></a>
      <a href="/armoury"><Icon name="box"/><small>ARMOURY</small><h3>Your kit. Team kit. One view.</h3><p>Own it, issue it, reserve it and find the gaps.</p><b>OPEN ARMOURY →</b></a>
      <a href="/atac"><Icon name="map"/><small>ATAC</small><h3>The live field layer.</h3><p>Approved locations, field state and participant awareness.</p><b>EXPLORE ATAC →</b></a>
      <a href="/scenarios"><Icon name="target"/><small>SCENARIOS</small><h3>Build better game experiences.</h3><p>Scenario packs, event structure and reusable mission content.</p><b>VIEW SCENARIOS →</b></a>
      <a href="/organisers"><Icon name="bolt"/><small>ORGANISERS</small><h3>Run the event from one picture.</h3><p>People, actions, field state, kit and post-event learning.</p><b>FOR ORGANISERS →</b></a>
    </div>
  </section>

  <section className="vf-feature">
    <div className="vf-feature-image" style={{backgroundImage:`url('${EVENT}')`}}></div>
    <div className="vf-feature-copy">
      <Kicker>Events that feel connected</Kicker>
      <h2>THE WEEKEND STARTS BEFORE THE GATE OPENS.</h2>
      <p>Availability, team chat, kit checks, transport, event information and attendance should all be visible before anyone leaves home.</p>
      <div className="vf-list"><span>◉ One-tap attendance</span><span>◉ Event-specific comms</span><span>◉ Kit requirements</span><span>◉ Approved locations</span><span>◉ Team actions</span><span>◉ After-action review</span></div>
      <Btn href="/events">See Events</Btn>
    </div>
  </section>

  <section className="vf-section vf-team">
    <div className="vf-section-head"><span>6 TROOP + 7 TROOP</span><h2>Built with a real team, not imagined in a boardroom.</h2><p>6 Troop is Vanguard's primary sponsored airsoft team, with 7 Troop as its reserve and augmentation element. The team programme is the proving ground for the member experience.</p></div>
    <div className="vf-team-grid">
      <div><b>6T</b><h3>6 Troop</h3><p>Primary active team and proving environment.</p></div>
      <div><b>7T</b><h3>7 Troop</h3><p>Reserve, augmentation and progression route.</p></div>
      <div><b>HQ</b><h3>Vanguard HQ</h3><p>Shared community, admin and whole-team communications.</p></div>
    </div>
  </section>

  <section className="vf-operating">
    <div className="vf-operating-copy"><span>VANGUARD FOR ORGANISERS</span><h2>FROM BOOKINGS TO FIELD STATE TO AAR.</h2><p>Vanguard can support the people running the experience as well as the people playing it — keeping team, event and operational information connected without turning the hobby into corporate software.</p><div className="vf-actions"><Btn href="/organisers">For Organisers</Btn><Btn href="/platform" secondary>Explore Platform</Btn></div></div>
    <div className="vf-operating-panel" style={{backgroundImage:`url('${CONTROL}')`}}><div><small>OPERATING PICTURE</small><b>PEOPLE · EVENTS · LOCATIONS · ACTIONS</b><span>Human-led. Event-scoped. Clear status.</span></div></div>
  </section>

  <section className="vf-relationship">
    <div><span>AIRSOFT FOUND + VANGUARD TACTICAL</span><h2>Two names. One connected airsoft ecosystem.</h2><p><strong>Airsoft Found</strong> is the friendly consumer front door for discovery, kit, builds, specialists, ranges and community. <strong>Vanguard Tactical</strong> is the specialist team, event and field-operations brand.</p></div>
    <a href="https://airsoft-found.vercel.app/">EXPLORE AIRSOFT FOUND →</a>
  </section>

  <section className="band"><div className="band-inner"><h2>Team. Train. Deploy. Together.</h2><Btn href="/signup">Join Vanguard</Btn></div></section>
</Shell>}
