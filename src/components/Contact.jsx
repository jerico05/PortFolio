import { useState } from 'react';
import { profile } from '../data/profileData';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const PUBLIC_KEY = '3wvhLTNNVEhdEbjyj';
const SERVICE_ID = 'service_btkxq44';
const TEMPLATE_ID = 'template_lb6lk4q';

const contactItems = [
  { label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}` },
  { label: 'Téléphone', value: profile.contact.phone, href: `tel:${profile.contact.phone.replace(/\s/g, '')}` },
  { label: 'Localisation', value: profile.contact.location },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      emailjs.init(PUBLIC_KEY);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target);
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="section section--contact">
      <SectionHeading
        eyebrow="Restons en contact"
        title="Travaillons ensemble"
        subtitle="Un projet en tête ? Décrivez-le moi et je vous réponds rapidement."
      />

      <div className="contact-layout">
        <Reveal className="contact-layout__info">
          <div className="contact-cards">
            {contactItems.map((item) => (
              <div className="contact-card" key={item.label}>
                <span className="contact-card__label">{item.label}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </div>
          <div className="contact-cta-box">
            <p>Disponible pour des missions freelance, stages et collaborations.</p>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
              Profil LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="contact-layout__form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="vous@email.com" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="title">Sujet</label>
              <input type="text" id="title" name="title" placeholder="Objet du message" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Parlez-moi de votre projet..." required />
            </div>

            <button type="submit" className="btn btn--primary btn--full" disabled={status === 'sending'}>
              {status === 'sending' && 'Envoi en cours...'}
              {status === 'success' && 'Message envoyé ✓'}
              {status === 'error' && 'Erreur — réessayez'}
              {status === 'idle' && 'Envoyer le message'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
