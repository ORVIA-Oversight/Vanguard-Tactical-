import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1800';
const plans=[
  ['Player','Free','Portable identity and core participation.',['Player Passport','Team memberships','Basic event attendance','Personal equipment','Privacy controls']],
  ['Player+','£4.99','For players who want more history and tools.',['Everything in Player','Extended event history','Advanced loadouts','Premium profile tools','Priority alpha access']],
  ['Team','£19','For organised teams.',['Team workspace','Roster & attendance','Events','Team equipment','Actions','Documents']],
  ['Team Pro','£49','For established teams and multiple elements.',['Everything in Team','Sub-units / reserve structures','Enhanced equipment','AAR workflow','Scenario access','Priority support']],
  ['Organiser','£39','For organisers and sites.',['Event builder','Staff roles','Briefing & check-in','Scenario assignment','ATAC-ready event records','Six annual live-event credits proposed']]
];
export const metadata={title:'Pricing',description:'Private-alpha validation pricing for Vanguard Tactical players, teams and organisers.'};
export default function Page(){return <Shell>
<PageHero kicker="Launch pricing" title="Start free. Pay for specialist capability." text="These are private-alpha validation prices, not a live checkout. Payments remain disabled until the legal, banking, terms and Stripe estate is ready." image={IMG} chips={['PLAYER FREE','PLAYER+ £4.99','TEAM £19','TEAM PRO £49','ORGANISER £39']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Subscriptions</Kicker><h2>The network stays easy to join.</h2></div><p className="section-intro">Players should not need a paid account simply to join a team or event. Revenue comes from enhanced player tools, specialist team workflows, organiser operations, scenarios and ATAC activations.</p></div>
<div className="price-grid">{plans.map((p,i)=><div className={'price-card '+(i===3?'featured':'')} key={p[0]}><span className="eyebrow">{i===0?'Core identity':i===3?'Team alpha target':'Proposed'}</span><h3>{p[0]}</h3><div className="price">{p[1]}{p[1]!=='Free'&&<small>/month</small>}</div><p>{p[2]}</p><ul>{p[3].map(x=><li key={x}><Icon name="check" size={15}/>{x}</li>)}</ul><Btn href="/signup">Alpha access</Btn></div>)}</div>
<div className="pricing-note">Launch pricing is intentional validation pricing. Checkout remains off until Vanguard is commercially ready to take payment.</div>
</div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Event capability</Kicker><h2>Add ATAC and scenarios when the event needs them.</h2></div><p className="section-intro">These remain proposed validation bands until delivery cost, support effort and margin are verified.</p></div><div className="content-grid">
<div className="content-card"><Icon name="map"/><h3>ATAC activation</h3><div className="price">£49<small>/event from</small></div><p>Proposed event-scoped live field-awareness activation. Capacity bands remain to be validated.</p></div>
<div className="content-card"><Icon name="play"/><h3>Scenario packs</h3><div className="price">£19<small>–149</small></div><p>From downloadable mission structures to multi-phase ATAC-enabled event packs.</p></div>
<div className="content-card"><Icon name="box"/><h3>Field systems</h3><div className="price">TBC</div><p>Future control-node and managed device packages only after demand and operating cost prove the case.</p></div>
</div></div></section>
<section className="section"><div className="section-inner"><div className="section-heading"><Kicker>How upgrades change the product</Kicker><h2>Pay for capability, not access to your own identity.</h2></div><div className="clarity-grid">
<div className="trust-card"><h3>Player</h3><p>Core identity and participation remain accessible.</p></div>
<div className="trust-card"><h3>Player+</h3><p>Adds deeper personal history and premium player tooling.</p></div>
<div className="trust-card"><h3>Team / Team Pro</h3><p>Adds operational team management, then deeper multi-element and review capability.</p></div>
<div className="trust-card"><h3>Organiser</h3><p>Adds event-specific commercial operations and ATAC-ready event structures.</p></div>
</div></div></section>
<section className="band"><div className="band-inner"><h2>Start with the identity. Add capability when you need it.</h2><Btn href="/signup">Create profile</Btn></div></section>
</Shell>}