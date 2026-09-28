import {Shell,PageHero,Kicker,Icon,Btn} from '../components';

const IMG='https://orvia.org.uk/incident-room-planning.jpg';

export const metadata={
  title:'White Label',
  description:'Deploy Vanguard as a branded operational platform for your organisation, with your identity, terminology, modules, roles and domain.'
};

export default function Page(){return <Shell>
<PageHero
  kicker="Vanguard White Label"
  title="Your brand. Your operating model. Vanguard underneath."
  text="Deploy a dedicated operational platform for your organisation without starting from a blank sheet. Vanguard can provide the operating architecture, field layer, roles, workflows and evidence discipline behind your own identity."
  image={IMG}
  chips={['YOUR BRAND','YOUR DOMAIN','YOUR TERMINOLOGY','YOUR ROLES','MODULAR PLATFORM','MANAGED SETUP']}
/>

<section className="section"><div className="section-inner">
  <div className="section-head"><div><Kicker>White-label operating system</Kicker><h2>More than a logo swap.</h2></div>
  <p className="section-intro">A white-label deployment should feel like the customer's own operating environment. Branding is only the outer layer. The valuable part is the controlled structure underneath: users, teams, incidents or events, assets, locations, communications, actions, evidence and review.</p></div>
  <div className="content-grid">
    <div className="content-card"><Icon name="target"/><h3>Brand & domain</h3><p>Customer name, visual identity, colour system, terminology and dedicated domain or subdomain.</p></div>
    <div className="content-card"><Icon name="users"/><h3>Roles & permissions</h3><p>Configure the organisation's own team structure, role names, access boundaries and authority chain.</p></div>
    <div className="content-card"><Icon name="shield"/><h3>Operational workflows</h3><p>Shape incidents, events, tasking, escalation, approvals and review around how the organisation actually operates.</p></div>
    <div className="content-card"><Icon name="map"/><h3>Track / field layer</h3><p>Add event-scoped or operation-scoped field awareness where location and status genuinely improve coordination.</p></div>
    <div className="content-card"><Icon name="radio"/><h3>Communications</h3><p>Connect field and control workflows to structured communications without forcing every organisation into the same interface.</p></div>
    <div className="content-card"><Icon name="eye"/><h3>Evidence & review</h3><p>Retain actions, decisions, information gaps and review points so the operating record is usable after the live activity ends.</p></div>
  </div>
</div></section>

<section className="section section-dark"><div className="section-inner">
  <div className="section-head"><div><Kicker>Deployment model</Kicker><h2>Vanguard core. Customer-specific experience.</h2></div>
  <p className="section-intro">The aim is to avoid maintaining a completely different codebase for every customer. Core services stay governed centrally while configurable branding, terminology, modules and permissions create the customer experience.</p></div>
  <div className="steps">
    <div className="step"><b>01 / DISCOVER</b><h3>Map the operation</h3><p>Roles, terminology, workflows, risks, data boundaries and required modules.</p></div>
    <div className="step"><b>02 / CONFIGURE</b><h3>Build the tenant</h3><p>Brand, domain, language, roles, workflows, modules and access controls.</p></div>
    <div className="step"><b>03 / VERIFY</b><h3>Test the workflow</h3><p>Use realistic scenarios and customer users before production release.</p></div>
    <div className="step"><b>04 / OPERATE</b><h3>Managed platform</h3><p>Deploy, support, update and progressively extend the customer's operating environment.</p></div>
  </div>
</div></section>

<section className="section readiness-section"><div className="section-inner">
  <div className="section-head"><div><Kicker>IRIS-aligned architecture</Kicker><h2>Human authority remains visible.</h2></div>
  <p className="section-intro">The white-label model aligns with the wider ORVIA operating philosophy: systems can capture, organise, prompt and surface information, but authorised people remain responsible for operational decisions.</p></div>
  <div className="readiness-grid">
    <div><Icon name="shield"/><h3>Explicit authority</h3><p>Customer-defined decision roles and approval points stay visible.</p></div>
    <div><Icon name="eye"/><h3>Information gaps</h3><p>Missing or stale information should be shown rather than hidden by false certainty.</p></div>
    <div><Icon name="check"/><h3>Controlled actions</h3><p>Tasking, escalation and closure can sit behind deliberate human confirmation.</p></div>
    <div><Icon name="bolt"/><h3>Intelligence support</h3><p>AI and automation assist the operator without silently becoming the decision-maker.</p></div>
  </div>
</div></section>

<section className="section"><div className="section-inner">
  <div className="section-head"><div><Kicker>Commercial fit</Kicker><h2>For organisations that need their own operating environment.</h2></div>
  <p className="section-intro">White Label is intended for organisations that need more than a standard subscription but do not want to fund a ground-up command, tracking and workflow platform.</p></div>
  <div className="content-grid">
    <div className="content-card"><h3>Security & events</h3><p>Dedicated control and field coordination under the operator's own brand.</p></div>
    <div className="content-card"><h3>Utilities & field services</h3><p>Branded team, task, asset and location workflows for dispersed operations.</p></div>
    <div className="content-card"><h3>Training & resilience</h3><p>Scenario, exercise, readiness and after-action environments configured around local terminology.</p></div>
    <div className="content-card"><h3>Community & care</h3><p>Operational coordination with sector-appropriate language, permissions and escalation.</p></div>
    <div className="content-card"><h3>Venues & organisers</h3><p>A dedicated operating platform for recurring events, teams and locations.</p></div>
    <div className="content-card"><h3>International partners</h3><p>Country- and language-specific deployments once localisation, legal and market requirements are verified.</p></div>
  </div>
</div></section>

<section className="section section-dark"><div className="section-inner">
  <div className="section-head"><div><Kicker>Commercial model</Kicker><h2>Setup + managed platform + optional capability.</h2></div>
  <p className="section-intro">Final pricing will be set after the global commercial review. The intended model is a paid implementation, recurring managed-platform licence and optional modules or field capability based on customer scale and operating need.</p></div>
  <div className="actions"><Btn href="/global">See global deployment model</Btn><Btn href="/platform" secondary>Explore Vanguard core</Btn></div>
</div></section>

<section className="band"><div className="band-inner"><h2>Your operation. Your identity. One controlled platform.</h2><Btn href="/signup">Discuss a deployment</Btn></div></section>
</Shell>}