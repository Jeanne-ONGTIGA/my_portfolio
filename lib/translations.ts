export type Lang = 'fr' | 'en';

export type Skill = { name: string; level: number; icon: string };
export type SkillCategory = { title: string; icon: string; accent: string; skills: Skill[] };
export type Service = { title: string; description: string; icon: string; features: string[]; price: string };
export type Project = {
  title: string; category: string; description: string; longDescription: string;
  tags: string[]; image: string; liveUrl: string; repoUrl: string; featured: boolean;
};
export type Experience = {
  role: string; company: string; period: string; location: string;
  description: string; achievements: string[]; current: boolean;
};
export type Testimonial = {
  name: string; role: string; company: string; avatar: string; quote: string; rating: number;
};

export type Social = { name: string; href: string; icon: string };

export const socials: Social[] = [
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
  { name: 'Email', href: 'mailto:jeanneongtiga@gmail.com', icon: 'email' },
];

export const navSectionIds = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'testimonials', 'contact'] as const;

type ProfileContent = {
  role: string; tagline: string; bio: string; longBio: string;
  stats: { label: string; value: string; suffix: string }[];
};

type ProjectContent = {
  category: string; description: string; longDescription: string;
};

type ServiceContent = { title: string; description: string; features: string[]; price: string };

type ExperienceContent = {
  role: string; description: string; achievements: string[];
};

type TestimonialContent = { role: string; quote: string };

type UILang = {
  htmlLang: string;
  nav: { home: string; about: string; skills: string; services: string; projects: string; experience: string; testimonials: string; contact: string };
  resume: string;
  theme: { toggle: string };
  language: { toggle: string; fr: string; en: string };
  hero: {
    available: string; titleLine2: string; seeProjects: string; contactMe: string;
    yearsBadge: string; yearsLabel: string; scroll: string; alt: string;
  };
  about: {
    eyebrow: string; title: string; subtitle: string; alt: string;
    delivered: string; satisfaction: string;
    highlights: string[];
  };
  skills: { eyebrow: string; title: string; subtitle: string };
  services: {
    eyebrow: string; title: string; subtitle: string;
    requestAria: string;
  };
  projects: {
    eyebrow: string; title: string; subtitle: string;
    all: string; featured: string; demo: string; code: string;
  };
  experience: {
    eyebrow: string; title: string; subtitle: string; current: string;
  };
  testimonials: {
    eyebrow: string; title: string; subtitle: string;
    prev: string; next: string; dotAria: string;
  };
  contact: {
    eyebrow: string; title: string; subtitle: string;
    details: string; detailsSub: string;
    email: string; phone: string; location: string; availability: string; availabilityValue: string;
    socials: string;
    fullName: string; emailLabel: string; subject: string; message: string;
    namePlaceholder: string; emailPlaceholder: string; subjectPlaceholder: string; messagePlaceholder: string;
    sending: string; send: string; another: string;
    successTitle: string; successMsg: string;
    errEmpty: string; errEmail: string; errSend: string;
    emailAria: string; phoneAria: string;
  };
  footer: {
    based: string; navigation: string; contact: string;
    designed: string; backToTop: string;
  };
};

export type Translation = {
  lang: Lang;
  profile: ProfileContent;
  ui: UILang;
  skillCategories: SkillCategory[];
  serviceContents: ServiceContent[];
  projects: (Omit<Project, 'title' | 'image' | 'liveUrl' | 'repoUrl' | 'featured' | 'tags'> & ProjectContent)[];
  projectMeta: { title: string; tags: string[]; image: string; liveUrl: string; repoUrl: string; featured: boolean }[];
  experiences: (Omit<Experience, 'company' | 'period' | 'location' | 'current'> & ExperienceContent)[];
  experienceMeta: { company: string; period: string; location: string; current: boolean }[];
  testimonials: (Omit<Testimonial, 'name' | 'company' | 'avatar' | 'rating'> & TestimonialContent)[];
  testimonialMeta: { name: string; company: string; avatar: string; rating: number }[];
};

export const translations: Record<Lang, Translation> = {
  fr: {
    lang: 'fr',
    profile: {
      role: 'Développeuse Full-Stack & UI Engineer',
      tagline: 'Je transforme des idées en produits numériques élégants et performants.',
      bio: "Je suis Jeanne Chancella BIANSERE ONGITGA Développeuse full-stack passionnée avec plus de 3 ans d'expérience dans la conception d'applications web modernes. J'aime mélanger la rigueur de l'ingénierie avec le soin du design pour créer des produits qui se sentent aussi bien qu'ils ont l'air.",
      longBio: "Basé à Bangui, je collabore avec des startups et des entreprises de mon pays pour construire des interfaces soignées et des architectures robustes. Mon obsession : le détail. Je crois qu'un bon produit vit dans ses micro-interactions autant que dans ses grandes fonctionnalités.",
      stats: [
        { label: "Années d'expérience", value: '3+', suffix: '' },
        { label: 'Projets livrés', value: '02', suffix: '+' },
        { label: 'Clients satisfaits', value: '01', suffix: '+' },
        { label: 'Taux de satisfaction', value: '98', suffix: '%' },
      ],
    },
    ui: {
      htmlLang: 'fr',
      nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', services: 'Services', projects: 'Projets', experience: 'Parcours', testimonials: 'Témoignages', contact: 'Contact' },
      resume: 'CV',
      theme: { toggle: 'Basculer le thème' },
      language: { toggle: 'Changer de langue', fr: 'Français', en: 'English' },
      hero: {
        available: 'Disponible pour de nouveaux projets',
        titleLine2: 'Full-Stack & UI Engineer',
        seeProjects: 'Voir mes projets',
        contactMe: 'Me contacter',
        yearsBadge: '3+ ans',
        yearsLabel: "d'expérience",
        scroll: 'Faire défiler vers À propos',
        alt: 'Espace de travail de développement',
      },
      about: {
        eyebrow: 'À propos',
        title: 'Le développeuse derrière le code',
        subtitle: 'Curieuse, rigoureuse et obsédée par le détail.',
        alt: 'Espace de travail de développement',
        delivered: 'projets livrés',
        satisfaction: 'satisfaction',
        highlights: [
          'Architecture frontend scalable',
          'Design systems & accessibilité',
          'Performance & optimisation Lighthouse',
          'APIs REST, GraphQL & temps réel',
        ],
      },
      skills: { eyebrow: 'Compétences', title: 'Ma stack technique', subtitle: "Les outils que j'utilise au quotidien pour concevoir et livrer des produits." },
      services: { eyebrow: 'Services', title: 'Ce que je peux faire pour vous', subtitle: "Des prestations sur mesure, de l'idée au déploiement.", requestAria: 'Demander ce service' },
      projects: { eyebrow: 'Projets', title: 'Mes réalisations récentes', subtitle: 'Une sélection de projets qui illustrent mon approche du produit.', all: 'Tous', featured: 'Featured', demo: 'Démo', code: 'Code' },
      experience: { eyebrow: 'Parcours', title: 'Mon expérience professionnelle', subtitle: 'Trois ans à construire des produits.', current: 'Actuel' },
      testimonials: { eyebrow: 'Témoignages', title: 'Ce que disent mes clients', subtitle: 'La confiance est ma meilleure référence.', prev: 'Précédent', next: 'Suivant', dotAria: 'Témoignage' },
      contact: {
        eyebrow: 'Contact', title: 'Travaillons ensemble', subtitle: 'Un projet en tête ? Écrivez-moi, je réponds généralement sous 24h.',
        details: 'Coordonnées', detailsSub: 'Préférez un autre canal ? Voici comment me joindre.',
        email: 'E-mail', phone: 'Téléphone', location: 'Localisation', availability: 'Disponibilité', availabilityValue: 'Lun — Ven, 9h — 18h',
        socials: 'Réseaux',
        fullName: 'Nom complet', emailLabel: 'E-mail', subject: 'Sujet', message: 'Message',
        namePlaceholder: 'Jane Dupont', emailPlaceholder: 'jane@exemple.com', subjectPlaceholder: 'Refonte de mon site e-commerce', messagePlaceholder: 'Parlez-moi de votre projet, vos objectifs et votre calendrier…',
        sending: 'Envoi en cours…', send: 'Envoyer le message', another: 'Envoyer un autre message',
        successTitle: 'Message envoyé !', successMsg: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
        errEmpty: 'Veuillez remplir tous les champs.', errEmail: 'Veuillez saisir une adresse e-mail valide.', errSend: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou m'écrire directement par e-mail.",
        emailAria: 'Envoyer un e-mail', phoneAria: 'Appeler par téléphone',
      },
      footer: {
        based: 'Basé à', navigation: 'Navigation', contact: 'Contact',
        designed: 'Conçu avec', backToTop: 'Retour en haut',
      },
    },
    skillCategories: [
      { title: 'Frontend', icon: 'layout', accent: 'from-chart-1 to-primary', skills: [
        { name: 'React', level: 95, icon: 'react' }, { name: 'Next.js', level: 92, icon: 'nextjs' }, { name: 'TypeScript', level: 90, icon: 'typescript' }, { name: 'Tailwind CSS', level: 95, icon: 'tailwind' },
      ]},
      { title: 'Backend', icon: 'server', accent: 'from-chart-2 to-success', skills: [
        { name: 'Node.js', level: 88, icon: 'nodejs' }, { name: 'PostgreSQL', level: 85, icon: 'postgres' }, { name: 'Supabase', level: 90, icon: 'supabase' },
      ]},
      { title: 'Outils & DevOps', icon: 'wrench', accent: 'from-chart-3 to-warning', skills: [
        { name: 'Git', level: 92, icon: 'git' }, { name: 'Docker', level: 80, icon: 'docker' }, { name: 'Vercel', level: 90, icon: 'vercel' }, { name: 'Figma', level: 85, icon: 'figma' },
      ]},
    ],
    serviceContents: [
      { title: 'Développement Web', description: 'Des applications web sur mesure, rapides et évolutives, construites avec React et Next.js.', features: ['Applications SPA & SSR', 'APIs REST & GraphQL', 'Optimisation des performances', 'SEO technique'], price: '' },
      { title: 'UI/UX Design', description: "Des interfaces soignées, centrées sur l'humain, avec des prototypes interactifs et un design system complet.", features: ['Design systems', 'Prototypage Figma', 'Recherche utilisateur', "Tests d'utilisabilité"], price: '' },
      { title: 'Applications Mobiles', description: 'Des applications avec flutter  React, déployées sur Android.', features: ['Flutter', 'Animations fluides', 'Mode hors-ligne'], price: '' },
      { title: 'Conseil & Audit', description: "Auditez votre codebase, améliorez l'architecture et formez vos équipes aux bonnes pratiques.", features: ['Audit de code', 'Refactoring', 'Architecture', "Mentorat d'équipe"], price: '' },
    ],
    projectMeta: [
      { title: 'Nimbus Analytics', tags: ['Next.js', 'TypeScript', 'PostgreSQL'], image: 'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: true },
      { title: 'Verdant', tags: ['Next.js', 'Stripe', 'Supabase', 'Tailwind CSS'], image: 'https://images.pexels.com/photos/9412376/pexels-photo-9412376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: true },
      { title: 'Cadence', tags: ['React Native', 'Expo', 'Reanimated', 'SQLite'], image: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },
      /*{ title: 'Lumen CMS', tags: ['Node.js', 'GraphQL', 'React', 'Docker'], image: 'https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },
      { title: 'Atlas Travel', tags: ['Next.js', 'Mapbox', 'Supabase', 'Realtime'], image: 'https://images.pexels.com/photos/7235895/pexels-photo-7235895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },
      { title: 'Pulse Fitness', tags: ['React Native', 'OpenAI', 'HealthKit', 'TypeScript'], image: 'https://images.pexels.com/photos/3888405/pexels-photo-3888405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },*/
    ],
    projects: [
      { category: 'SaaS', description: 'Tableau de bord analytique en temps réel pour les équipes produit.', longDescription: "Une plateforme SaaS qui agrège les données produit en temps réel, avec des visualisations interactives, des rapports automatisés et un système d'alertes intelligent." },
      { category: 'E-commerce', description: "Boutique de plantes en ligne avec gestion d'inventaire intelligente.", longDescription: "Une expérience e-commerce premium pour une boutique de plantes, avec recommandations personnalisées, gestion d'inventaire en temps réel et checkout Stripe fluide." },
      { category: 'Mobile', description: 'Application de productivité musicale avec séances chronométrées.', longDescription: "Une application mobile React Native qui combine musique et productivité, avec des séances focus chronométrées, un suivi d'habitudes et des statistiques hebdomadaires." },
      /* { category: 'Outil', description: 'CMS headless open-source pour les petits studios créatifs.', longDescription: "Un CMS headless léger et extensible, pensé pour les studios créatifs. Interface drag-and-drop, gestion de médias, API GraphQL et déploiement en un clic." },
      { category: 'Web App', description: 'Planificateur de voyage collaboratif avec cartes interactives.', longDescription: "Un planificateur de voyage collaboratif permettant aux groupes de construire un itinéraire ensemble, avec cartes interactives, suggestions d'activités et partage en temps réel." },
      { category: 'Mobile', description: 'Coach sportif personnel avec IA et suivi des progrès.', longDescription: "Une application fitness qui crée des programmes personnalisés grâce à l'IA, suit les progrès via les capteurs du téléphone et offre des animations de démonstration d'exercices." },*/
    ],
    experienceMeta: [
      { company: 'Institut de Sciences Paramédicales', period: '2023-2026 — Présent', location: 'Bangui, RCA', current: true },
      { company: 'ONI', period: '2022', location: 'Bangui, RCA', current: false },
      /*{ company: 'ITIM.', period: '2020-2023', location: 'Bangui, RCA', current: false },
      /*{ company: 'WebFactory', period: '2015 — 2017', location: 'Toulouse, France', current: false },*/
    ],
    experiences: [
      { role: 'Developer Full-Stack', description: "Je dirige le développement d'une Universté privée : Institut des Sciences Paramédicales et d'une Clinique : Centre de Santé Universitaire Rachelda. Création d'interfaces interactives et d'expériences web animées", achievements: ["Migration de l'architecture vers Next.js App Router (+40% de performance)", "Mise en place d'un design system partagé entre 4 produits", "Réduction du temps de build de 60% via l'optimisation"] },
      { role: 'Développeuse Full-Stack Stagiaire', description: "Conception et développement d'applications pour la gestion commerciale des clients variés.", achievements: ["Premiers pas en web", "Apprentissage des bonnes pratiques"] },
     /* { role: 'Développeuse Frontend', description: "Création d'interfaces interactives et d'expériences web animées pour des marques de luxe.", achievements: ['Livraison de 15+ sites vitrines premium', 'Prix Awwwards Site of the Day pour un projet mode', 'Optimisation des animations WebGL et des performances Lighthouse'] },*/
     /* { role: 'Développeuse', description: 'Premiers pas en agence web, apprentissage des bonnes pratiques et des cycles de livraison.', achievements: ['Contribution à 30+ projets clients', 'Automatisation des tests frontend', 'Apprentissage de React et Node.js en production'] },*/
    ],
    testimonialMeta: [
      { name: 'Sophie Laurent', company: 'Nimbus Labs', avatar: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Marc Dubois', company: 'Studio Hexa', avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Émilie Chen', company: 'Pixel & Co.', avatar: 'https://images.pexels.com/photos/14664508/pexels-photo-14664508.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Thomas Renard', company: 'Verdant', avatar: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Nadia Benali', company: 'Cadence', avatar: 'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Julien Moreau', company: 'Atlas Travel', avatar: 'https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
    ],
    testimonials: [
      { role: 'CEO', quote: "Jeanne a transformé notre vision en un produit concret. Son attention aux détails et sa capacité à anticiper les besoins techniques nous ont fait gagner des mois de développement." },
      { role: 'Product Manager', quote: "Une développeuse rare qui maîtrise aussi bien le frontend que le backend. Jeanne communique clairement, respecte les délais et élève toujours le niveau de l'équipe." },
      { role: 'Design Lead', quote: "Travailler avec Jeanne, c'est la garantie que le design final correspond pixel près aux maquettes. Il comprend le design autant que le code, et c'est précieux." },
      { role: 'CTO', quote: "Nous avons confié à Jeanne la refonte complète de notre plateforme. Résultat : une application 3x plus rapide et un taux de conversion en hausse de 45%." },
      { role: 'Fondatrice', quote: "Jeanne a donné vie à notre application mobile avec une finesse d'exécution remarquable. Les animations sont fluides, l'UX est intuitive. Nos utilisateurs adorent." },
      { role: 'Head of Engineering', quote: "Un partenaire technique de confiance. Jeanne a structuré notre codebase et mis en place des pratiques qui nous font encore gagner du temps aujourd'hui." },
    ],
  },
  en: {
    lang: 'en',
    profile: {
      role: 'Full-Stack Developer & UI Engineer',
      tagline: 'I turn ideas into elegant, high-performance digital products.',
      bio: "Passionate full-stack developer with 3+ years of experience building modern web applications. I love blending engineering rigor with design care to create products that feel as good as they look.",
      longBio: "Based in Bangui, I collaborate with startups and companies worldwide to craft polished interfaces and robust architectures. My obsession: detail. I believe a great product lives in its micro-interactions as much as in its big features.",
      stats: [
        { label: 'Years of experience', value: '3+', suffix: '' },
        { label: 'Projects delivered', value: '02', suffix: '+' },
        { label: 'Happy clients', value: '01', suffix: '+' },
        { label: 'Satisfaction rate', value: '98', suffix: '%' },
      ],
    },
    ui: {
      htmlLang: 'en',
      nav: { home: 'Home', about: 'About', skills: 'Skills', services: 'Services', projects: 'Projects', experience: 'Experience', testimonials: 'Testimonials', contact: 'Contact' },
      resume: 'Resume',
      theme: { toggle: 'Toggle theme' },
      language: { toggle: 'Switch language', fr: 'Français', en: 'English' },
      hero: {
        available: 'Available for new projects',
        titleLine2: 'Full-Stack & UI Engineer',
        seeProjects: 'View my work',
        contactMe: 'Get in touch',
        yearsBadge: '3+ years',
        yearsLabel: 'of experience',
        scroll: 'Scroll to About',
        alt: 'Developer workspace',
      },
      about: {
        eyebrow: 'About',
        title: 'The developer behind the code',
        subtitle: 'Curious, rigorous, and detail-obsessed.',
        alt: 'Developer workspace',
        delivered: 'projects delivered',
        satisfaction: 'satisfaction',
        highlights: [
          'Scalable frontend architecture',
          'Design systems & accessibility',
          'Performance & Lighthouse optimization',
          'REST, GraphQL & real-time APIs',
        ],
      },
      skills: { eyebrow: 'Skills', title: 'My tech stack', subtitle: 'The tools I use every day to design and ship products.' },
      services: { eyebrow: 'Services', title: 'What I can do for you', subtitle: 'Tailored services, from idea to deployment.', requestAria: 'Request this service' },
      projects: { eyebrow: 'Projects', title: 'My recent work', subtitle: 'A selection of projects that illustrate my approach to product.', all: 'All', featured: 'Featured', demo: 'Demo', code: 'Code' },
      experience: { eyebrow: 'Experience', title: 'My professional journey', subtitle: 'three years building products, from junior to lead.', current: 'Current' },
      testimonials: { eyebrow: 'Testimonials', title: 'What my clients say', subtitle: 'Trust is my best reference.', prev: 'Previous', next: 'Next', dotAria: 'Testimonial' },
      contact: {
        eyebrow: 'Contact', title: "Let's work together", subtitle: 'Have a project in mind? Drop me a line — I usually reply within 24h.',
        details: 'Contact details', detailsSub: 'Prefer another channel? Here is how to reach me.',
        email: 'Email', phone: 'Phone', location: 'Location', availability: 'Availability', availabilityValue: 'Mon — Fri, 9am — 6pm',
        socials: 'Social',
        fullName: 'Full name', emailLabel: 'Email', subject: 'Subject', message: 'Message',
        namePlaceholder: 'Jane Doe', emailPlaceholder: 'jane@example.com', subjectPlaceholder: 'Redesign of my e-commerce site', messagePlaceholder: 'Tell me about your project, your goals and your timeline…',
        sending: 'Sending…', send: 'Send message', another: 'Send another message',
        successTitle: 'Message sent!', successMsg: 'Thank you for your message. I will get back to you as soon as possible.',
        errEmpty: 'Please fill in all fields.', errEmail: 'Please enter a valid email address.', errSend: 'An error occurred while sending. Please try again or email me directly.',
        emailAria: 'Send an email', phoneAria: 'Call by phone',
      },
      footer: {
        based: 'Based in', navigation: 'Navigation', contact: 'Contact',
        designed: 'Designed with', backToTop: 'Back to top',
      },
    },
    skillCategories: [
      { title: 'Frontend', icon: 'layout', accent: 'from-chart-1 to-primary', skills: [
        { name: 'React', level: 95, icon: 'react' }, { name: 'Next.js', level: 92, icon: 'nextjs' }, { name: 'TypeScript', level: 90, icon: 'typescript' }, { name: 'Tailwind CSS', level: 95, icon: 'tailwind' },
      ]},
      { title: 'Backend', icon: 'server', accent: 'from-chart-2 to-success', skills: [
        { name: 'Node.js', level: 88, icon: 'nodejs' }, { name: 'PostgreSQL', level: 85, icon: 'postgres' }, { name: 'Supabase', level: 90, icon: 'supabase' },
      ]},
      { title: 'Tools & DevOps', icon: 'wrench', accent: 'from-chart-3 to-warning', skills: [
        { name: 'Git', level: 92, icon: 'git' }, { name: 'Docker', level: 80, icon: 'docker' }, { name: 'Vercel', level: 90, icon: 'vercel' }, { name: 'Figma', level: 85, icon: 'figma' },
      ]},
    ],
    serviceContents: [
      { title: 'Web Development', description: 'Custom, fast and scalable web applications built with React and Next.js.', features: ['SPA & SSR applications', 'REST & GraphQL APIs', 'Performance optimization', 'Technical SEO'], price: '' },
      { title: 'UI/UX Design', description: 'Thoughtful, human-centered interfaces with interactive prototypes and a complete design system.', features: ['Design systems', 'Figma prototyping', 'User research', 'Usability testing'], price: '' },
      { title: 'Mobile Apps', description: 'Apps with Flutter, deployed to Android.', features: ['Flutter', 'Smooth animations', 'Offline mode'], price: '' },
      { title: 'Consulting & Audit', description: 'Audit your codebase, improve architecture and train your teams on best practices.', features: ['Code audit', 'Refactoring', 'Architecture', 'Team mentoring'], price: '' },
    ],
    projectMeta: [
      { title: 'Nimbus Analytics', tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Recharts', 'WebSockets'], image: 'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: true },
      { title: 'Verdant', tags: ['Next.js', 'Stripe', 'Supabase', 'Tailwind CSS'], image: 'https://images.pexels.com/photos/9412376/pexels-photo-9412376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: true },
      { title: 'Cadence', tags: ['React Native', 'Expo', 'Reanimated', 'SQLite'], image: 'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },
       /*{ title: 'Lumen CMS', tags: ['Node.js', 'React', 'Docker'], image: 'https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },
      { title: 'Atlas Travel', tags: ['Next.js', 'Mapbox', 'Supabase', 'Realtime'], image: 'https://images.pexels.com/photos/7235895/pexels-photo-7235895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },
      { title: 'Pulse Fitness', tags: ['React Native', 'OpenAI', 'HealthKit', 'TypeScript'], image: 'https://images.pexels.com/photos/3888405/pexels-photo-3888405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', liveUrl: '#', repoUrl: '#', featured: false },*/
    ],
    projects: [
      { category: 'SaaS', description: 'Real-time analytics dashboard for product teams.', longDescription: "A SaaS platform that aggregates product data in real time, with interactive visualizations, automated reports and a smart alerting system." },
      { category: 'E-commerce', description: 'Online plant store with smart inventory management.', longDescription: "A premium e-commerce experience for a plant shop, with personalized recommendations, real-time inventory management and a smooth Stripe checkout." },
      { category: 'Mobile', description: 'Music productivity app with timed focus sessions.', longDescription: "A React Native mobile app combining music and productivity, with timed focus sessions, habit tracking and weekly statistics." },
       /*{ category: 'Tool', description: 'Open-source headless CMS for small creative studios.', longDescription: "A lightweight, extensible headless CMS designed for creative studios. Drag-and-drop interface, media management, GraphQL API and one-click deployment." },
      { category: 'Web App', description: 'Collaborative travel planner with interactive maps.', longDescription: "A collaborative travel planner letting groups build an itinerary together, with interactive maps, activity suggestions and real-time sharing." },
      { category: 'Mobile', description: 'Personal AI fitness coach with progress tracking.', longDescription: "A fitness app that creates personalized programs with AI, tracks progress via phone sensors and offers exercise demonstration animations." },*/
    ],
    experienceMeta: [
      { company: 'Institute of Paramedical Sciences', period: '2023 — Present', location: 'Bangui, RCA', current: true },
      { company: 'ONI', period: '2022', location: 'Bangui, RCA', current: false },
     /* { company: 'Pixel & Co.', period: '2017 — 2019', location: 'Bordeaux, France', current: false },
      { company: 'WebFactory', period: '2015 — 2017', location: 'Toulouse, France', current: false },*/
    ],
    experiences: [
      { role: 'Full-Stack Developer', description: "I lead the development of a private university, the Institute of Paramedical Sciences, and a clinic, the Rachelda University Health Center. I create interactive interfaces and engaging, animated web experiences.", achievements: ["Migrated the architecture to Next.js App Router (+40% performance)", "Implemented a shared design system across 4 products", "Reduced build times by 60% through optimization"] },
      { role: 'Junior Full-Stack Developer-Intern', description: "Designed and developed applications for the business management needs of various clients.", achievements: ['First experience in web development', 'Learned and applied software development best practices'] },
      { role: 'Frontend Developer', description: "Created interactive interfaces and animated web experiences for luxury brands.", achievements: ['Delivered 15+ premium showcase websites', 'Awwwards Site of the Day award for a fashion project', 'Optimized WebGL animations and Lighthouse performance'] },
      { role: 'Junior Developer', description: 'First steps in a web agency, learning best practices and delivery cycles.', achievements: ['Contributed to 30+ client projects', 'Automated frontend testing', 'Learned React and Node.js in production'] },
    ],
    testimonialMeta: [
      { name: 'Sophie Laurent', company: 'Nimbus Labs', avatar: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Marc Dubois', company: 'Studio Hexa', avatar: 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Emily Chen', company: 'Pixel & Co.', avatar: 'https://images.pexels.com/photos/14664508/pexels-photo-14664508.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Thomas Renard', company: 'Verdant', avatar: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Nadia Benali', company: 'Cadence', avatar: 'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
      { name: 'Julien Moreau', company: 'Atlas Travel', avatar: 'https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg?auto=compress&cs=tinysrgb&h=200&w=200', rating: 5 },
    ],
    testimonials: [
      { role: 'CEO', quote: "Jeanne turned our vision into a tangible product. His attention to detail and ability to anticipate technical needs saved us months of development." },
      { role: 'Product Manager', quote: "A rare developer who masters both frontend and backend. Jeanne communicates clearly, meets deadlines and always raises the team's level." },
      { role: 'Design Lead', quote: "Working with Jeanne is the guarantee that the final design matches the mockups pixel for pixel. He understands design as much as code, and that's invaluable." },
      { role: 'CTO', quote: "We entrusted Jeanne with the complete overhaul of our platform. Result: an app 3x faster and a 45% increase in conversion rate." },
      { role: 'Founder', quote: "Jeanne brought our mobile app to life with remarkable execution finesse. The animations are smooth, the UX is intuitive. Our users love it." },
      { role: 'Head of Engineering', quote: "A trusted technical partner. Jeanne structured our codebase and set up practices that still save us time today." },
    ],
  },
};

export const profileStatic = {
  name: 'Jeanne ONGTIGA ',
  firstName: 'Jeanne',
  location: 'Bangui, RCA',
  email: 'jeanneongtiga@gmail.com',
  phone: '+236 72 31 33 04',
  resumeUrl: '/images/CV_Jeanne.pdf',
};

export function getServices(lang: Lang): Service[] {
  const icons = ['code', 'palette', 'smartphone', 'compass'];
  return translations[lang].serviceContents.map((s, i) => ({ ...s, icon: icons[i] }));
}

export function getProjects(lang: Lang): Project[] {
  const t = translations[lang];
  return t.projectMeta.map((m, i) => ({ ...m, ...t.projects[i] }));
}

export function getExperiences(lang: Lang): Experience[] {
  const t = translations[lang];
  return t.experienceMeta.map((m, i) => ({ ...m, ...t.experiences[i] }));
}

export function getTestimonials(lang: Lang): Testimonial[] {
  const t = translations[lang];
  return t.testimonialMeta.map((m, i) => ({ ...m, ...t.testimonials[i] }));
}
