import {Shell,PageHero,Kicker,Icon,Btn} from '../components';

const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1800';

const plans=[
  ['Player','Free','Portable identity and core participation.',['Player Passport','Team memberships','Basic event attendance','Personal equipment','Privacy controls']],
  ['Player Pro','£4.99','For players who want deeper history and premium personal tools.',['Everything in Player','Extended event history','Advanced loadouts','Premium profile tools','Priority alpha access']],
  ['Team','£29','For organised teams running real rosters, events and equipment.',['Team workspace','Roster & attendance','Events','Team equipment','Actions','Documents']],
  ['Organiser / Site','£199','Commercial event and venue operations, with larger plans quoted by scale.',['Event builder','Staff roles','Briefing & check-in','Scenario assignment','ATAC-ready event records','Commercial support path']],
  ['Enterprise / Promoter','£499','For higher-volume organisers, multi-site operators and future partner deployments.',['Multi-event operations','Enhanced controls','Partner workflows','Scenario library access','Priority support','Bespoke onboarding']]
];

export const metadata={
  title:'Pricing',
  description:'Private-alpha validation pricing for Vanguard Tactical players, teams, organisers and sites.'
};

export default function Page(){return <Shell>
  <PageHero
    kicker="Launch pricing"
    title="Start free. Add capability as your operation grows."
    text="These are current validation targets for the Vanguard commercial model, not a live checkout. Payments remain disabled until the legal, banking, terms and payment estate is ready."
    image={IMG}
    chips={['PLAYER FREE','PLAYER PRO £4.99','TEAM £29','ORGANISER / SITE £199+','ENTERPRISE £499+']}
  />

  <section className="section">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Subscriptions</Kicker><h2>The player network stays easy to join.</h2></div>
        <p className="section-intro">Players should not need a paid account simply to join a team or event. Revenue comes from premium player tooling, team operations, commercial organiser/site workflows, scenarios and event-scoped field capability.</p>
      </div>

      <div className="price-grid">
        {plans.map((p,i)=><div className={'price-card '+(i===2?'featured':'')} key={p[0]}>
          <span className="eyebrow">{i===0?'Core identity':i===2?'Primary team plan':'Validation target'}</span>
          <h3>{p[0]}</h3>
          <div className="price">{p[1]}{p[1]!=='Free'&&<small>/month from</small>}</div>
          <p>{p[2]}</p>
          <ul>{p[3].map(x=><li key={x}><Icon name="check" size={15}/>{x}</li>)}</ul>
          <Btn href="/signup">Request alpha access</Btn>
        </div>)}
      </div>

      <div className="pricing-note">Current commercial targets are being validated against support cost, event volume and margin. Checkout stays off until Vanguard is ready to contract and take payment.</div>
    </div>
  </section>

  <section className="section section-dark">
    <div className="section-inner">
      <div className="section-head">
        <div><Kicker>Additional capability</Kicker><h2>Scenarios, setup and specialist field services sit above subscription.</h2></div>
        <p className="section-intro">These are separate commercial lines rather than forcing every customer into a larger subscription.</p>
      </div>
      <div className="content-grid">
        <div className="content-card"><Icon name="play"/><h3>Scenario packs</h3><div className="price">£29<small>–199</small></div><p>Reusable scenario products ranging from compact mission packs to richer multi-phase event structures.</p></div>
        <div className="content-card"><Icon name="bolt"/><h3>Setup & onboarding</h3><div className="price">£1,500<small>+ bespoke</small></div><p>For larger organisers, sites or partners needing structured setup, import, configuration and onboarding.</p></div>
        <div className="content-card"><Icon name="map"/><h3>ATAC / field capability</h3><div className="price">Event scoped</div><p>Live field-awareness capability is priced to the event and operating requirement once the integration and support model is verified.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="section-inner">
      <div className="section-heading"><Kicker>Commercial principle</Kicker><h2>Pay for capability, not access to your own identity.</h2></div>
      <div className="clarity-grid">
        <div className="trust-card"><h3>Player</h3><p>Core identity and participation remain accessible.</p></div>
        <div className="trust-card"><h3>Player Pro</h3><p>Adds deeper personal history and premium player tooling.</p></div>
        <div className="trust-card"><h3>Team</h3><p>Adds operational team management, events, equipment and team workflow.</p></div>
        <div className="trust-card"><h3>Organiser / Site</h3><p>Adds commercial event operations, venue workflows and higher-volume controls.</p></div>
      </div>
    </div>
  </section>

  <section className="band"><div className="band-inner"><h2>Start with the identity. Add capability when you need it.</h2><Btn href="/signup">Create profile</Btn></div></section>
</Shell>}
