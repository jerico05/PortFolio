export const profile = {
  initials: 'KS',
  fullName: 'KOUDOZIAN KOSSI SENYO',
  title: 'Étudiant en Génie Logiciel',
  heroTitle: 'Développeur Web & Mobile',
  tagline: 'Développeur Web et Mobile',
  bio: `Étudiant en génie logiciel avec une passion pour le développement web et mobile. Curieux, rigoureux et motivé, je souhaite évoluer dans un environnement stimulant où je pourrai renforcer mes connaissances techniques et contribuer à des projets concrets.`,
  photo: '/assets/images/profil.svg',
  cvPath: '/assets/pdf/CV_KOUDOZIAN Kossi Senyo.pdf',

  education: {
    school: 'École Polytechnique de Lomé (EPL)',
    degree: 'Licence en Génie Logiciel',
    period: '2023 — Présent',
  },

  contact: {
    email: 'fkoudozian@gmail.com',
    phone: '+228 79 56 35 07',
    location: 'Lomé, Togo',
    linkedin: 'https://www.linkedin.com/in/jerico-koudozian',
    github: 'https://github.com/jerico05',
    gitlab: 'https://gitlab.com/jerico05',
  },

  languages: [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' },
  ],

  hobbies: ['Football', 'Voyage', 'Musique'],

  softSkills: [
    'Esprit d\'équipe',
    'Créativité',
    'Apprentissage rapide',
  ],

  services: [
    {
      title: 'Développement Web',
      description: 'Création d\'applications web modernes, performantes et adaptées aux besoins des utilisateurs.',
      tags: ['Interfaces modernes', 'Design responsive'],
    },
    {
      title: 'Applications Mobile',
      description: 'Conception d\'applications mobiles cross-platform pour iOS et Android avec React Native.',
      tags: ['React Native', 'Expo GO'],
    },
    {
      title: 'Backend & API',
      description: 'Développement de services backend robustes et d\'APIs REST pour alimenter vos applications.',
      tags: ['Node.js', 'Spring Boot'],
    },
    {
      title: 'Applications Desktop',
      description: 'Applications bureautiques en Java avec interfaces Swing et gestion de données JPA.',
      tags: ['Java POO', 'MariaDB'],
    },
  ],

  approach: [
    { step: '01', text: 'Comprendre les besoins & objectifs' },
    { step: '02', text: 'Concevoir des interfaces modernes' },
    { step: '03', text: 'Développer & livrer des solutions' },
  ],

  stats: [
    { value: '02+', label: 'Années d\'expérience' },
    { value: '15+', label: 'Projets réalisés' },
    { value: '07+', label: 'Projets académiques' },
  ],

  skillCategories: [
    {
      title: 'Compétences clés',
      items: ['Développement Frontend', 'Développement Mobile', 'UI/UX', 'POO'],
    },
    {
      title: 'Langages',
      items: ['Java', 'HTML', 'CSS', 'JavaScript', 'Python'],
    },
    {
      title: 'Technologies',
      items: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'React Native'],
    },
    {
      title: 'Outils & BDD',
      items: ['Git', 'GitHub', 'GitLab', 'PostgreSQL', 'MariaDB', 'Cursor'],
    },
  ],

  academicProjects: [
    {
      title: 'Miabe Budget Manager',
      description: 'Application web de suivi de budget, revenus et dépenses.',
      tech: ['HTML', 'CSS', 'JS', 'Firebase', 'Node.js'],
    },
    {
      title: 'Gestion salle de sport',
      description: 'Application bureautique de gestion (UML, JAVA POO, JAVA SWING, JPA, MariaDB).',
      tech: ['Java', 'Swing', 'JPA', 'MariaDB'],
    },
    {
      title: 'EventHub',
      description: 'Application mobile pour les événements Tech.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Expo GO'],
    },
    {
      title: 'TechMentor AI',
      description: 'Plateforme de mentorat intelligent pour étudiants en informatique.',
      tech: ['Next.js', 'Python', 'RAG', 'Docker'],
    },
    {
      title: 'Veloria AI',
      description: 'Plateforme intelligente d\'assistance pédagogique.',
      tech: ['Next.js', 'Spring Boot', 'AI', 'RAG'],
    },
    {
      title: 'Dashboard agricole Togo',
      description: 'Dashboard interactif pour analyse des données agricoles du Togo.',
      tech: ['Python', 'React'],
    },
  ],
};

export const projects = [
  {
    id: 'eventhub',
    title: 'EventHub',
    description: 'Application mobile pour découvrir et suivre les événements tech : hackathons, meetups et workshops.',
    image: '/assets/images/eventhub.png',
    category: 'mobile',
    tech: ['React Native', 'Node.js', 'Firebase', 'Expo GO'],
    github: 'https://github.com/jerico05',
  },
  {
    id: 'techmentor',
    title: 'TechMentor AI',
    description: 'Plateforme de mentorat intelligent pour étudiants en informatique avec analyse de profil et assistant IA.',
    image: '/assets/images/techmentor-ai.png',
    category: 'web',
    tech: ['Next.js', 'Python', 'RAG', 'Docker'],
    demo: 'https://tech-mentor-ai.vercel.app/',
    github: 'https://github.com/jerico05',
  },
  {
    id: 'veloria',
    title: 'Veloria AI',
    description: 'Plateforme intelligente d\'assistance pédagogique basée sur les supports de cours officiels.',
    image: '/assets/images/veloria-ai.png',
    category: 'web',
    tech: ['Next.js', 'Spring Boot', 'AI', 'RAG'],
    github: 'https://github.com/jerico05',
  },
  {
    id: 'dashboard-agri',
    title: 'Dashboard Agricole Togo',
    description: 'Dashboard interactif pour l\'analyse des données agricoles du Togo avec cartes et visualisations.',
    image: '/assets/images/dashboard-agricole.png',
    category: 'web',
    tech: ['Python', 'React'],
    github: 'https://github.com/jerico05',
  },
  {
    id: 'mbm',
    title: 'Miabe Budget Manager',
    description: 'Application web complète pour le suivi budgétaire. Gestion des dépenses, revenus, catégories et rapports visuels.',
    image: '/assets/images/mbm.png',
    category: 'web',
    tech: ['HTML/CSS/JS', 'FireBase'],
    github: 'https://github.com/GK330/Miabe-Budget-Manager.git',
  },
  {
    id: 'weather',
    title: 'Weather App',
    description: 'Application météo temps réel avec géolocalisation, prévisions 7 jours et interface responsive.',
    image: '/assets/images/metoe.png',
    category: 'web',
    tech: ['React JS', 'API OpenWeather', 'CSS'],
    github: 'https://github.com/jerico05/Weather-app.git',
  },
  {
    id: 'todo',
    title: 'To Do List',
    description: 'Ajouter, supprimer, modifier et marquer comme terminé les tâches.',
    image: '/assets/images/todolist.png',
    category: 'web',
    tech: ['React JS'],
    github: 'https://github.com/jerico05/TO-DO-LIST.git',
  },
  {
    id: 'convert',
    title: 'Météo & Convertisseur de devise',
    description: 'Application bureautique pour météo et convertisseur de devise.',
    image: '/assets/images/convert.png',
    category: 'desktop',
    tech: ['JAVA SWING', 'OpenWeatherMap', 'ExchangeRate API'],
    github: 'https://gitlab.com/jerico05/convertisseurdevise.git',
  },
  {
    id: 'gym',
    title: 'Gestion de salle de sport',
    description: 'Application bureautique pour gérer une salle de sport côté utilisateur et administrateur.',
    image: '/assets/images/gymUt.png',
    category: 'desktop',
    tech: ['JAVA', 'JPA', 'MariaDB', 'UML'],
    github: 'https://github.com/jerico05/gestion_salle_sport.git',
  },
  {
    id: 'keepnote',
    title: 'Keep Note',
    description: 'Mini application web pour écrire des notes et consulter l\'historique.',
    image: '/assets/images/keepnote.jpeg',
    category: 'web',
    tech: ['HTML/CSS/JS', 'LocalStorage'],
    github: 'https://github.com/jerico05/Keep_Note.git',
  },
];

export const navLinks = [
  { id: 'home', label: 'Accueil' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
];
