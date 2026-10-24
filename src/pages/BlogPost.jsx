import { Link, Navigate, useParams } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import { PageHero, CtaBand } from '../components/Bits.jsx';
import { posts } from '../content.js';
import { blogPosts } from '../pages.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const body = blogPosts[slug];
  if (!post || !body) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        title={post.title}
        intro={`${body.date} · ${body.read}`}
        crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.title }]}
      />
      <article className="section">
        <div className="container container--narrow">
          <Placeholder label="Post cover image (1200×600)" ratio="2 / 1" />
          <div className="article">
            {body.body.map((b, i) =>
              b.h ? (
                <h2 key={i}>{b.h}</h2>
              ) : b.ul ? (
                <ul key={i} className="ticks">
                  {b.ul.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{b.p}</p>
              )
            )}
          </div>
        </div>
      </article>

      <section className="section section--tint">
        <div className="container">
          <h2>Related posts</h2>
          <div className="grid grid--2">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card card--solution card--link">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="link">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
