import { Link } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import { PageHero } from '../components/Bits.jsx';
import { posts } from '../content.js';
import { blogPosts } from '../pages.js';

export default function Blog() {
  return (
    <>
      <PageHero title="Blog" intro="Technical insights from our geoscience and engineering teams." crumbs={[{ label: 'Blog' }]} />
      <section className="section">
        <div className="container grid grid--3">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card card--link">
              <Placeholder label="Blog image (800×500)" ratio="8 / 5" />
              <div className="card__body">
                <p className="meta">{blogPosts[p.slug].date} · {blogPosts[p.slug].read}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="link">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
