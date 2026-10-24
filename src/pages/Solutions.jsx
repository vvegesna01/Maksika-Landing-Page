import { Link } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import { PageHero, SectionHead, CtaBand } from '../components/Bits.jsx';
import { solutionsPage as p } from '../pages.js';
import { solutions } from '../content.js';

export default function Solutions() {
  return (
    <>
      <PageHero title={p.title} intro={p.intro} crumbs={[{ label: 'Solutions' }]} />

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {solutions.map((s) => (
              <Link key={s.slug} to={`/solutions/${s.slug}`} className="card card--link">
                <Placeholder label="Solution image (800×450)" ratio="16 / 9" />
                <div className="card__body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="link">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="Sustainable resource management"
            title="Standard-defining consultancy through circular economic and safety models"
          />
          <ul className="grid grid--3 commitments">
            {p.commitments.map((c) => (
              <li key={c} className="pillar pillar--light">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
