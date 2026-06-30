import { profile } from '../data/profileData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function About() {
  const { bio, approach, stats, education } = profile;

  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="Qui suis-je"
        title="À propos de moi"
        subtitle={bio}
      />

      <div className="approach">
        <Reveal>
          <p className="approach__label">Mon approche</p>
        </Reveal>
        <div className="approach__grid">
          {approach.map((item, i) => (
            <Reveal key={item.step} delay={i * 100}>
              <div className="approach__step">
                <span className="approach__num">{item.step}</span>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="stats-bento">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="stats-bento__item">
            <div className="stat-card">
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="edu-card">
          <div className="edu-card__icon" aria-hidden="true">🎓</div>
          <div className="edu-card__body">
            <strong>{education.school}</strong>
            <p>{education.degree}</p>
          </div>
          <span className="edu-card__period">{education.period}</span>
        </div>
      </Reveal>
    </section>
  );
}
