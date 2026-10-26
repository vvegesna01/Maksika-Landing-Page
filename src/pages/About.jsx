import Placeholder from '../components/Placeholder.jsx';
import { PageHero, SectionHead, CtaBand } from '../components/Bits.jsx';
import { about } from '../content.js';
import { aboutPage } from '../pages.js';

export default function About() {
  const p = aboutPage;
  return (
    <>
      <PageHero title={p.title} intro={p.intro} crumbs={[{ label: 'About' }]} />

      <section className="section">
        <div className="container split split--center">
          <div>
            <SectionHead eyebrow="Who we are" title={p.story.heading} />
            {p.story.paras.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <div className="grid grid--2 pillars-light">
              {about.pillars.slice(0, 2).map((x) => (
                <div key={x.title} className="pillar pillar--light">
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              ))}
            </div>
          </div>
          <Placeholder label="Team / field photo (900×700)" ratio="9 / 7" />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split split--center">
          {/* <Placeholder label="Honeybee brand graphic (700×700)" ratio="1 / 1" /> */}
          <img src="images/maksika.png" alt="Honeybee brand graphic" ratio="1" />
          <div>
            <SectionHead eyebrow="Our Mission" title={p.brand.heading} />
            {p.brand.paras.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Why clients trust Maksika" title="Proven, precise, integrated" />
          <div className="grid grid--3">
            {p.trust.map((t, i) => (
              <article key={t.title} className="card card--solution">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Our leadership" title={about.ceo.name} intro={p.leadershipIntro} />
          <div className="ceo ceo--top">
            {/* <Placeholder label="CEO portrait (400×400)" ratio="1 / 1" className="ceo__photo" /> */}
            <img src="images/ceo.jpeg" alt="CEO portrait" ratio="1" className="ceo__photo" />
            <div>
              <p className="ceo__role">{about.ceo.role}</p>
              <p>37 years of dedicated experience in R&amp;D, precision mapping and mineral exploration drive the vision that defines Maksika.</p>
            </div>
          </div>
          <div className="grid grid--3 pillars">
            {p.ceoDetails.map((d) => (
              <div key={d.title} className="pillar">
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
