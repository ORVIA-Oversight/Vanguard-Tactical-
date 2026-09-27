import {Shell,PageHero,Kicker,Icon,Btn} from '../components';

const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1600';

const plans=[
  ['PLAYER','FREE','Portable identity.',['Player Passport','Team memberships','Basic event attendance','Personal equipment','Privacy controls']],
  ['PLAYER+','£4.99','For players who want more history and tools.',['Everything in Player','Extended event history','Advanced loadouts','Premium profile tools','Priority alpha access']],
  ['TEAM','£19','For organised teams.',['Team workspace','Roster & attendance','Events','Team equipment','Actions','Documents']],
  ['TEAM PRO','£49','For established teams and multiple elements.',['Everything in Team','Sub-units / reserve structures','Enhanced equipment','AAR workflow','Scenario access','Priority support']],
  ['ORGANISER','£39','For organisers and sites.',['Event builder','Staff roles','Briefing & check-in','Scenario assignment','ATAC-ready event records','Six annual live-event credits proposed']]
];

export const metadata={title:'Pricing',description:'Prototype launch pricing for Vanguard Tactical players, teams and organisers.'};

export default function Page(){return <Shell>
  <PageHero kicker="PRIVATE ALPHA PRICING" title="START FREE. PAY FOR SPECIALIST CAPABILITY." text="These are validation prices for the prototype, not a live checkout. Payments stay disabled until the company, bank account, terms and Stripe estate are ready." image={IMG} chips={['NO CHECKOUT YET','PLAYER-FIRST','TEAM PLANS','ORGANISER PLANS']}/>

  <section className="section">
    <div className="section-head"><div><Kicker>PROPOSED SUBSCRIPTIONS</Kicker><h2>THE NETWORK STAYS EASY TO JOIN.</h2></div><p className="section-intro">Players should not need a paid account simply to join a team or event. Revenue comes from enhanced player tools, specialist team workflows, organiser operations, scenarios and ATAC activations.</p></div>
    <div className="price-grid">{plans.map((p,i)=><div className={'price-card '+(i===3?'featured':'')} key={p[0]}>
      <span className="eyebrow">{i===0?'CORE IDENTITY':i===3?'TEAM ALPHA TARGET':'PROPOSED'}</span>
      <h3>{p[0]}</h3>
      <div className="price">{p[1]}{p[1]!=='FREE'&&<small>/month</small>}</div>
      <ul>{p[2].map(x=><li key={x}><Icon name="check" size={15}/>{x}</li>)}</ul>
      <Btn href="/signup">ALPHA ACCESS</Btn>
    </div>)}</div>
  </section>

  <section className="section section-dark">
    <div className="section-head"><div><Kicker>EVENT CAPABILITY</Kicker><h2>ADD ATAC AND SCENARIOS WHEN THE EVENT NEEDS THEM.</h2></div><p className="section-intro">These are proposed validation bands only. They will not become chargeable until delivery cost, support effort and margin are verified.</p></div>
    <div className="content-grid">
      <div className="content-card"><Icon name="map"/><h3>ATAC ACTIVATION</h3><div className="price">£49<small>/event from</small></div><p>Proposed event-scoped live field-awareness activation. Capacity bands to be validated.</p></div>
      <div className="content-card"><Icon name="play"/><h3>SCENARIO PACKS</h3><div className="price">£19<small>–149</small></div><p>From downloadable missions to multi-phase ATAC-enabled event packs.</p></div>
      <div className="content-card"><Icon name="box"/><h3>FIELD SYSTEMS</h3><div className="price">TBC</div><p>Future Vanguard-owned control node and managed handset packages, purchased only after demand proves the case.</p></div>
    </div>
  </section>
</Shell>}
