import { profile } from '../data/profileData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">{profile.initials}</span>
          <p>{profile.fullName}</p>
        </div>
        <p className="footer-copy">© {year} — Conçu & développé avec React</p>
        <div className="footer-links">
          <a href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.contact.gitlab} target="_blank" rel="noreferrer">GitLab</a>
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
