import { Link } from 'react-router-dom';

export function PageHero({ title, intro, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}> / {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}</span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

export function CtaBand({ title = 'Discuss your project with our team', text = 'Tell us what you are working on and we will respond with next steps.' }) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to="/contact" className="btn btn--gold">Contact us</Link>
      </div>
    </section>
  );
}

export function TickList({ items }) {
  return (
    <ul className="ticks">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
