import Placeholder from '../components/Placeholder.jsx';
import { PageHero, SectionHead, CtaBand, TickList } from '../components/Bits.jsx';
import { servicesPage as p } from '../pages.js';
import { standards, countries } from '../content.js';

export default function Services() {
  return (
    <>
      <PageHero title={p.title} intro={p.intro} crumbs={[{ label: 'Services' }]} />

      {p.items.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 ? 'section--tint' : ''}`}>
          <div className={`container split split--top ${i % 2 ? 'split--flip' : ''}`}>
            <div>
              <p className="eyebrow">Service {String(i + 1).padStart(2, '0')}</p>
              <h2>{s.title}</h2>
              <p className="lead">{s.text}</p>
              {/* <Placeholder label="Service image (800×500)" ratio="8 / 5" /> */}
              <img className="service-image" src={s.image} alt={s.title} corner-radius="50%" />
            </div>
            <div className="detail-groups">
              {s.groups.map((g) => (
                <div key={g.label} className="detail">
                  <h3>{g.label}</h3>
                  <TickList items={g.items} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--dark">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Global regulatory compliance" title="Reporting to international standards" />
            <p className="lead lead--light">
              We report and advise in strict alignment with global geoscientific and financial
              reporting standards, ensuring transparency and institutional confidence in every project.
            </p>
          </div>
          <dl className="standards standards--dark">
            {standards.map((s) => (
              <div key={s.name}>
                <dt>{s.name}</dt>
                <dd>{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Global project footprint"
            title="Supporting clients across diverse geologies"
            intro="Integrated earth sciences and engineering across varied regulatory regimes worldwide."
          />
          <ul className="chips">
            {countries.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
