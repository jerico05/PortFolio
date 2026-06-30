import { useState } from 'react';
import { projects } from '../data/profileData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function ProjectImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="project-card__media project-card__media--fallback">
        <span>{alt.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div className="project-card__media">
      <img src={src} alt={alt} loading="lazy" onError={() => setError(true)} />
      <div className="project-card__overlay" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projets sélectionnés"
        subtitle="Une sélection de réalisations web, mobile et desktop."
      />

      <div className="projects-list">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 70}>
            <article className={`project-card ${project.category === 'mobile' ? 'project-card--mobile' : ''}`}>
              <ProjectImage src={project.image} alt={project.title} />
              <div className="project-card__body">
                <div className="project-card__head">
                  <span className="project-card__cat">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link project-card__link--demo"
                    >
                      Voir le projet
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__link"
                    >
                      Voir le code
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
