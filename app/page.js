import {Shell,Kicker,Btn,Icon,Metric} from './components';

const CONTROL='https://orvia.org.uk/vehicle-tailgate-control.jpg';
const FLOOD='https://orvia.org.uk/flood-street-response.jpg';
const COMMUNITY='https://orvia.org.uk/community-street-coordination.jpg';
const MULTI='https://orvia.org.uk/multi-agency-planning.jpg';
const TRACK='https://orvia.org.uk/track-field-coordination.jpg';
const INCIDENT='https://orvia.org.uk/incident-room-planning.jpg';

export const metadata={
  title:'Operational command, tracking and field coordination',
  description:'Vanguard Tactical brings command, tracking, communications, readiness and field coordination into one human-led operational picture.'
};

const Module=({num,title,text,href,icon})=><a className="content-card operational-card" href={href}>
  <div className="module-number">{num}</div><Icon name={icon}/><h3>{title}</h3><p>{text}</p>
  <span className="card-link">Explore <Icon name="arrow" size={16}/></span>
</a>;

const SectorCard=({image,kicker,title,text,href})=><a className="sector-card" href={href} style={{backgroundImage:`url('${image}')`}}>
  <span className="sector-shade"></span>
  <div className="sector-copy"><span>{kicker}</span><h3>{title}</h3><p>{text}</p></div>
</a>;

export default function Home(){return <Shell>
  <section className="alpha-banner">PRIVATE ALPHA — CAPABILITIES ARE LABELLED LIVE, IN DEVELOPMENT OR PLANNED</section>

  <section className="hero operational-hero">
    <div className="hero-visual" style={{backgroundImage:`url('${CONTROL}')`}}></div>
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="hero-logo-lockup" role="img" aria-label="Vanguard Tactical logo"></div>
        <Kicker>Human-led operational command</Kicker>
        <h1>See the operation.<br/><em>Command the response.</em></h1>
        <p>Bring incidents, teams, locations, communications, actions and decisions into one operational picture. Vanguard supports the person in command — it does not replace them.</p>
        <div className="hero-actions">
          <Btn href="/platform">Explore the platform</Btn>
          <Btn href="/atac" secondary>See field operations</Btn>
        </div>
        <div className="trust-strip">
          <span>Human first</span><span>Sector-neutral</span><span>Modular</span><span>Evidence-led</span><span>Event-scoped field awareness</span>
        </div>
      </div>
      <aside className="hero-panel">
        <p className="panel-kicker">LIVE OPERATING PICTURE</p>
        <div className="hero-inputs"><span>Incidents</span><span>Teams</span><span>Assets</span><span>Locations</span><span>Actions</span><span>Decisions</span></div>
        <p className="panel-kicker second">HUMAN AUTHORITY CHAIN</p>
        <p>AI can assist with missing information, context and recommendations. People authorise tasking, escalation and closure.</p>
      </aside>
    </div>
  </section>

  <div className="metric-strip">
    <Metric value="01" label="One operational picture"/>
    <Metric value="02" label="One human authority chain"/>
    <Metric value="03" label="One modular platform"/>
    <Metric value="04" label="One accountable record"/>
  </div>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>The platform</Kicker><h2>Not another isolated command-room screen.</h2></div>
        <p className="section-intro">Vanguard joins the essential operating layers while keeping each module independently useful. Start with the field picture or build toward a fuller command, communications and assurance environment.</p>
      </div>
      <div className="clarity-grid">
        <Module num="01" icon="shield" title="Command" text="Incidents, objectives, roles, sectors, actions, resource allocation, decisions, recovery and review." href="/platform#command"/>
        <Module num="02" icon="map" title="Track / ATAC" text="Shared geospatial awareness for teams, assets, zones, hazards, tasking and field status." href="/atac"/>
        <Module num="03" icon="radio" title="PTT & communications" text="Field and control-room communications designed to sit alongside operational workflows." href="/platform#comms"/>
        <Module num="AI" icon="bolt" title="Intelligence support" text="Missing-information prompts, context and communications assistance behind explicit human authority gates." href="/platform#intelligence"/>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Vanguard visual language</Kicker><h2>One mark. Distinct operating symbols.</h2></div>
        <p className="section-intro">The full Vanguard mark remains the parent identity. Its individual elements can then signpost the part of the system the user is entering without creating separate brands.</p>
      </div>
      <div className="clarity-grid">
        <div className="content-card"><Icon name="sword"/><h3>Excalibur / overview</h3><p>Used for Command, ATAC, operational overview and decisive action — the part of Vanguard that sees the whole picture and turns information into controlled action.</p></div>
        <div className="content-card"><Icon name="helmet"/><h3>Gladiator / teams</h3><p>Used for teams, leadership, training, resilience and the sponsored 6 Troop / 7 Troop programme — controlled strength built through discipline and shared responsibility.</p></div>
        <div className="content-card"><Icon name="journey"/><h3>The road / people</h3><p>Used for personal workspaces, welfare, progression, community and development — the route from where someone starts to where they want to be.</p></div>
        <div className="content-card"><Icon name="target"/><h3>Full mark / Vanguard</h3><p>The complete symbol stays with the parent brand, bringing command, people, teams, readiness and field operations together under one identity.</p></div>
      </div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner split">
      <div>
        <Kicker>One operating loop</Kicker>
        <h2>From first report to accountable close-out.</h2>
        <p>Capture the issue, establish the current situation, set objectives, see suitable resources, coordinate the field picture and retain the decision record through recovery and review.</p>
        <div className="feature-list">
          <div className="feature-row"><span className="num">01</span><b>Capture the issue and establish the situation</b><span>COMMAND</span></div>
          <div className="feature-row"><span className="num">02</span><b>Set objectives, roles, sectors and actions</b><span>CONTROL</span></div>
          <div className="feature-row"><span className="num">03</span><b>See resources, locations and operational status</b><span>TRACK</span></div>
          <div className="feature-row"><span className="num">04</span><b>Coordinate communications and tasking</b><span>PTT</span></div>
          <div className="feature-row"><span className="num">05</span><b>Retain decisions, events and learning</b><span>REVIEW</span></div>
        </div>
      </div>
      <div className="image-panel" style={{backgroundImage:`url('${INCIDENT}')`}}>
        <div className="image-caption"><span>CONTROL ROOM</span><b>HUMAN DECISION · DIGITAL PICTURE</b></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Sector-neutral by design</Kicker><h2>Same operating logic. Different mission.</h2></div>
        <p className="section-intro">Terminology, roles, resources and workflows can change without rebuilding the core platform. Vanguard is designed around operational coordination rather than one hobby or industry.</p>
      </div>
      <div className="sector-grid">
        <SectorCard image={FLOOD} kicker="EMERGENCY & RESILIENCE" title="Fast-moving incidents" text="Shared situational awareness, resources, sectors, actions and decisions." href="/sectors#resilience"/>
        <SectorCard image={COMMUNITY} kicker="SECURITY & EVENTS" title="Control without fragmentation" text="Bring security, stewards, medical, logistics and control into one operational picture." href="/sectors#security"/>
        <SectorCard image={MULTI} kicker="UTILITIES · CARE · FIELD OPS" title="Operational coordination beyond blue light" text="Configure teams, locations, escalation, welfare, service continuity and field work." href="/sectors#field-ops"/>
        <SectorCard image={TRACK} kicker="TRAINING & EXERCISES" title="Exercise the plan before it matters" text="Teams, roles, assets, comms, tasking and after-action learning in one record." href="/sectors#training"/>
      </div>
    </div>
  </section>

  <section className="section brand-story">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>The Vanguard mark</Kicker><h2>Strength with a destination.</h2></div>
        <p className="section-intro">The Vanguard identity is built around disciplined strength, earned responsibility and the reason capability matters in the first place: helping people move through challenge toward confidence, community and the freedom to enjoy what comes next.</p>
      </div>
      <div className="brand-meaning-grid">
        <div className="brand-meaning-card"><b>01 / EXCALIBUR</b><h3>Responsibility must be earned.</h3><p>The Excalibur reference represents purpose, judgement and the responsibility that comes with being trusted to lead.</p></div>
        <div className="brand-meaning-card"><b>02 / GLADIATOR</b><h3>Controlled strength.</h3><p>The helmet represents resilience, preparation and the discipline to remain composed when the environment becomes demanding.</p></div>
        <div className="brand-meaning-card"><b>03 / THE ROAD</b><h3>Progress is deliberate.</h3><p>The road is the journey from inexperience to capability: training, repetition, teamwork, responsibility and continuous improvement.</p></div>
        <div className="brand-meaning-card"><b>04 / THE LONE FIGURE</b><h3>The destination is peace.</h3><p>The figure moving toward the light represents the human purpose behind the system: prepare well, do the difficult work, then have the space to live and enjoy the experience.</p></div>
      </div>
      <div className="brand-quote"><p>Vanguard is not about aggression. It is about being prepared enough, disciplined enough and connected enough to handle complexity — then move beyond it.</p></div>
      <div className="brand-principles"><span>PEOPLE</span><span>TRAINING</span><span>COMMUNITY</span><span>REAL-WORLD SKILLS</span></div>
      <div className="actions"><Btn href="/brand">Read the brand story</Btn></div>
    </div>
  </section>

  <section className="section product-showcase">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Operational picture</Kicker><h2>Command, track and communications in one view.</h2></div>
        <p className="section-intro">The field picture should make uncertainty visible, not hide it. Position age, accuracy, role, tasking and incident context matter as much as a dot on a map.</p>
      </div>
      <div className="product-window">
        <div className="product-window-nav">{['Command','Incidents','Teams','Assets','Track','Comms','Actions','Review'].map(x=><div key={x}>{x}</div>)}</div>
        <div className="product-window-main">
          <div className="product-window-top"><div><span className="eyebrow">LIVE OPERATING PICTURE</span><h3>Active response</h3></div><span className="status-badge">HUMAN CONTROL</span></div>
          <div className="product-window-grid">
            <div className="product-window-card"><b>6</b><span>resources available</span></div>
            <div className="product-window-card"><b>4</b><span>currently tasked</span></div>
            <div className="product-window-card"><b>3</b><span>open actions</span></div>
          </div>
          <div className="product-ui-list">
            <div className="product-ui-row"><small>14:08</small><span>Situation update received</span><span>VERIFIED</span></div>
            <div className="product-ui-row"><small>14:11</small><span>Sector Bravo resource request</span><span>REVIEW</span></div>
            <div className="product-ui-row"><small>14:13</small><span>Field position status updated</span><span>LIVE</span></div>
            <div className="product-ui-row"><small>14:15</small><span>Controller allocation decision</span><span>AUTHORISED</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner split">
      <div className="image-panel" style={{backgroundImage:`url('${TRACK}')`}}>
        <div className="image-caption"><span>FIELD COORDINATION</span><b>TRACK · TASK · COMMUNICATE</b></div>
      </div>
      <div>
        <Kicker>Field operations</Kicker>
        <h2>ATAC becomes the field layer, not the hobby layer.</h2>
        <p>Authorised participants deliberately join an operation, share field position while active, report ground information and give Control one common operational picture. The same field engine can support exercises, events, security activity, resilience operations and other controlled deployments.</p>
        <div className="actions"><Btn href="/atac">Explore field operations</Btn></div>
      </div>
    </div>
  </section>

  <section className="section readiness-section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Operational readiness</Kicker><h2>Prepare the people, equipment and communications before deployment.</h2></div>
        <p className="section-intro">Readiness is not a separate product. It is the state of the operation before tasking begins: who is available, what is ready, what is missing and what still needs approval.</p>
      </div>
      <div className="readiness-grid">
        <div><Icon name="users"/><h3>People & roles</h3><p>Know who is available, assigned, qualified or awaiting confirmation.</p></div>
        <div><Icon name="box"/><h3>Assets & equipment</h3><p>Track what is available, issued, missing or unavailable for the operation.</p></div>
        <div><Icon name="radio"/><h3>Comms readiness</h3><p>Record operational communications status and known limitations.</p></div>
        <div><Icon name="eye"/><h3>After action</h3><p>Keep observations, decisions, actions and lessons connected to the operation.</p></div>
      </div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Recreation & sport</Kicker><h2>Airsoft and paintball are use cases — not the Vanguard identity.</h2></div>
        <div><p className="section-intro">The same participant, team, event, equipment, scenario and field-awareness model can support organised airsoft and paintball. They remain useful proving environments, but they now sit beneath the wider operational platform.</p><div className="actions"><Btn href="/sectors#sport">View sport use cases</Btn></div></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-heading"><Kicker>Capability truth</Kicker><h2>Useful operational support. Clear boundaries.</h2></div>
      <div className="faq">
        <details><summary>Is Vanguard an emergency-service dispatch platform?</summary><p>No. Vanguard can support operational awareness, exercises, field coordination and controlled tasking workflows, but it is not currently a certified CAD or guaranteed emergency-dispatch system.</p></details>
        <details><summary>Does ATAC provide guaranteed tracking?</summary><p>No. Position quality depends on the device, browser state and connectivity. The product shows freshness and accuracy so operators can judge the information appropriately.</p></details>
        <details><summary>Where do airsoft and paintball fit now?</summary><p>They sit within the Sport & Recreation sector as controlled field-operation use cases rather than the main Vanguard proposition.</p></details>
        <details><summary>What is the core proposition?</summary><p>One human-led operational picture connecting incidents, people, assets, locations, communications, actions and decisions.</p></details>
      </div>
    </div>
  </section>

  <section className="band"><div className="band-inner"><h2>See the operation. Command the response.</h2><Btn href="/platform">Explore Vanguard</Btn></div></section>
</Shell>}