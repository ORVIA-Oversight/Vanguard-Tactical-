import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '../components';

export const metadata={title:'Join Vanguard | Member Access'};

const features=[
  ['users','TEAM MEMBERSHIP','Join an existing team'],
  ['shield','ROLE-BASED ACCESS','Right access, right team'],
  ['radio','SECURE COMMS','Team Signal & chat'],
  ['calendar','EVENTS & TRAINING','Briefs, skirmishes, scenarios'],
  ['target','CALLSIGN & PROGRESSION','Track your journey']
];

export default function Page(){return <main className="member-access">
  <section className="member-hero">
    <div className="member-overlay"/>
    <header className="member-header">
      <Link href="/" className="member-vanguard" aria-label="Vanguard Tactical home">
        <Image src="/vanguard-logo-2026.svg" alt="Vanguard Tactical" width={230} height={80} priority/>
      </Link>
      <Link href="https://www.airsoftfound.com" className="member-airsoft" target="_blank" rel="noreferrer">
        <span className="af-mark"><i></i><b>A</b></span>
        <span><strong>AIRSOFT<br/>FOUND</strong><small>FIND IT · BUILD IT · PLAY IT · TOGETHER</small></span>
      </Link>
    </header>

    <div className="member-copy">
      <span className="member-eyebrow">JOIN THE TEAM</span>
      <h1>Member access,<br/><em>not owner setup.</em></h1>
      <p>6 Troop and 7 Troop members join an existing Vanguard workspace. Access, roles and permissions are managed by your team leader.</p>
      <div className="member-actions">
        <Link className="member-btn primary" href="/login"><Icon name="users" size={26}/><span><b>SIGN IN</b><small>Existing members</small></span><Icon name="arrow" size={22}/></Link>
        <Link className="member-btn" href="/signup?mode=member"><Icon name="users" size={26}/><span><b>CREATE MEMBER LOGIN</b><small>Join 6 Troop or 7 Troop</small></span><Icon name="arrow" size={22}/></Link>
      </div>
    </div>
  </section>

  <section className="member-feature-strip">
    {features.map(([icon,title,text])=><div key={title}><span className="member-icon"><Icon name={icon}/></span><span><b>{title}</b><small>{text}</small></span></div>)}
  </section>

  <section className="member-cards">
    <article className="member-card troop-six">
      <div className="member-card-img"/>
      <div className="member-card-copy"><span className="member-icon"><Icon name="users"/></span><h2>6 TROOP</h2><p>Primary active team. Events, training, scenarios and community.</p><Link href="/signup?mode=member">JOIN 6 TROOP <Icon name="arrow" size={17}/></Link></div>
    </article>
    <article className="member-card troop-seven">
      <div className="member-card-img"/>
      <div className="member-card-copy"><span className="member-icon"><Icon name="users"/></span><h2>7 TROOP</h2><p>Reserve & augmentation. Training, support roles and selected events.</p><Link href="/signup?mode=member">JOIN 7 TROOP <Icon name="arrow" size={17}/></Link></div>
    </article>
    <article className="member-card member-events">
      <div className="member-card-img"/>
      <div className="member-card-copy"><span className="member-icon"><Icon name="calendar"/></span><h2>UPCOMING EVENTS</h2><p>See team events, training days, milsim weekends and scenario packs.</p><Link href="/events">VIEW EVENTS <Icon name="arrow" size={17}/></Link></div>
    </article>
  </section>

  <footer className="member-foot">
    <span><Icon name="lock" size={17}/> Team membership, troop access and callsign permissions are applied by invitation from your team leader.</span>
    <b>MORE THAN A GAME. A STRONGER COMMUNITY.</b>
  </footer>
</main>}
