import { Link, Navigate, useParams } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import { PageHero, SectionHead, CtaBand, TickList } from '../components/Bits.jsx';
import { solutionDetails } from '../pages.js';
import { solutions } from '../content.js';

export default function SolutionDetail() {
  const { slug } = useParams();
  const d = solutionDetails[slug];
  if (!d) return <Navigate to="/solutions" replace />;

  const others = solutions.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        title={d.title}
        intro={d.intro}
        crumbs={[{ label: 'Solutions', to: '/solutions' }, { label: d.title }]}
      />

      <section className="section section--flush-bottom">
        <div className="container">
          <Placeholder label={`${d.title} banner image (1600×600)`} ratio="8 / 3" />
        </div>
      </section>

      {d.sections.map((s, i) => (
        <section key={s.heading} className={`section ${i % 2 ? 'section--tint' : ''}`}>
          <div className="container">
            <SectionHead title={s.heading} intro={s.intro} />
            {s.paras?.map((t) => (
              <p key={t} className="prose">{t}</p>
            ))}
            {s.cards && (
              <div className={`grid ${s.cards.length === 4 ? 'grid--4' : 'grid--3'}`}>
                {s.cards.map((c) => (
                  <article key={c.title} className="card card--solution">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </article>
                ))}
              </div>
            )}
            {s.items &&
              (s.items.every((x) => x.length < 12) ? (
                <ul className="chips chips--lg">
                  {s.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : (
                <TickList items={s.items} />
              ))}
          </div>
        </section>
      ))}

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Explore more" title="Other solutions" />
          <div className="grid grid--3">
            {others.map((s) => (
              <Link key={s.slug} to={`/solutions/${s.slug}`} className="pillar pillar--link">
                <h3>{s.title}</h3>
                <span className="link link--gold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
