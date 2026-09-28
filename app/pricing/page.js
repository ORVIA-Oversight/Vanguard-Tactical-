import {Shell,PageHero,Kicker,Icon,Btn} from '../components';

const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1800';

const plans=[
  ['Individual','Free','Core identity, participation and personal readiness.',['Portable profile','Team / organisation relationships','Basic event participation','Personal equipment','Privacy controls']],
  ['Individual Pro','£4.99','Deeper personal history and premium operational tools.',['Everything in Individual','Extended activity history','Advanced loadouts / capability records','Premium profile tools','Priority alpha access']],
  ['Team','£29','Operational workspace for organised teams and units.',['Team workspace','Roster & availability','Events / deployments','Team equipment','Actions','Documents']],
  ['Organiser / Site','£199','Commercial event, venue and field-operations capability.',['Event builder','Staff roles','Briefing & check-in','Scenario / task assignment','ATAC-ready operational records','Commercial support path']],
  ['Enterprise','£499','Higher-volume, multi-site and partner deployments.',['Multi-event operations','Enhanced controls','Partner workflows','Scenario / template library','Priority support','Bespoke onboarding pathway']]
];

export const metadata={
  title:'Pricing',
  description:'Private-alpha validation pricing for Vanguard Tactical individual, team, organiser, site and enterprise capability.'
};

export default function Page(){return <Shell>
  <PageHero
    kicker="Launch pricing"
    title="Start with the core. Add capability as the operation grows."
    text="These are current validation targets for the Vanguard commercial model, not a live checkout. Payments remain disabled until the legal, banking, terms and payment estate is ready."
    image={IMG}
    chips={['INDIVIDUAL FREE','PRO £4.99','TEAM £29','ORGANISER / SITE £199+','ENTERPRISE £499+']}
  />

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Subscriptions</Kicker><h2>Keep entry simple. Charge for operational capability.</h2></div>
        <p className="section-intro">Vanguard should not put a paywall in front of a person's core identity or basic participation. Revenue comes from premium tooling, team operations, commercial organiser/site workflows, field capability and larger deployments.</p>
      </div>

      <div className="price-grid">
        {plans.map((p,i)=><div className={'price-card '+(i===2?'featured':'')} key={p[0]}>
          <span className="eyebrow">{i===0?'Core access':i===2?'Primary team plan':'Validation target'}</span>
          <h3>{p[0]}</h3>
          <div className="price">{p[1]}{p[1]!=='Free'&&<small>/month from</small>}</div>
          <p>{p[2]}</p>
          <ul>{p[3].map(x=><li key={x}><Icon name="check" size={15}/>{x}</li>)}</ul>
          <Btn href="/signup">Request alpha access</Btn>
        </div>)}
      </div>

      <div className="pricing-note">These prices are current commercial validation targets. Checkout remains off until Vanguard is ready to contract, support and take payment safely.</div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Additional capability</Kicker><h2>Add specialist capability without forcing every customer into a larger subscription.</h2></div>
        <p className="section-intro">Scenario content, implementation and event-scoped field capability can sit above subscription as separate commercial lines.</p>
      </div>
      <div className="content-grid">
        <div className="content-card"><Icon name="play"/><h3>Scenario & operating packs</h3><div className="price">£29<small>–199</small></div><p>Reusable mission, exercise and operating packs ranging from compact templates to richer multi-phase structures.</p></div>
        <div className="content-card"><Icon name="bolt"/><h3>Setup & onboarding</h3><div className="price">£1,500<small>+ bespoke</small></div><p>Structured setup, import, configuration, terminology and onboarding for larger organisations or partner deployments.</p></div>
        <div className="content-card"><Icon name="map"/><h3>ATAC / field capability</h3><div className="price">Event scoped</div><p>Live field-awareness capability is priced to the event and operating requirement once the integration and support model is verified.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-heading"><Kicker>Commercial principle</Kicker><h2>Pay for capability, not access to your own identity.</h2></div>
      <div className="clarity-grid">
        <div className="trust-card"><h3>Individual</h3><p>Core identity, participation and basic readiness remain accessible.</p></div>
        <div className="trust-card"><h3>Individual Pro</h3><p>Adds deeper history and premium personal tooling.</p></div>
        <div className="trust-card"><h3>Team</h3><p>Adds operational team management, events, equipment and workflow.</p></div>
        <div className="trust-card"><h3>Organiser / Site / Enterprise</h3><p>Adds commercial operations, venue workflows, larger deployments and enhanced controls.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Enterprise deployment</Kicker><h2>Need Vanguard under your own brand?</h2></div>
        <p className="section-intro">White Label is a separate implementation route for organisations that need their own domain, identity, terminology, roles and managed operating environment. Final enterprise pricing remains scoped after discovery.</p>
      </div>
      <div className="actions"><Btn href="/white-label">Explore White Label</Btn><Btn href="/global" secondary>Global deployment</Btn></div>
    </div>
  </section>

  <section className="band"><div className="band-inner"><h2>Start with the core. Add capability when you need it.</h2><Btn href="/signup">Request alpha access</Btn></div></section>
</Shell>}
