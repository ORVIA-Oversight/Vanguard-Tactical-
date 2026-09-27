import {Shell,PageHero,Kicker,Btn,Icon} from '../components';
const IMG='https://images.pexels.com/photos/20335223/pexels-photo-20335223.jpeg?auto=compress&cs=tinysrgb&w=1600';
const packs=[['Viper Strike','Convoy escort, disruption and recovery.','4–6 hours'],['Sentinel Line','Border-sector patrol, checkpoints and infrastructure pressure.','8–12 hours'],['Black Box','Downed-aircraft recovery and search-sector race.','6–10 hours']];
export const metadata={title:'Scenarios',description:'Prototype scenario packs and game-mode concepts for Vanguard Tactical.'};
export default function Page(){return <Shell>
  <PageHero kicker="VANGUARD SCENARIOS" title="DON'T JUST BOOK A GAME DAY. RUN AN EXPERIENCE." text="Scenario packs are reusable event IP: organiser guides, factions, objectives, injects, scoring and optional ATAC or AI-assisted control." image={IMG} chips={['MISSION PACKS','CAMPAIGNS','ATAC-ENHANCED','AI-FACILITATED']}/>
  <section className="section"><div className="section-head"><div><Kicker>ALPHA LIBRARY</Kicker><h2>FIRST CONCEPT PACKS.</h2></div><p className="section-intro">These are prototype concepts, not yet paid products. They are being built as executable event packages rather than PDFs alone.</p></div><div className="content-grid">{packs.map(([t,d,h])=><div className="content-card" key={t}><Icon name="play"/><span className="eyebrow">PROTOTYPE</span><h3>{t}</h3><p>{d}</p><p><b>{h}</b></p></div>)}</div><div className="actions"><Btn href="/signup">JOIN THE ALPHA</Btn></div></section>
</Shell>}
