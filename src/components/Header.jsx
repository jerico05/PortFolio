import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/profileData';

export default function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <button className="logo" onClick={() => scrollTo('home')} aria-label="Accueil">
            <span className="logo__ring" />
            <span className="logo__text">{profile.initials}</span>
          </button>

          <nav className="nav-desktop" aria-label="Navigation principale">
            <ul className="nav-pill">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    className={activeSection === id ? 'is-active' : ''}
                    onClick={() => scrollTo(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn--ghost btn--sm" onClick={() => scrollTo('contact')}>
              Discutons
            </button>
            <button
              className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav aria-label="Navigation mobile">
          <ul>
            {navLinks.map(({ id, label }, i) => (
              <li key={id} style={{ '--i': i }}>
                <button
                  className={activeSection === id ? 'is-active' : ''}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
            <li style={{ '--i': navLinks.length }}>
              <button onClick={() => scrollTo('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
      {menuOpen && <button className="mobile-overlay" onClick={() => setMenuOpen(false)} aria-label="Fermer" />}
    </>
  );
}
