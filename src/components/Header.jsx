import { useEffect, useState } from 'react';
import { nav } from '../content.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={close} aria-label="Maksika Resources, home">
          {/* Replace with logo image: <img src="/images/logo-white.svg" alt="Maksika" /> */}
          <span className="logo__mark">MAKSIKA</span>
          <span className="logo__tag">Prudence Triumph</span>
        </a>

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
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold nav__cta" onClick={close}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
