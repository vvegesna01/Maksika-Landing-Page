import { Link } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { SectionHead, TickList } from '../components/Bits.jsx';
import {
  partners,
  stats,
  services,
  solutions,
  standards,
  countries,
  about,
  posts,
  contact,
} from '../content.js';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <img className="hero__img" ratio="auto" object-fit="cover" src="images/hero-image.jpg" alt="Maksika Resources" />
          {/* <Placeholder label="Hero image: drone / mine site (1920×1080)" ratio="auto" className="hero__img" /> */}
        </div>
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--light">Maksika Resources Pvt Ltd</p>
          <h1>Integrated earth sciences &amp; engineering services partner</h1>
          <p className="hero__sub">
            End-to-end subsurface intelligence and infrastructure engineering that reduces
            operational risk for the global mining and energy sectors.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--gold">Explore services</Link>
            <Link to="/contact" className="btn btn--ghost">Contact us</Link>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="Partners and credentials">
        <div className="container trust__inner">
          <p className="trust__label">Trusted by and working with</p>
          <ul className="trust__logos">
            {partners.map((p) => (
              <li key={p}>
                <Placeholder label={`${p} logo`} ratio="3 / 1" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="stats" aria-label="Maksika at a glance">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our services"
            title="Exploration and production, done sustainably"
            intro="Three integrated practices covering the full resource lifecycle."
          />
          <div className="grid grid--3">
            {services.map((s) => (
              <article key={s.title} className="card card--service">
                <img src={s.image} alt={s.title}/>
                {/* <Placeholder label="Service image (800×500)" ratio="8 / 5" /> */}
                <div className="card__body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <TickList items={s.points} />
                  <p className="outcome"><span>Outcome</span>{s.outcome}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="more"><Link to="/services" className="link">View all services →</Link></p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="Core solutions"
            title="Specialized consulting, engineering and data architecture"
          />
          <div className="grid grid--4">
            {solutions.map((s, i) => (
              <Link key={s.slug} to={`/solutions/${s.slug}`} className="card card--solution card--link">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHead
              eyebrow="Compliance"
              title="Reporting to global standards"
              intro="Transparent, institution-ready reporting aligned with international geoscientific and financial codes."
            />
            <dl className="standards">
              {standards.map((s) => (
                <div key={s.name}>
                  <dt>{s.name}</dt>
                  <dd>{s.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHead eyebrow="Global footprint" title="Delivering across diverse geologies" />
            {/* <Placeholder label="World map graphic (900×560)" ratio="9 / 5.6" /> */}
            <img src="images/world_map.jpg" alt="World map graphic" />
            <ul className="chips">
              {countries.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="split split--center">
            <div>
              <p className="eyebrow eyebrow--gold">About Maksika</p>
              <h2>{about.lead}</h2>
              <p className="lead lead--light">{about.text}</p>
              <Link to="/about" className="btn btn--gold">Our story</Link>
            </div>
            <Placeholder label="Team / field photo (900×700)" ratio="9 / 7" />
          </div>

          <div className="grid grid--3 pillars">
            {about.pillars.map((p) => (
              <div key={p.title} className="pillar">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <div className="ceo">
            <Placeholder label="CEO portrait (400×400)" ratio="1 / 1" className="ceo__photo" />
            <div>
              <p className="eyebrow eyebrow--gold">Leadership</p>
              <h3>{about.ceo.name}</h3>
              <p className="ceo__role">{about.ceo.role}</p>
              <p>{about.ceo.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Insights" title="From the Maksika blog" />
          <div className="grid grid--3">
            {posts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card card--link">
                <Placeholder label="Blog image (800×500)" ratio="8 / 5" />
                <div className="card__body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="link">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="more"><Link to="/blog" className="link">All posts →</Link></p>
        </div>
      </section>

      <section className="section section--brand">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow--light">Contact</p>
            <h2>Tell us about your project</h2>
            <p className="lead lead--light">
              Share a few details and our team will respond with next steps.
            </p>
            <address>
              <strong>Corporate office</strong>
              {contact.address.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </address>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
