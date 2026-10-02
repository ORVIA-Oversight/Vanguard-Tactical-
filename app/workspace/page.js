import Link from 'next/link';
import {Icon} from '../components';

const featureCards=[
  ['radio','PRIVATE COMMS','Vanguard HQ, 6 Troop and 7 Troop rooms backed by team-scoped access controls.'],
  ['calendar','EVENT RADAR','Team dates and verified external events with attendance intent in one place.'],
  ['box','KIT LOCKER','Personal kit, team equipment, allocations, gaps and readiness before event day.'],
  ['users','CALLSIGN IDENTITY','One member profile resolving callsign, troop, role, attendance and training.'],
  ['map','LIVE MAPS','Reusable mapping layer for approved event points, site information and future Overwatch views.'],
  ['eye','AAR','Capture lessons, decisions and follow-up so every event improves the next one.']
];

export default function Page(){return <div className="workspace">
  <div className="ws-top">
    <Link href="/" className="brand"><span className="brand-mark">VT</span><span><b>VANGUARD</b><small>TEAM EXPERIENCE / 6 TROOP + 7 TROOP</small></span></Link>
    <div className="status"><i/> REVIEW BUILD / PRIVATE TEAM OS</div>
  </div>

  <div className="ws-grid">
    <aside className="sidebar">
      <span className="eyebrow">MY VANGUARD</span>
      <h3>TEAM HOME</h3>
      {[
        ['target','Overview'],['radio','Comms'],['calendar','Events'],['users','Troops'],
        ['box','Kit locker'],['shield','Training'],['bolt','ATAC'],['eye','AAR']
      ].map(([i,t])=><a href={'#'+t.toLowerCase().replaceAll(' ','-')} key={t}><Icon name={i} size={17}/>{t}</a>)}
    </aside>

    <section className="dashboard">
      <div className="dash-card wide" id="overview">
        <span className="eyebrow">THE TEAM PULSE</span>
        <h3>OPEN THE APP. KNOW WHAT MATTERS.</h3>
        <p>Vanguard is becoming the place members actually want to use: people, conversations, dates, kit, readiness and lessons in one calm member experience.</p>
        <div className="event-row"><b>6T</b><div>6 Troop<small> / Primary active team</small></div><span>COMMS LIVE</span></div>
        <div className="event-row"><b>7T</b><div>7 Troop<small> / Reserve & augmentation</small></div><span>COMMS LIVE</span></div>
        <div className="event-row"><b>HQ</b><div>Vanguard HQ<small> / Whole-team room</small></div><span>COMMS LIVE</span></div>
      </div>

      <div className="dash-card">
        <span className="eyebrow">MY READINESS</span>
        <h3>KIT LOCKER</h3>
        <div className="dash-number">ONE</div>
        <span className="dash-label">PERSONAL READINESS VIEW</span>
        <div className="progress"><span style={{width:'82%'}}/></div>
        <Link href="/armoury">Open armoury →</Link>
      </div>

      <div className="dash-card">
        <span className="eyebrow">EVENT RADAR</span>
        <h3>ONE SOURCE OF TRUTH</h3>
        <div className="dash-number">UK+</div>
        <span className="dash-label">TEAM + EXTERNAL EVENTS</span>
        <div className="progress"><span style={{width:'74%'}}/></div>
        <Link href="/events">Open events →</Link>
      </div>

      <div className="dash-card full" id="comms">
        <span className="eyebrow">PRIVATE TEAM COMMS</span>
        <h3>VANGUARD HQ / 6 TROOP / 7 TROOP</h3>
        <p>The backend now has private rooms for the whole team and each troop, with Realtime enabled for messages and RLS controlling access. The UI will keep the familiar speed of group chat without pretending it is end-to-end encrypted.</p>
        <div className="event-row"><b>01</b><div>Fast room switching<small> / HQ, troop and later event rooms</small></div><span>READY</span></div>
        <div className="event-row"><b>02</b><div>Replies and event context<small> / Keep decisions next to the event record</small></div><span>NEXT</span></div>
        <div className="event-row"><b>03</b><div>Push notifications<small> / Controlled, member-friendly alerts</small></div><span>NEXT</span></div>
      </div>

      <div className="dash-card full">
        <span className="eyebrow">THE BEST IDEAS, ONE VANGUARD EXPERIENCE</span>
        <h3>NOT SEVEN APPS BOLTED TOGETHER.</h3>
        <div className="content-grid">{featureCards.map(([i,t,d])=><div className="content-card" key={t}><Icon name={i}/><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div>

      <div className="dash-card full">
        <span className="eyebrow">OVERWATCH PORT</span>
        <h3>SHARED CAPABILITIES, DIFFERENT EXPERIENCE.</h3>
        <div className="event-row"><b>PORT</b><div>Maps, event state, check-in, role views, controlled notifications and evidence-linked AAR<small> / Useful beyond airsoft</small></div><span>SHARED LAYER</span></div>
        <div className="event-row"><b>KEEP</b><div>Callsign culture, troop social identity, personal kit locker and member community<small> / Vanguard-specific</small></div><span>VANGUARD</span></div>
      </div>
    </section>
  </div>
</div>}
