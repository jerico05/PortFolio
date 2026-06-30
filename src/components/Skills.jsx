import { profile } from '../data/profileData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Stack technique"
        title="Compétences"
        subtitle="Technologies et outils que je maîtrise pour donner vie à vos idées."
      />

      <div className="bento bento--4">
        {profile.skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 80} className="bento__item">
            <article className="glass-card glass-card--skill">
              <h3>{cat.title}</h3>
              <div className="tags tags--wrap">
                {cat.items.map((item) => (
                  <span className="tag tag--glow" key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
