import {Shell,Kicker,Btn,Icon,Metric} from './components';

const HERO='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=2200';
const FIELD='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1800';

export const metadata={
  title:'The digital operating system for organised airsoft',
  description:'Vanguard Tactical connects player identity, teams, events, equipment, scenarios and event-scoped ATAC field awareness.'
};

const AudienceCard=({icon,title,text,href})=><a className="audience-card" href={href}>
  <div className="audience-icon"><Icon name={icon}/></div>
  <h3>{title}</h3><p>{text}</p>
  <span className="card-link">Explore <Icon name="arrow" size={16}/></span>
</a>;

export default function Home(){return <Shell>
  <section className="alpha-banner">PRIVATE ALPHA / PRODUCT PROTOTYPE — CAPABILITIES ARE LABELLED LIVE, IN DEVELOPMENT OR PLANNED</section>

  <section className="hero">
    <div className="hero-visual" style={{backgroundImage:`url('${HERO}')`}}></div>
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="hero-logo-lockup" role="img" aria-label="Vanguard Tactical logo"></div>
        <Kicker>Vanguard Tactical / organised airsoft platform</Kicker>
        <h1>The digital operating system for <em>organised airsoft.</em></h1>
        <p>One connected platform for player identity, team operations, events, equipment, scenarios and live field awareness — built around how serious airsoft actually works.</p>
        <div className="hero-actions">
          <Btn href="/signup">Start free</Btn>
          <Btn href="/platform" secondary>See how it works</Btn>
        </div>
        <div className="trust-strip">
          <span>Player-owned identity</span><span>Team & event operations</span><span>Event-scoped ATAC</span><span>Real product, clearly labelled</span>
        </div>
      </div>
      <aside className="hero-panel">
        <p className="panel-kicker">ONE OPERATING RECORD</p>
        <div className="hero-inputs"><span>Player</span><span>Team</span><span>Event</span><span>Equipment</span><span>Scenario</span><span>Field</span></div>
        <p className="panel-kicker second">THE OPERATING MODEL</p>
        <p><strong>Before:</strong> prepare. <strong>During:</strong> coordinate. <strong>After:</strong> retain the useful record.</p>
      </aside>
    </div>
  </section>

  <div className="metric-strip">
    <Metric value="01" label="Portable player identity"/>
    <Metric value="02" label="Team & event operations"/>
    <Metric value="03" label="ATAC field awareness"/>
    <Metric value="04" label="Scenario engine"/>
  </div>

  <section className="section commercial-clarity">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>The problem</Kicker><h2>Your team should not need six apps to run one weekend.</h2></div>
        <p className="section-intro">Messages, spreadsheets, PDFs, kit lists, event pages and payment notes create fragments. Vanguard is designed to connect the operational record instead of adding another disconnected tool.</p>
      </div>
      <div className="pain-panel">
        <div className="pain-stack">
          {['Messages','Spreadsheet','PDF brief','Kit list','Event page','Actions'].map((x,i)=><div className="pain-item" key={x}><Icon name={['radio','calendar','eye','box','map','check'][i]} size={19}/><b>{x}</b></div>)}
        </div>
        <div className="pain-arrow">→</div>
        <div className="unified-item"><div><strong>Vanguard</strong><p style={{color:'#dbe4e7',margin:'8px 0 0'}}>One player. One team picture. One event record.</p></div></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Built for the whole ecosystem</Kicker><h2>Four audiences. One connected platform.</h2></div>
        <p className="section-intro">Vanguard is not a team website. It is commercial software designed for the people who participate in, organise and operate airsoft.</p>
      </div>
      <div className="audience-grid">
        <AudienceCard icon="users" title="Players" text="Own one portable profile for callsign, kit, memberships, readiness and event history." href="/players"/>
        <AudienceCard icon="shield" title="Teams" text="Run rosters, roles, availability, team equipment, training, actions and events." href="/teams"/>
        <AudienceCard icon="calendar" title="Organisers" text="Build the event, control attendance, briefing, scenarios and event-scoped capability." href="/organisers"/>
        <AudienceCard icon="map" title="Sites" text="Support recurring events, organisers, venue workflows and future field services." href="/sites"/>
      </div>
    </div>
  </section>

  <section className="platform-band">
    <div className="shell">
      <Kicker>Vanguard operating loop</Kicker>
      <div className="platform-loop">
        {['PLAYER','TEAM','EVENT','FIELD','RECORD'].map((x,i)=><span key={x} className="loop-node">{x}</span>)}
      </div>
      <div className="before-after"><span>BEFORE</span><span>DURING</span><span>AFTER</span></div>
    </div>
  </section>

  <section className="section product-showcase">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Real product</Kicker><h2>The software is the product.</h2></div>
        <p className="section-intro">The public site should show the actual operating model, not hide it behind tactical photography. This controlled UI demonstration mirrors the live Vanguard structure.</p>
      </div>
      <div className="product-window" aria-label="Vanguard product demonstration">
        <div className="product-window-nav">
          {['Home','Events','Team','Equipment','Training','Actions','ATAC','After action'].map(x=><div key={x}>{x}</div>)}
        </div>
        <div className="product-window-main">
          <div className="product-window-top"><div><span className="eyebrow">EVENT / OPERATION NORTHLINE</span><h3>Weekend readiness</h3></div><span className="status-badge">LIVE RECORD</span></div>
          <div className="product-window-grid">
            <div className="product-window-card"><b>9/12</b><span>attendance confirmed</span></div>
            <div className="product-window-card"><b>82%</b><span>kit readiness</span></div>
            <div className="product-window-card"><b>2</b><span>equipment gaps</span></div>
          </div>
          <div className="product-ui-list">
            <div className="product-ui-row"><small>07:30</small><span>Arrival and safe-zone check-in</span><span>CONFIRMED</span></div>
            <div className="product-ui-row"><small>08:20</small><span>Team briefing and role allocation</span><span>READY</span></div>
            <div className="product-ui-row"><small>08:45</small><span>Comms and ATAC activation</span><span>OPEN</span></div>
            <div className="product-ui-row"><small>09:00</small><span>Site brief and start state</span><span>CONFIRMED</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Equipment readiness</Kicker><h2>Attend. Own. Need. Fill.</h2></div>
        <p className="section-intro">Vanguard compares what the event requires against what the player and team already have, then surfaces the practical gap before game day.</p>
      </div>
      <div className="steps">
        <div className="step"><b>01 / ATTEND</b><h3>Confirm attendance</h3><p>Know who is actually going before planning around assumptions.</p></div>
        <div className="step"><b>02 / OWN</b><h3>See available kit</h3><p>Player-owned and team-owned equipment remain distinct but usable together.</p></div>
        <div className="step"><b>03 / NEED</b><h3>Identify the gap</h3><p>Compare event requirements against declared equipment and capability.</p></div>
        <div className="step"><b>04 / FILL</b><h3>Reserve, hire or source</h3><p>Close the gap without rebuilding the whole loadout or chasing messages.</p></div>
      </div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner split">
      <div>
        <Kicker>ATAC / event-scoped field layer</Kicker>
        <h2>Vanguard before. ATAC during. Vanguard after.</h2>
        <p>ATAC adds callsigns, position freshness, field marks, structured traffic and the event brief when the event needs a live operating picture. It is deliberately event-scoped rather than permanent tracking.</p>
        <div className="actions"><Btn href="/atac">Explore ATAC</Btn></div>
      </div>
      <div className="image-panel" style={{backgroundImage:`url('${FIELD}')`}}>
        <div className="image-caption"><span>FIELD REALITY OUTSIDE</span><b>DIGITAL PRECISION INSIDE</b></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Commercial users</Kicker><h2>Run more than a single team.</h2></div>
        <p className="section-intro">Organisers and sites need event records, operational visibility and repeatable workflows. Vanguard is being built to serve that commercial layer as seriously as the player experience.</p>
      </div>
      <div className="content-grid">
        <div className="content-card"><Icon name="calendar"/><h3>Event control</h3><p>Attendance, briefings, assignments, scenario state, ATAC activation and post-event record in one flow.</p><div className="actions"><Btn href="/organisers" secondary>For organisers</Btn></div></div>
        <div className="content-card"><Icon name="map"/><h3>Site operations</h3><p>Recurring event structures, organiser access and future venue-specific workflows without turning Vanguard into one site's software.</p><div className="actions"><Btn href="/sites" secondary>For sites</Btn></div></div>
        <div className="content-card"><Icon name="play"/><h3>Scenario IP</h3><p>Reusable event packs combining organiser guidance, factions, objectives, injects, scoring and optional ATAC layers.</p><div className="actions"><Btn href="/scenarios" secondary>Scenarios</Btn></div></div>
      </div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Proven in the field</Kicker><h2>6 Troop tests Vanguard. It is not Vanguard.</h2></div>
        <div><p className="section-intro">6 Troop is an independent sporting airsoft/milsim team sponsored by Vanguard Tactical. 7 Troop is its reserve and augmentation element. Their use provides product proof and field feedback without defining the commercial platform.</p><div className="actions"><Btn href="/6-troop">View case study</Btn></div></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Launch pricing</Kicker><h2>Start free. Pay for specialist capability.</h2></div>
        <p className="section-intro">The player network remains easy to join. Revenue comes from enhanced player tools, team operations, organiser workflows, scenarios and event-scoped capability.</p>
      </div>
      <div className="price-grid">
        <div className="price-card"><span className="eyebrow">PLAYER</span><h3>Player</h3><div className="price">Free</div><p>Portable identity and core participation.</p><ul><li><Icon name="check" size={15}/>Player Passport</li><li><Icon name="check" size={15}/>Team memberships</li><li><Icon name="check" size={15}/>Basic event attendance</li></ul><Btn href="/signup">Create profile</Btn></div>
        <div className="price-card featured"><span className="eyebrow">TEAM</span><h3>Team</h3><div className="price">£19<small>/month</small></div><p>Core team operations and event preparation.</p><ul><li><Icon name="check" size={15}/>Roster & attendance</li><li><Icon name="check" size={15}/>Events & equipment</li><li><Icon name="check" size={15}/>Actions & documents</li></ul><Btn href="/pricing">See team plans</Btn></div>
        <div className="price-card"><span className="eyebrow">ORGANISER</span><h3>Organiser</h3><div className="price">£39<small>/month</small></div><p>Event-focused operational tools.</p><ul><li><Icon name="check" size={15}/>Event builder</li><li><Icon name="check" size={15}/>Briefing & check-in</li><li><Icon name="check" size={15}/>ATAC-ready records</li></ul><Btn href="/pricing">View pricing</Btn></div>
      </div>
      <div className="pricing-note">Private alpha pricing is for validation. Checkout remains disabled until the legal, banking, terms and payment estate is ready.</div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-heading"><Kicker>FAQ / trust</Kicker><h2>Know what Vanguard is — and what it is not.</h2></div>
      <div className="faq">
        <details><summary>What is Vanguard Tactical?</summary><p>A commercial software platform for organised airsoft, connecting player identity, team operations, events, equipment, scenarios and field-awareness capability.</p></details>
        <details><summary>Is it only for teams?</summary><p>No. The product is designed around four audiences: players, teams, organisers and sites.</p></details>
        <details><summary>Can individual players join?</summary><p>Yes. The player-owned profile is intended to travel across memberships and events rather than being owned by one team.</p></details>
        <details><summary>Does it replace WhatsApp or Discord?</summary><p>Not automatically. Vanguard is designed to hold the operational record and reduce fragmented administration; general social chat can remain elsewhere.</p></details>
        <details><summary>What works today?</summary><p>The website labels live, in-development and future capability explicitly. ATAC has a live event-based field layer; deeper Vanguard integration remains in build.</p></details>
        <details><summary>Does it work on mobile?</summary><p>Yes. The product is being structured as a responsive PWA, with the phone experience prioritising the next action, changes, event/team access, kit, communication and map access.</p></details>
        <details><summary>What happens to my data?</summary><p>The player model is based on scoped relationships and permissions rather than teams owning a permanent copy of the person. Detailed production privacy terms will accompany public launch.</p></details>
      </div>
    </div>
  </section>

  <section className="band"><div className="band-inner"><h2>Run the whole weekend from one place.</h2><Btn href="/signup">Start free</Btn></div></section>
</Shell>}
