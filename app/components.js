import Link from 'next/link';

const iconPaths = {
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  calendar: 'M3 5h18v16H3z M16 3v4 M8 3v4 M3 10h18',
  box: 'M21 8l-9 5-9-5 9-5 9 5z M3 8v8l9 5 9-5V8 M12 13v8',
  radio: 'M5 7h14v14H5z M8 3l8 4 M9 11h6 M9 15h6 M18 12h.01 M18 16h.01',
  signal: 'M2 20h.01 M6 16a8 8 0 0 1 12 0 M10 12a3 3 0 0 1 4 0 M22 20h.01',
  map: 'M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z M9 3v15 M15 6v15',
  shield: 'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z M9 12l2 2 4-4',
  bolt: 'M13 2L3 14h8l-1 8 10-12h-8z',
  play: 'M8 5v14l11-7z',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  check: 'M20 6L9 17l-5-5',
  lock: 'M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
  target: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
};

export function Icon({ name, size = 22 }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={iconPaths[name] || iconPaths.target}/></svg>;
}

export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Vanguard Tactical home"><span className="brand-logo" aria-hidden="true"></span><span className="brand-type"><b>Vanguard</b><small>Tactical</small></span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">
      <Link href="/platform">Platform</Link>
      <Link href="/sectors">Use cases</Link>
      <Link href="/players">Players</Link>
      <Link href="/teams">Teams</Link>
      <Link href="/organisers">Organisers</Link>
      <Link href="/sites">Sites</Link>
      <Link href="/pricing">Pricing</Link>
    </nav>
    <div className="header-actions"><Link className="text-link" href="/login">Log in</Link><Link className="btn btn-small" href="/signup">Start free</Link></div>
  </header>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-grid"><div><div className="brand footer-brand"><span className="brand-logo footer-logo" aria-hidden="true"></span><span className="brand-type"><b>Vanguard</b><small>Tactical</small></span></div><p>A connected operating platform for organised field activities — from airsoft and paintball to events, training exercises and readiness.</p></div><div><h4>Platform</h4><Link href="/platform">Platform</Link><Link href="/sectors">Use cases</Link><Link href="/players">Players</Link><Link href="/teams">Teams</Link><Link href="/pricing">Pricing</Link></div><div><h4>Commercial users</h4><Link href="/organisers">Organisers</Link><Link href="/sites">Sites</Link><Link href="/atac">ATAC</Link><Link href="/scenarios">Scenarios</Link></div><div><h4>Proof & access</h4><Link href="/6-troop">6 Troop case study</Link><Link href="/signup">Create profile</Link><Link href="/login">Log in</Link><Link href="/workspace">Workspace demo</Link></div></div><div className="footer-bottom"><span>© 2026 Vanguard Tactical.</span><span>Private alpha — capabilities are labelled live, in development or planned.</span></div></footer>;
}

export function Shell({ children }) { return <><Header/><main>{children}</main><Footer/></>; }

export function Kicker({ children }) { return <div className="kicker"><span></span>{children}</div>; }
export function Btn({ href, children, secondary=false }) { return <Link href={href} className={secondary ? 'btn btn-ghost' : 'btn'}>{children}<Icon name="arrow" size={17}/></Link>; }

export function ImagePanel({ image, label, title, className='' }) {
  return <div className={`image-panel ${className}`} style={{backgroundImage:`linear-gradient(180deg, rgba(8,10,7,.04), rgba(8,10,7,.78)), url('${image}')`}}><div className="image-caption"><span>{label}</span><b>{title}</b></div></div>;
}

export function Metric({ value, label }) { return <div className="metric"><b>{value}</b><span>{label}</span></div>; }

export function ProductCard({ icon, tag, title, children, href }) {
 return <Link href={href} className="product-card"><div className="product-icon"><Icon name={icon}/></div><span className="eyebrow">{tag}</span><h3>{title}</h3><p>{children}</p><div className="card-link">Explore <Icon name="arrow" size={16}/></div></Link>
}

export function PageHero({ kicker, title, text, image, chips=[] }) {
 return <section className="page-hero"><div className="page-hero-copy"><Kicker>{kicker}</Kicker><h1>{title}</h1><p>{text}</p><div className="chip-row">{chips.map(c=><span className="chip" key={c}>{c}</span>)}</div></div><ImagePanel image={image} label="Vanguard Tactical" title={kicker}/></section>
}
