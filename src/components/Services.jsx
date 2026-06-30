import { profile } from '../data/profileData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const icons = ['</>', '📱', '⚡', '🖥️'];

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading
        eyebrow="Ce que je fais"
        title="Services"
        subtitle="Des solutions digitales sur mesure, du concept au déploiement."
      />
      <div className="bento bento--4">
        {profile.services.map((service, i) => (
          <Reveal key={service.title} delay={i * 80} className="bento__item">
            <article className="glass-card glass-card--service">
              <div className="glass-card__top">
                <span className="glass-card__icon" aria-hidden="true">{icons[i]}</span>
                <span className="glass-card__index">0{i + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tags">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
