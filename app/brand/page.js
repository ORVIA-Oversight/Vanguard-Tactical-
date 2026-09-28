import {Shell,PageHero,Kicker,Icon,Btn} from '../components';
const IMG='https://orvia.org.uk/multi-agency-planning.jpg';
export const metadata={title:'Brand story',description:'The meaning behind the Vanguard Tactical mark: responsibility, resilience, progression and peace.'};
export default function Page(){return <Shell>
<PageHero kicker="Vanguard brand" title="Strength with a destination." text="The Vanguard mark is designed to represent disciplined strength, earned responsibility, progression and the human reason for preparation: to move through challenge and come out the other side able to enjoy what matters." image={IMG} chips={['EXCALIBUR','GLADIATOR','THE ROAD','THE FIGURE','PEOPLE','COMMUNITY']}/>
<section className="section brand-story"><div className="section-inner">
<div className="section-head"><div><Kicker>The mark</Kicker><h2>Four ideas. One story.</h2></div><p className="section-intro">The mark combines a classical warrior form with a road and a lone figure moving toward light. The result is not intended to glorify conflict. It expresses controlled strength, growth and the responsibility to use capability well.</p></div>
<div className="brand-meaning-grid">
<div className="brand-meaning-card"><b>01 / EXCALIBUR</b><h3>Purpose and responsibility.</h3><p>The Excalibur reference represents the idea that leadership and authority must be earned. Strength without judgement is not the Vanguard standard.</p></div>
<div className="brand-meaning-card"><b>02 / GLADIATOR</b><h3>Resilience and discipline.</h3><p>The helmet represents preparation, courage and composure. It is the visual shorthand for being ready when the environment becomes difficult.</p></div>
<div className="brand-meaning-card"><b>03 / THE ROAD</b><h3>Progression.</h3><p>The road represents development over time: training, repetition, failure, learning, teamwork and eventually responsibility.</p></div>
<div className="brand-meaning-card"><b>04 / THE FIGURE</b><h3>Peace is the destination.</h3><p>The lone person moving toward the light is the human centre of the mark. Capability exists so people can move through complexity and still have space to live, belong and enjoy their time.</p></div>
</div>
<div className="brand-quote"><p>Prepare seriously. Act responsibly. Build people. Create the space to enjoy what comes next.</p></div>
</div></section>
<section className="section"><div className="section-inner"><div className="section-head"><div><Kicker>Colour system</Kicker><h2>One brand, different operating contexts.</h2></div><p className="section-intro">The core corporate identity uses Deep Navy, Champagne Gold and Stone White. Field and team environments can use the olive, sage, bronze and charcoal variants without changing the underlying mark.</p></div><div className="content-grid">
<div className="content-card"><h3>Signature</h3><p>Deep Navy #081722 · Champagne Gold #D4AF7C · Stone White #E8E6DD. Primary corporate and digital identity.</p></div>
<div className="content-card"><h3>Field</h3><p>Olive, cream and muted gold for field operations, exercises and team use.</p></div>
<div className="content-card"><h3>Earth / team</h3><p>Dark green, bronze, sage and light stone for grounded team and outdoor applications.</p></div>
</div></div></section>
<section className="section section-dark"><div className="section-inner"><div className="section-head"><div><Kicker>Brand principles</Kicker><h2>People. Training. Community. Real-world skills.</h2></div><p className="section-intro">These four words explain the intended behaviour of the brand better than a tactical aesthetic ever could.</p></div><div className="clarity-grid">
<div className="content-card"><Icon name="users"/><h3>People</h3><p>Capability begins and ends with the human being using it.</p></div>
<div className="content-card"><Icon name="play"/><h3>Training</h3><p>Confidence and competence are built through practice, feedback and repetition.</p></div>
<div className="content-card"><Icon name="shield"/><h3>Community</h3><p>Teams work because people trust each other, contribute and belong.</p></div>
<div className="content-card"><Icon name="check"/><h3>Real-world skills</h3><p>The useful outcome is practical capability that transfers beyond a single event or activity.</p></div>
</div></div></section>
<section className="band"><div className="band-inner"><h2>Controlled strength. Human purpose.</h2><Btn href="/platform">Explore Vanguard</Btn></div></section>
</Shell>}