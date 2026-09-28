import {Shell,PageHero,Kicker,Icon,Btn} from '../components';

const IMG='https://orvia.org.uk/multi-agency-planning.jpg';

export const metadata={
  title:'Global',
  description:'Vanguard is being prepared for country, language and sector localisation while preserving a single controlled operating core.'
};

export default function Page(){return <Shell>
<PageHero
  kicker="Vanguard Global"
  title="One operating core. Local language, terminology and context."
  text="Vanguard is being structured for international deployment without forcing every country to use UK terminology. Language, role names, sector vocabulary, units and customer branding can sit above one controlled operating architecture."
  image={IMG}
  chips={['LOCALISATION READY','COUNTRY PROFILES','LANGUAGE PACKS','WHITE LABEL','LOCAL TERMINOLOGY','CONTROLLED CORE']}
/>

<section className="section"><div className="section-inner">
  <div className="section-head"><div><Kicker>International architecture</Kicker><h2>Localise the experience — not the integrity of the platform.</h2></div>
  <p className="section-intro">The operating core should remain consistent enough to maintain, secure and verify. Country-specific presentation can then change language, terminology, role names, date and number formats, units and sector wording.</p></div>
  <div className="clarity-grid">
    <div className="content-card"><Icon name="users"/><h3>Language packs</h3><p>Human-reviewed interface and content translations rather than browser-only machine translation.</p></div>
    <div className="content-card"><Icon name="map"/><h3>Country profiles</h3><p>Locale-specific terminology, date/time formats, measurement units and geographic conventions.</p></div>
    <div className="content-card"><Icon name="shield"/><h3>Sector vocabulary</h3><p>Use language appropriate to emergency readiness, security, utilities, care, sport or other local sectors.</p></div>
    <div className="content-card"><Icon name="target"/><h3>Customer branding</h3><p>Combine localisation with the White Label model for fully branded local deployments.</p></div>
  </div>
</div></section>

<section className="section section-dark"><div className="section-inner">
  <div className="section-head"><div><Kicker>Language strategy</Kicker><h2>Do not translate blindly.</h2></div>
  <p className="section-intro">The next commercial review will determine priority countries and languages using real market evidence. That research should decide which languages launch first and which sectors justify local investment.</p></div>
  <div className="content-grid">
    <div className="content-card"><h3>Interface language</h3><p>Navigation, buttons, forms, status labels, onboarding and application screens.</p></div>
    <div className="content-card"><h3>Operational terminology</h3><p>Role names, incident/event terms, status states, warnings and sector-specific language.</p></div>
    <div className="content-card"><h3>Commercial content</h3><p>Website, pricing, onboarding, support and sales material localised for the market rather than literally translated.</p></div>
  </div>
</div></section>

<section className="section"><div className="section-inner">
  <div className="section-head"><div><Kicker>Planned implementation</Kicker><h2>Locale-aware from the route to the record.</h2></div>
  <p className="section-intro">The production implementation will use country and language configuration rather than maintaining disconnected country websites. The global review will define the first launch matrix before those routes are switched on.</p></div>
  <div className="steps">
    <div className="step"><b>01 / MARKET</b><h3>Select countries</h3><p>Use sector demand, competition, procurement, regulation and language need.</p></div>
    <div className="step"><b>02 / LANGUAGE</b><h3>Build locale packs</h3><p>Human-review operational and commercial terminology.</p></div>
    <div className="step"><b>03 / COUNTRY</b><h3>Configure context</h3><p>Dates, units, role language, legal notices and country-specific product boundaries.</p></div>
    <div className="step"><b>04 / DEPLOY</b><h3>Release by market</h3><p>Standard Vanguard or customer-branded White Label deployments.</p></div>
  </div>
</div></section>

<section className="section readiness-section"><div className="section-inner">
  <div className="section-head"><div><Kicker>Global review next</Kicker><h2>Research first. Expansion second.</h2></div>
  <p className="section-intro">The next commercial review should compare Vanguard internationally across command-and-control, workforce coordination, event operations, resilience technology, field tracking and white-label operational software — then identify where the product has a genuine commercial opening.</p></div>
  <div className="actions"><Btn href="/white-label">Explore White Label</Btn><Btn href="/sectors" secondary>See sectors</Btn></div>
</div></section>

<section className="band"><div className="band-inner"><h2>Global product. Local operating language.</h2><Btn href="/white-label">See White Label</Btn></div></section>
</Shell>}