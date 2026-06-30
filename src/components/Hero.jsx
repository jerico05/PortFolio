import { profile } from '../data/profileData';
import Reveal from './ui/Reveal';

const socials = [
  {
    label: 'LinkedIn',
    href: profile.contact.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: profile.contact.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'GitLab',
    href: profile.contact.gitlab,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.65 14.39L12 22.13 1.35 14.15a.92.92 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.18 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.92.92 0 01-.35.94z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const { fullName, heroTitle, bio, photo, cvPath, title, contact } = profile;
  const [titleLine1, titleLine2] = heroTitle.split(' & ');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section hero">
      <div className="hero__layout">
        <div className="hero__content">
          <Reveal delay={0}>
            <div className="hero__badge">
              <span className="hero__status" />
              {title} · {contact.location}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="hero__greeting">
              Bonjour, je suis <span className="text-gradient">{fullName}</span>
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="hero__title">
              {titleLine1}
              <br />
              <span className="text-gradient">& {titleLine2 || 'Mobile'}</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__desc">{bio}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero__actions">
              <a href={cvPath} download className="btn btn--primary">
                Télécharger le CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
              <button className="btn btn--outline" onClick={() => scrollTo('projects')}>
                Voir mes projets
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="hero__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero__visual">
          <div className="hero__frame">
            <div className="hero__glow" />
            <img src={photo} alt={profile.fullName} className="hero__photo" />
            <div className="hero__frame-card">
              <span className="hero__frame-value">15+</span>
              <span className="hero__frame-label">Projets réalisés</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
