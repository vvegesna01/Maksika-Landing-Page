import Header from './components/Header.jsx';
import Placeholder from './components/Placeholder.jsx';
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
} from './content.js';

function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Inquiry from ${f.get('name')}`);
  const body = encodeURIComponent(`${f.get('message')}\n\n${f.get('name')}\n${f.get('email')}`);
  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        {/* HERO */}
        <section id="top" className="hero">
          <div className="hero__bg" aria-hidden="true">
            <Placeholder label="Hero image: drone / mine site (1920×1080)" ratio="auto" className="hero__img" />
          </div>
          <div className="container hero__inner">
            <p className="eyebrow eyebrow--light">Maksika Resources Pvt Ltd</p>
            <h1>Integrated earth sciences &amp; engineering services partner</h1>
            <p className="hero__sub">
              End-to-end subsurface intelligence and infrastructure engineering that reduces
              operational risk for the global mining and energy sectors.
            </p>
            <div className="hero__actions">
              <a href="#services" className="btn btn--gold">Explore services</a>
              <a href="#contact" className="btn btn--ghost">Contact us</a>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust" aria-label="Partners and credentials">
          <div className="container trust__inner">
            <p className="trust__label">Trusted by and working with</p>
            <ul className="trust__logos">
              {partners.map((p) => (
                <li key={p}>
                  {/* Replace with partner logo <img> */}
                  <Placeholder label={`${p} logo`} ratio="3 / 1" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STATS */}
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

        {/* SERVICES */}
        <section id="services" className="section">
          <div className="container">
            <SectionHead
              eyebrow="Our services"
              title="Exploration and production, done sustainably"
              intro="Three integrated practices covering the full resource lifecycle."
            />
            <div className="grid grid--3">
              {services.map((s) => (
                <article key={s.title} className="card card--service">
                  <Placeholder label="Service image (800×500)" ratio="8 / 5" />
                  <div className="card__body">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <ul className="ticks">
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <p className="outcome"><span>Outcome</span>{s.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="section section--tint">
          <div className="container">
            <SectionHead
              eyebrow="Core solutions"
              title="Specialised consulting, engineering and data architecture"
            />
            <div className="grid grid--4">
              {solutions.map((s, i) => (
                <article key={s.title} className="card card--solution">
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STANDARDS + FOOTPRINT */}
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
              <SectionHead
                eyebrow="Global footprint"
                title="Delivering across diverse geologies"
              />
              <Placeholder label="World map graphic (900×560)" ratio="9 / 5.6" />
              <ul className="chips">
                {countries.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section section--dark">
          <div className="container">
            <div className="split split--center">
              <div>
                <p className="eyebrow eyebrow--gold">About Maksika</p>
                <h2>{about.lead}</h2>
                <p className="lead lead--light">{about.text}</p>
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

        {/* PROJECTS / INSIGHTS */}
        <section id="projects" className="section">
          <div className="container">
            <SectionHead eyebrow="Insights" title="From the Maksika blog" />
            <div className="grid grid--3">
              {posts.map((p) => (
                <article key={p.title} className="card">
                  <Placeholder label="Blog image (800×500)" ratio="8 / 5" />
                  <div className="card__body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <a href="#contact" className="link">Read more →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section--brand">
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

            <form className="form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                How can we help?
                <textarea name="message" rows="4" required />
              </label>
              <button type="submit" className="btn btn--dark">Send message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Maksika Resources Private Limited</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </footer>
    </>
  );
}
