import Placeholder from '../components/Placeholder.jsx';
import { PageHero, CtaBand } from '../components/Bits.jsx';
import { projectsPage as p } from '../pages.js';

export default function Projects() {
  return (
    <>
      <PageHero title={p.title} intro={p.intro} crumbs={[{ label: 'Projects' }]} />
      <section className="section">
        <div className="container projects">
          {p.items.map((x, i) => (
            <article key={x.title} className={`project ${i % 2 ? 'project--flip' : ''}`}>
              <Placeholder label="Project image (900×600)" ratio="3 / 2" />
              <div>
                <p className="eyebrow">{x.location}</p>
                <h2>{x.title}</h2>
                <p className="lead">{x.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
