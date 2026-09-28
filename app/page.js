import {Shell,Kicker,Btn,Icon,Metric} from './components';

const AIRSOFT='https://images.pexels.com/photos/20335224/pexels-photo-20335224.jpeg?auto=compress&cs=tinysrgb&w=1600';
const PAINTBALL='https://images.pexels.com/photos/16436589/pexels-photo-16436589.jpeg?cs=srgb&dl=pexels-amar-16436589.jpg&fm=jpg';
const READINESS='https://images.pexels.com/photos/35355640/pexels-photo-35355640.jpeg?cs=srgb&dl=pexels-steve-besa-2158358525-35355640.jpg&fm=jpg';
const COORDINATION='https://images.pexels.com/photos/10349615/pexels-photo-10349615.jpeg?cs=srgb&dl=pexels-ron-lach-10349615.jpg&fm=jpg';
const FIELD='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1800';

export const metadata={
  title:'Field operations, events and readiness',
  description:'Vanguard Tactical connects participants, teams, events, equipment, scenarios and field awareness across airsoft, paintball, training exercises and readiness.'
};

const AudienceCard=({icon,title,text,href})=><a className="audience-card" href={href}>
  <div className="audience-icon"><Icon name={icon}/></div>
  <h3>{title}</h3><p>{text}</p>
  <span className="card-link">Explore <Icon name="arrow" size={16}/></span>
</a>;

const SectorCard=({image,kicker,title,text,href})=><a className="sector-card" href={href} style={{backgroundImage:`url('${image}')`}}>
  <span className="sector-shade"></span>
  <div className="sector-copy"><span>{kicker}</span><h3>{title}</h3><p>{text}</p></div>
</a>;

export default function Home(){return <Shell>
  <section className="alpha-banner">PRIVATE ALPHA / PRODUCT PROTOTYPE — SPORTS CAPABILITY IS CURRENT; BROADER READINESS USE CASES ARE BEING DEVELOPED AND VALIDATED</section>

  <section className="hero">
    <div className="hero-mosaic" aria-hidden="true">
      <div style={{backgroundImage:`url('${AIRSOFT}')`}}></div>
      <div style={{backgroundImage:`url('${PAINTBALL}')`}}></div>
      <div style={{backgroundImage:`url('${READINESS}')`}}></div>
      <div style={{backgroundImage:`url('${COORDINATION}')`}}></div>
    </div>
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="hero-logo-lockup" role="img" aria-label="Vanguard Tactical logo"></div>
        <Kicker>Field operations / events / readiness</Kicker>
        <h1>One platform for <em>people, teams, events and the field.</em></h1>
        <p>Vanguard brings identity, readiness, equipment, event control, scenarios and field awareness into one operating picture — starting with airsoft and paintball, and expanding into structured training and readiness exercises.</p>
        <div className="hero-actions">
          <Btn href="/signup">Start free</Btn>
          <Btn href="/sectors" secondary>Explore use cases</Btn>
        </div>
        <div className="trust-strip">
          <span>Airsoft</span><span>Paintball</span><span>Training exercises</span><span>Readiness & resilience</span><span>Event-scoped field awareness</span>
        </div>
      </div>
      <aside className="hero-panel">
        <p className="panel-kicker">ONE OPERATING RECORD</p>
        <div className="hero-inputs"><span>Participant</span><span>Team</span><span>Event</span><span>Equipment</span><span>Scenario</span><span>Field</span></div>
        <p className="panel-kicker second">THE OPERATING MODEL</p>
        <p><strong>Before:</strong> prepare. <strong>During:</strong> coordinate. <strong>After:</strong> retain the useful record.</p>
      </aside>
    </div>
  </section>

  <div className="metric-strip">
    <Metric value="01" label="Portable participant identity"/>
    <Metric value="02" label="Team & event operations"/>
    <Metric value="03" label="Field awareness"/>
    <Metric value="04" label="Scenario & readiness engine"/>
  </div>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Where Vanguard fits</Kicker><h2>More than airsoft. One core system, different operating environments.</h2></div>
        <p className="section-intro">The platform model is transferable: people, teams, events, kit, roles, briefings, actions, scenarios and field information. The language and controls can change by sector without rebuilding the operating core.</p>
      </div>
      <div className="sector-grid">
        <SectorCard image={AIRSOFT} kicker="SPORT / MILSIM" title="Airsoft" text="Players, teams, events, loadouts, scenarios and ATAC-enabled field awareness." href="/sectors#airsoft"/>
        <SectorCard image={PAINTBALL} kicker="SPORT / COMPETITION" title="Paintball" text="Teams, events, site operations, kit, competition readiness and organiser workflows." href="/sectors#paintball"/>
        <SectorCard image={COORDINATION} kicker="TRAINING / EXERCISES" title="Field training" text="Structured exercises, role allocation, equipment, communications and after-action learning." href="/sectors#training"/>
        <SectorCard image={READINESS} kicker="READINESS / RESILIENCE" title="Emergency readiness" text="Preparedness exercises, volunteer coordination and community resilience workflows — not emergency dispatch." href="/sectors#readiness"/>
      </div>
    </div>
  </section>

  <section className="section commercial-clarity">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>The problem</Kicker><h2>One field operation should not need six disconnected tools.</h2></div>
        <p className="section-intro">Messages, spreadsheets, PDFs, kit lists, event pages and ad-hoc updates create fragments. Vanguard is designed to connect the operational record instead of becoming another standalone app.</p>
      </div>
      <div className="pain-panel">
        <div className="pain-stack">
          {['Messages','Spreadsheet','Briefing','Equipment','Event page','Actions'].map((x,i)=><div className="pain-item" key={x}><Icon name={['radio','calendar','eye','box','map','check'][i]} size={19}/><b>{x}</b></div>)}
        </div>
        <div className="pain-arrow">→</div>
        <div className="unified-item"><div><strong>Vanguard</strong><p style={{color:'#dbe4e7',margin:'8px 0 0'}}>One person. One team picture. One event record.</p></div></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Built for the whole ecosystem</Kicker><h2>Participants, teams, organisers and sites.</h2></div>
        <p className="section-intro">Vanguard is commercial software for people who take part, coordinate teams, run events and operate venues. Sports are the first proving ground, not the limit of the platform.</p>
      </div>
      <div className="audience-grid">
        <AudienceCard icon="users" title="Participants" text="Own a portable profile for identity, equipment, memberships, readiness and event history." href="/players"/>
        <AudienceCard icon="shield" title="Teams" text="Run rosters, roles, availability, equipment, training, actions and events." href="/teams"/>
        <AudienceCard icon="calendar" title="Organisers" text="Build the event, control attendance, briefing, scenarios and event-scoped capability." href="/organisers"/>
        <AudienceCard icon="map" title="Sites & venues" text="Support recurring events, organiser workflows, venue readiness and field services." href="/sites"/>
      </div>
    </div>
  </section>

  <section className="platform-band">
    <div className="shell">
      <Kicker>Vanguard operating loop</Kicker>
      <div className="platform-loop">{['PARTICIPANT','TEAM','EVENT','FIELD','RECORD'].map(x=><span key={x} className="loop-node">{x}</span>)}</div>
      <div className="before-after"><span>BEFORE</span><span>DURING</span><span>AFTER</span></div>
    </div>
  </section>

  <section className="section product-showcase">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Real product</Kicker><h2>The software is the product.</h2></div>
        <p className="section-intro">The same operational core can serve a weekend game, tournament, field exercise or readiness event. Sector-specific language sits over one connected data model.</p>
      </div>
      <div className="product-window">
        <div className="product-window-nav">{['Home','Events','Team','Equipment','Training','Actions','ATAC','After action'].map(x=><div key={x}>{x}</div>)}</div>
        <div className="product-window-main">
          <div className="product-window-top"><div><span className="eyebrow">EVENT / FIELD EXERCISE</span><h3>Operational readiness</h3></div><span className="status-badge">LIVE RECORD</span></div>
          <div className="product-window-grid">
            <div className="product-window-card"><b>27/32</b><span>attendance confirmed</span></div>
            <div className="product-window-card"><b>88%</b><span>equipment readiness</span></div>
            <div className="product-window-card"><b>4</b><span>open actions</span></div>
          </div>
          <div className="product-ui-list">
            <div className="product-ui-row"><small>07:30</small><span>Arrival and check-in</span><span>CONFIRMED</span></div>
            <div className="product-ui-row"><small>08:10</small><span>Team brief and role allocation</span><span>READY</span></div>
            <div className="product-ui-row"><small>08:40</small><span>Comms and field-awareness activation</span><span>OPEN</span></div>
            <div className="product-ui-row"><small>09:00</small><span>Exercise / event start state</span><span>CONFIRMED</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Equipment readiness</Kicker><h2>Attend. Own. Need. Fill.</h2></div>
        <p className="section-intro">Compare what the event or exercise requires against available personal and team equipment, then surface the practical gap early enough to act.</p>
      </div>
      <div className="steps">
        <div className="step"><b>01 / ATTEND</b><h3>Confirm people</h3><p>Know who is actually taking part before planning around assumptions.</p></div>
        <div className="step"><b>02 / OWN</b><h3>See capability</h3><p>Bring participant-owned and team-owned equipment into the same readiness view.</p></div>
        <div className="step"><b>03 / NEED</b><h3>Identify the gap</h3><p>Compare event requirements against what is available.</p></div>
        <div className="step"><b>04 / FILL</b><h3>Resolve it</h3><p>Reserve, hire, borrow, issue or source the missing capability.</p></div>
      </div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner split">
      <div>
        <Kicker>ATAC / event-scoped field layer</Kicker>
        <h2>Plan before. See the field during. Learn after.</h2>
        <p>ATAC adds callsigns or role identifiers, position freshness, field marks, structured traffic and the event brief when a live operating picture adds value. It remains event-scoped and is not presented as emergency dispatch, guaranteed tracking or a safety-critical alarm.</p>
        <div className="actions"><Btn href="/atac">Explore ATAC</Btn></div>
      </div>
      <div className="image-panel" style={{backgroundImage:`url('${FIELD}')`}}>
        <div className="image-caption"><span>FIELD REALITY OUTSIDE</span><b>DIGITAL PRECISION INSIDE</b></div>
      </div>
    </div>
  </section>

  <section className="section readiness-section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Readiness & resilience</Kicker><h2>Use the same discipline for exercises that matter beyond sport.</h2></div>
        <p className="section-intro">The next product horizon is structured preparedness: training events, volunteer teams, community resilience exercises, communications checks, equipment readiness and after-action learning. These workflows are being developed and validated; Vanguard is not a replacement for emergency-service command-and-control systems.</p>
      </div>
      <div className="readiness-grid">
        <div><Icon name="users"/><h3>People & roles</h3><p>Know who is taking part, what role they hold and whether required information is complete.</p></div>
        <div><Icon name="box"/><h3>Equipment & capability</h3><p>Track what is available, issued, missing or needed for the exercise.</p></div>
        <div><Icon name="radio"/><h3>Comms checks</h3><p>Record communications readiness and event-specific information without claiming guaranteed emergency communications.</p></div>
        <div><Icon name="eye"/><h3>After action</h3><p>Keep observations, actions and lessons connected to the event for future preparedness.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Commercial users</Kicker><h2>Run more than a single team.</h2></div>
        <p className="section-intro">Organisers and venues need event records, operational visibility and repeatable workflows. Vanguard is being built to support multiple activity types from one controlled platform.</p>
      </div>
      <div className="content-grid">
        <div className="content-card"><Icon name="calendar"/><h3>Event control</h3><p>Attendance, briefings, assignments, scenario state, field-awareness activation and post-event record in one flow.</p><div className="actions"><Btn href="/organisers" secondary>For organisers</Btn></div></div>
        <div className="content-card"><Icon name="map"/><h3>Site operations</h3><p>Recurring event structures, organiser access and future venue-specific workflows without turning Vanguard into a one-site system.</p><div className="actions"><Btn href="/sites" secondary>For sites</Btn></div></div>
        <div className="content-card"><Icon name="play"/><h3>Scenarios & exercises</h3><p>Reusable packages combining guidance, roles, objectives, injects, scoring or exercise controls and optional field layers.</p><div className="actions"><Btn href="/scenarios" secondary>Explore scenarios</Btn></div></div>
      </div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Proven in the field</Kicker><h2>6 Troop remains a proving team — not the product.</h2></div>
        <div><p className="section-intro">The airsoft environment gives Vanguard a real place to test identity, team operations, equipment, events and field awareness. The same core can then be adapted for other structured field activities without pretending those sectors are already fully operational.</p><div className="actions"><Btn href="/6-troop">View case study</Btn></div></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head"><div><Kicker>FAQ / trust</Kicker><h2>Know what Vanguard is — and what it is not.</h2></div></div>
      <div className="faq">
        <details><summary>Is Vanguard only for airsoft?</summary><p>No. Airsoft is the current proving environment. The platform architecture is being broadened for paintball, structured training, event operations and readiness exercises.</p></details>
        <details><summary>Is it an emergency-service command system?</summary><p>No. Readiness use cases are for preparation, exercises, volunteer coordination and learning. Vanguard is not currently a safety-critical dispatch, CAD, man-down or guaranteed emergency communications platform.</p></details>
        <details><summary>What is live today?</summary><p>Current sports/team/event capability and the existing ATAC field layer are the strongest live elements. Broader sector workflows are being added and will remain labelled until verified.</p></details>
        <details><summary>Can sites and organisers use it?</summary><p>Yes. The commercial model includes organisers and sites as distinct operating roles rather than treating Vanguard as a single-team product.</p></details>
      </div>
    </div>
  </section>

  <section className="band"><div className="band-inner"><h2>One operating platform. Different fields. Same discipline.</h2><Btn href="/sectors">Explore use cases</Btn></div></section>
</Shell>}