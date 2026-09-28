import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://orvia.org.uk/vehicle-tailgate-control.jpg';
export const metadata={title:'Platform',description:'Human-led operational command, tracking, communications, intelligence support and field coordination.'};
export default function Page(){return <Shell>
<PageHero kicker="Vanguard platform" title="Command. Track. Communicate. Decide." text="Vanguard joins incidents, people, assets, locations, communications, actions and decisions into one operational picture while keeping explicit human authority at the centre." image={IMG} chips={['COMMAND','TRACK / ATAC','PTT','INTELLIGENCE','ACTIONS','REVIEW']}/>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Platform modules</Kicker><h2>One operational picture. Modular by design.</h2></div><p className="section-intro">Use the field layer on its own, or connect it to a broader command and control workflow. Each module is designed to remain independently useful while contributing to the same operational record.</p></div><div className="clarity-grid">
<div id="command" className="content-card"><Icon name="shield"/><h3>Command</h3><p>Incidents, objectives, sectors, roles, resource allocation, decisions, escalation, recovery and review.</p></div>
<div className="content-card"><Icon name="map"/><h3>Track / ATAC</h3><p>Shared geospatial awareness for teams, assets, zones, hazards, ground marks, movement and field status.</p></div>
<div id="comms" className="content-card"><Icon name="radio"/><h3>PTT & communications</h3><p>Field and control-room communications designed to sit alongside the operational workflow rather than in a separate disconnected system.</p></div>
<div id="intelligence" className="content-card"><Icon name="bolt"/><h3>Intelligence support</h3><p>Missing-information prompts, context and communications assistance behind explicit human authority gates.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Operating loop</Kicker><h2>From first report to accountable close-out.</h2></div><p className="section-intro">The simple controller workflow stays at the front. Intelligence and data services sit behind it.</p></div><div className="steps">
<div className="step"><b>01 / CAPTURE</b><h3>Establish the situation</h3><p>Record the issue, current picture, known facts and information gaps.</p></div>
<div className="step"><b>02 / COMMAND</b><h3>Set intent</h3><p>Define objectives, roles, sectors and operational actions.</p></div>
<div className="step"><b>03 / TRACK</b><h3>See the field</h3><p>Understand resources, positions, zones, hazards and operational status.</p></div>
<div className="step"><b>04 / REVIEW</b><h3>Retain the record</h3><p>Keep decisions, events, actions and learning through recovery and close-out.</p></div>
</div></div></section>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Human authority</Kicker><h2>AI can assist. People authorise.</h2></div><p className="section-intro">Vanguard is designed to support the controller, commander or responsible lead — not automate away accountability. Recommendations, missing-information prompts and analysis remain subordinate to explicit human decisions.</p></div><div className="content-grid">
<div className="content-card"><Icon name="eye"/><h3>Visible uncertainty</h3><p>Age, accuracy, missing evidence and information gaps remain visible rather than being turned into false certainty.</p></div>
<div className="content-card"><Icon name="check"/><h3>Explicit approvals</h3><p>Tasking, escalation and closure can require human confirmation before the state changes.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Accountable record</h3><p>Decisions and significant operational events can be retained as part of the event record for review.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Capability truth</Kicker><h2>Live. Retest. In development.</h2></div><p className="section-intro">The current field layer is the strongest live capability. Broader command, communications and multi-sector operating workflows will remain truth-labelled as they are integrated and verified.</p></div><div className="actions"><Btn href="/atac">Explore field operations</Btn><Btn href="/sectors" secondary>See sectors</Btn></div></div></section>
<section className="band"><div className="band-inner"><h2>See the operation. Command the response.</h2><Btn href="/atac">Explore field operations</Btn></div></section>
</Shell>}