import {Shell,Kicker,Btn,Icon} from '../components';

const TYPES=[
  ['decision','DECISION','Something the team agreed or committed to.'],
  ['action','ACTION','A task, owner or follow-up that needs doing.'],
  ['calendar','EVENT CHANGE','Date, timing, attendance or travel information that affects the team.'],
  ['box','KIT / READINESS','Missing kit, allocations, faults, replacements or preparation.'],
  ['shield','SAFETY / ADMIN','A genuine safety, welfare or team-admin point worth retaining.'],
  ['eye','AAR / IDEA','A useful observation or idea worth carrying into the next event.']
];

export const metadata={
  title:'Team Signal | Vanguard Tactical',
  description:'Meaningful team conversation capture without turning banter into a permanent record.'
};

export default function Page(){return <Shell>
  <section className="page-hero">
    <div className="page-hero-copy">
      <Kicker>TEAM SIGNAL</Kicker>
      <h1>KEEP THE USEFUL BIT.<br/>LEAVE THE BANTER BEHIND.</h1>
      <p>Team Signal is designed for deliberately recorded team conversations. Vanguard can transcribe the session, identify genuine team-relevant content and present only the useful points for human review.</p>
      <div className="chip-row"><span className="chip">VISIBLE RECORDING</span><span className="chip">HUMAN REVIEW</span><span className="chip">MINIMAL RETENTION</span><span className="chip">TEAM-SCOPED</span></div>
    </div>
    <div className="image-panel" style={{background:'linear-gradient(145deg,#0b2d5c,#177b84)'}}>
      <div className="image-caption"><span>TEAM SIGNAL</span><b>CONVERSATION → SIGNAL → ACTION</b></div>
    </div>
  </section>

  <section className="section"><div className="section-inner">
    <div className="section-head"><div><Kicker>How it works</Kicker><h2>Not a transcript archive.</h2></div><p className="section-intro">The default should be to process the conversation, extract genuine team value and discard the rest. Jokes, messing around, off-topic chat and ordinary social conversation do not need to become a permanent team record.</p></div>
    <div className="content-grid">
      <div className="content-card"><Icon name="radio"/><h3>1. Start deliberately</h3><p>A member starts Team Signal and everyone can see that recording/transcription is active.</p></div>
      <div className="content-card"><Icon name="bolt"/><h3>2. AI separates signal</h3><p>Speech is transcribed temporarily and classified for genuine team relevance rather than saving every sentence.</p></div>
      <div className="content-card"><Icon name="check"/><h3>3. Human confirms</h3><p>Useful items go into a short review queue before becoming part of the team, event or AAR record.</p></div>
    </div>
  </div></section>

  <section className="section section-dark"><div className="section-inner">
    <div className="section-head"><div><Kicker>What gets kept</Kicker><h2>Only things that mean something.</h2></div><p className="section-intro">The filter is intentionally narrow. A funny conversation can stay a funny conversation; Vanguard retains only the points that affect what the team needs to know or do.</p></div>
    <div className="content-grid">{TYPES.map(([icon,title,text])=><div className="content-card" key={title}><Icon name={icon}/><h3>{title}</h3><p>{text}</p></div>)}</div>
  </div></section>

  <section className="section"><div className="section-inner split">
    <div>
      <Kicker>Retention rule</Kicker>
      <h2>Raw audio should disappear by default.</h2>
      <p>Once processing is complete, the normal setting is <b>delete after processing</b>. A recording can only be retained deliberately for a genuine reason. Approved signal items remain attached to the relevant troop, event or AAR.</p>
      <div className="feature-list">
        <div className="feature-row"><span className="num">01</span><b>Recording is obvious to participants</b><span>NOTICE</span></div>
        <div className="feature-row"><span className="num">02</span><b>Off-topic / banter is discarded</b><span>DEFAULT</span></div>
        <div className="feature-row"><span className="num">03</span><b>Meaningful items wait for review</b><span>HUMAN</span></div>
        <div className="feature-row"><span className="num">04</span><b>Approved items can become actions or AAR points</b><span>RECORD</span></div>
      </div>
    </div>
    <div className="content-card">
      <span className="eyebrow">EXAMPLE OUTPUT</span>
      <h3>Saturday planning chat</h3>
      <div className="event-row"><b>ACTION</b><div>Confirm transport split by Thursday<small> / Owner to be confirmed</small></div><span>REVIEW</span></div>
      <div className="event-row"><b>KIT</b><div>Two spare radio batteries required<small> / Event readiness</small></div><span>REVIEW</span></div>
      <div className="event-row"><b>EVENT</b><div>Arrival moved to 07:15<small> / Update event record if confirmed</small></div><span>REVIEW</span></div>
      <p style={{marginTop:18}}>Everything else from the conversation — jokes, general chat and irrelevant remarks — is not retained as a team record.</p>
    </div>
  </div></section>

  <section className="band"><div className="band-inner"><h2>Conversation when you want it. Signal when it matters.</h2><Btn href="/workspace">Back to Team Area</Btn></div></section>
</Shell>}
