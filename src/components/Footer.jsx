import { Link } from 'react-router-dom';
import { nav, contact } from '../content.js';

export default function Footer() {
  const solutions = nav.find((n) => n.children).children;
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">MAKSIKA</p>
          <p>Integrated earth sciences &amp; engineering services partner.</p>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Solutions</h3>
          <ul>
            {solutions.map((s) => (
              <li key={s.to}><Link to={s.to}>{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Corporate office</h3>
          <address>
            {contact.address.map((l) => (
              <span key={l}>{l}</span>
            ))}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
        </div>
      </div>
      <div className="container footer__legal">
        © {new Date().getFullYear()} Maksika Resources Private Limited
      </div>
    </footer>
  );
}
