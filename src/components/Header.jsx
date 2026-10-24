import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="logo" aria-label="Maksika Resources, home">
          {/* Replace with logo image: <img src="images/logo-white.svg" alt="Maksika" /> */}
          <span className="logo__mark">MAKSIKA</span>
          <span className="logo__tag">Prudence Triumph</span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div key={item.to} className="nav__group">
                <NavLink to={item.to} end>{item.label}<span className="caret" aria-hidden="true" /></NavLink>
                <div className="nav__sub">
                  {item.children.map((c) => (
                    <NavLink key={c.to} to={c.to}>{c.label}</NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
            )
          )}
          <Link to="/contact" className="btn btn--gold nav__cta">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}
