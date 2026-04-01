// Dark Mode Toggle
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.className = 'theme-toggle';
themeToggle.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:50%;width:50px;height:50px;cursor:pointer;font-size:1.2rem;transition:all 0.3s ease;';
document.head.appendChild(themeToggle);

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

const toggleTheme = () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
};

themeToggle.addEventListener('click', toggleTheme);

const savedTheme = localStorage.getItem('theme') || 'dark'; // Default black/dark
setTheme(savedTheme);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

// Close menu on link click
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navbar').classList.remove('active');
  });
});

// Close on resize desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.getElementById('navbar').classList.remove('active');
  }
});

// Project Modals
const modals = {};
document.querySelectorAll('.btn[data-action="preview"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.cardProjet');
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;
    
    let modal = document.getElementById('projectModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'projectModal';
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <img src="${imgSrc}" alt="${title}">
          <h2>${title}</h2>
          <p>${desc}</p>
        </div>
      `;
      modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:9998;display:flex;align-items:center;justify-content:center;padding:2rem;';
      document.body.appendChild(modal);
    } else {
      modal.querySelector('img').src = imgSrc;
      modal.querySelector('h2').textContent = title;
      modal.querySelector('p').textContent = desc;
    }
    modal.style.display = 'flex';
  });
});

// Close modals
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
    document.querySelector('.modal')?.remove();
  }
});

// Scroll Animations (IntersectionObserver)
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      
      // Skill bars
      const fills = entry.target.querySelectorAll('.skill-progress-fill');
      fills.forEach(fill => {
        const width = fill.dataset.width;
        fill.style.width = width;
      });
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, .cardProjet, .cardAbout, .aboutContainer, .formContainer').forEach(el => {
  observer.observe(el);
});

// EmailJS Contact Form (existing + loading)
const PUBLIC_KEY = "3wvhLTNNVEhdEbjyj";
const SERVICE_ID = "service_btkxq44";
const TEMPLATE_ID = "template_lb6lk4q";

emailjs.init(PUBLIC_KEY);

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const submitBtn = form.querySelector('.submitBtn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi...';
    submitBtn.disabled = true;
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
      .then(() => {
        alert("✅ Message envoyé avec succès!");
        form.reset();
      })
      .catch((error) => {
        alert("❌ Erreur: " + error.text);
      })
      .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
  });
}

