export type Language = 'es' | 'en' | 'fr';

export const translations = {
  es: {
    // Navigation & General
    backToProjects: 'Volver a proyectos',
    backToHome: 'Volver al inicio',
    downloadPDF: 'Descargar PDF',
    viewOnAppStore: 'Ver en App Store',
    viewWeb: 'Ver Web',
    viewCode: 'Ver Código',
    live: 'Live',
    development: 'En Desarrollo',
    dev: 'Dev',
    archived: 'Archivado',
    home: 'Inicio',
    projects: 'Proyectos',
    cv: 'CV',
    
    // Home page
    homeTitle: 'Francisco De Haro',
    homeSubtitle: 'Especialista en IA aplicada y evaluación de LLMs.',
    homeDescription: 'Integro LLMs en casos reales (educación, economía, producto), convierto ideas en demos en días y publico resultados comparables (coste/latencia/precisión). Busco dar a conocer la IA y anticipar sus efectos con evidencia y sentido práctico. Trabajo como desarrollador independiente end-to-end; ciclos cortos, entrega continua y foco en resultados. 430+ contribuciones en GitHub en los últimos 12 meses (mayoría privadas).',
    featuredProjects: 'Proyectos destacados',
    viewAllProjects: 'Ver todos los proyectos',
    contact: 'Contacto',
    
    // Projects page
    allProjects: 'Todos los proyectos',
    projectsDescription: 'Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta integraciones de IA.',
    
    // Project detail
    aboutProject: 'Sobre el proyecto',
    technologies: 'Tecnologías',
    features: 'Características',
    technicalChallenges: 'Desafíos técnicos',
    learnings: 'Aprendizajes',
    screenshots: 'Capturas de pantalla',
    view: 'Vista',
    training: 'Entrenamiento',
    results: 'Resultados',
    
    // CV page
    cvTitle: 'Francisco De Haro',
    cvSubtitle: 'Desarrollador Full Stack · Next.js · IA & ML',
    cvContact: 'Contacto',
    cvEmail: 'Email',
    cvLocation: 'Ubicación',
    cvLocationValue: 'España',
    cvPortfolio: 'Portfolio',
    
    cvProfile: 'Perfil',
    cvProfileText: 'Desarrollador full-stack orientado a resultados. Experiencia 0→1, ciclos rápidos y productos end-to-end. Especializado en Next.js, React Native e IA. He publicado Repai Trainer en App Store con suscripciones, backend Supabase e integración de LLMs. Prefiero código claro, experimentación rápida y productos que la gente quiera usar.',
    
    cvSummary: 'Resumen',
    cvSummaryText1: 'Desarrollador full-stack centrado en Next.js/TypeScript y Python, lanzando productos end-to-end orientados a la UX (web y móvil con Expo) con backends sólidos (Supabase/PostgreSQL/Node). Fuerte en APIs: diseño e integración de REST/GraphQL/streaming y SDKs de terceros (auth, pagos, observabilidad). Integraciones de IA prácticas (Mistral, OpenAI, Llama): orquestación de prompts, evals y RAG ligero; productos con suscripciones y CI/CD. Disponibilidad inmediata; abierto a reubicación y a un año sabático para el proyecto adecuado.',
    cvSummaryText2: '',
    
    cvWhatIBring: 'Qué aporto',
    cvSkill1: 'Diseño y desarrollo frontend (Next.js/React) y móvil (Expo)',
    cvSkill2: 'APIs y backend en Node/TypeScript (Supabase, PostgreSQL, Neon)',
    cvSkill3: 'Autenticación y pagos (Clerk, Stripe, RevenueCat, suscripciones)',
    cvSkill4: 'Integración de LLMs (Mistral, OpenAI, etc.), orquestación de prompts y despliegues',
    cvSkill5: 'Fine-tuning de modelos (Llama, QLoRA, LoRA) y generación de imágenes (Stable Diffusion)',
    cvSkill6: 'DevOps práctico: Vercel, Cloudflare, GitHub, CI/CD',
    
    cvProjects: 'Proyectos',
    cvTechStack: 'Stack Tecnológico',
    cvFrontendMobile: 'Frontend & Mobile',
    cvBackendDatabase: 'Backend & Database',
    cvAuthPayments: 'Auth & Payments',
    cvAIML: 'IA & Machine Learning',
    cvDevOpsTools: 'DevOps & Tools',
    
    cvEducation: 'Educación',
    cvEducationDegree: 'Grado en Administración y Dirección de Empresas (ADE)',
    cvEducationYear: 'Cursando 3º',
    cvEducationDescription: 'Aprendizaje rápido y autonomía técnica',
    
    cvLanguages: 'Idiomas',
    cvLanguageSpanish: 'Español',
    cvLanguageEnglish: 'Inglés',
    cvLanguageFrench: 'Francés',
    cvLanguageLevelNative: 'Nativo',
    cvLanguageLevelAdvanced: 'Avanzado',
    cvLanguageLevelBasic: 'Básico',
    
    cvAvailability: 'Disponible de inmediato',
    cvAvailabilityText: 'para colaboraciones y nuevas oportunidades.',
    cvContactCTA: 'Contacto →',
    
    // Home page - CV section
    homeCVTitle: 'CV',
    homeCVDescription: 'Experiencia, stack tecnológico y formación.',
    viewFullCV: 'Ver CV completo →',
    homeCVSummaryTitle: 'Resumen',
    homeCVSummaryText1: 'Desarrollador full-stack centrado en Next.js/TypeScript y Python, lanzando productos end-to-end orientados a la UX (web y móvil con Expo) con backends sólidos (Supabase/PostgreSQL/Node). Fuerte en APIs: diseño e integración de REST/GraphQL/streaming y SDKs de terceros (auth, pagos, observabilidad). Integraciones de IA prácticas (Mistral, OpenAI, Llama): orquestación de prompts, evals y RAG ligero; productos con suscripciones y CI/CD. Disponibilidad inmediata; abierto a reubicación y a un año sabático para el proyecto adecuado.',
    homeCVSummaryText2: '',
    
    // About me section
    aboutMeTitle: 'Sobre mí',
    aboutMeText: 'Me llamo Francisco y me gusta construir cosas útiles rápido y con cariño por la UX. Disfruto del 0→1, medir antes que opinar y shippear en ciclos cortos. Cuando no estoy programando, experimento con LLMs, evals y pequeñas automatizaciones que me ahorran tiempo. Prefiero código claro, CI que no estorbe y productos que la gente quiera usar. Me motiva convertir ideas en productos en días, no meses. Si hay datos, hacemos ciencia; si no, prototipo y mido. Bajo ego, alta entrega. Creo que el mundo necesita conocer la IA, ya que en mi entorno y clases universidad soy de los pocos o el único que entiende la importancia y sobre todo ve la trayectoria y hacia a donde va la IA y sus capacidades futuras.',
    
    // Availability
    availabilityTitle: 'Disponibilidad',
    availabilityText: 'Incorporación inmediata on-site EU (prácticas 4–6 meses). Abierto a conversión a tiempo completo tras la internship.',
    availableForCollaborations: 'Disponible de inmediato para colaboraciones →',
  },
  
  en: {
    // Navigation & General
    backToProjects: 'Back to projects',
    backToHome: 'Back to home',
    downloadPDF: 'Download PDF',
    viewOnAppStore: 'View on App Store',
    viewWeb: 'View Website',
    viewCode: 'View Code',
    live: 'Live',
    development: 'In Development',
    dev: 'Dev',
    archived: 'Archived',
    home: 'Home',
    projects: 'Projects',
    cv: 'CV',
    
    // Home page
    homeTitle: 'Francisco De Haro',
    homeSubtitle: 'Applied AI and LLM Evaluation Specialist.',
    homeDescription: 'I integrate LLMs into real-world use cases (education, economics, product), turn ideas into demos in days, and publish comparable results (cost/latency/accuracy). I aim to raise awareness of AI and anticipate its effects with evidence and practical judgment. I work as an independent end-to-end developer; short cycles, continuous delivery, and a focus on outcomes. 430+ GitHub contributions in the last 12 months (mostly private).',
    featuredProjects: 'Featured projects',
    viewAllProjects: 'View all projects',
    contact: 'Contact',
    
    // Projects page
    allProjects: 'All projects',
    projectsDescription: 'A collection of projects I\'ve worked on, from web applications to AI integrations.',
    
    // Project detail
    aboutProject: 'About the project',
    technologies: 'Technologies',
    features: 'Features',
    technicalChallenges: 'Technical challenges',
    learnings: 'Learnings',
    screenshots: 'Screenshots',
    view: 'View',
    training: 'Training',
    results: 'Results',
    
    // CV page
    cvTitle: 'Francisco De Haro',
    cvSubtitle: 'Full Stack Developer · Next.js · AI & ML',
    cvContact: 'Contact',
    cvEmail: 'Email',
    cvLocation: 'Location',
    cvLocationValue: 'Spain',
    cvPortfolio: 'Portfolio',
    
    cvProfile: 'Profile',
    cvProfileText: 'Results-oriented full-stack developer. Experience in 0→1, fast cycles, and end-to-end products. Specialized in Next.js, React Native, and AI. Published Repai Trainer on App Store with subscriptions, Supabase backend, and LLM integration. I prefer clear code, rapid experimentation, and products people want to use.',
    
    cvSummary: 'Summary',
    cvSummaryText1: 'Full-stack developer focused on Next.js/TypeScript and Python, shipping user-centric products end-to-end (web + mobile with Expo) with solid backends (Supabase/PostgreSQL/Node). Strong with APIs—designing and integrating REST/GraphQL/streaming endpoints and third-party SDKs (auth, payments, observability). Practical AI integrations (Mistral, OpenAI, Llama): prompt orchestration, evals, and lightweight RAG; shipped products with subscriptions and CI/CD. Immediate availability; open to relocation and a sabbatical year for the right project.',
    cvSummaryText2: '',
    
    cvWhatIBring: 'What I bring',
    cvSkill1: 'Frontend (Next.js/React) and mobile (Expo) design and development',
    cvSkill2: 'APIs and backend in Node/TypeScript (Supabase, PostgreSQL, Neon)',
    cvSkill3: 'Authentication and payments (Clerk, Stripe, RevenueCat, subscriptions)',
    cvSkill4: 'LLM integration (Mistral, OpenAI, etc.), prompt orchestration and deployments',
    cvSkill5: 'Model fine-tuning (Llama, QLoRA, LoRA) and image generation (Stable Diffusion)',
    cvSkill6: 'Practical DevOps: Vercel, Cloudflare, GitHub, CI/CD',
    
    cvProjects: 'Projects',
    cvTechStack: 'Tech Stack',
    cvFrontendMobile: 'Frontend & Mobile',
    cvBackendDatabase: 'Backend & Database',
    cvAuthPayments: 'Auth & Payments',
    cvAIML: 'AI & Machine Learning',
    cvDevOpsTools: 'DevOps & Tools',
    
    cvEducation: 'Education',
    cvEducationDegree: 'Business Administration and Management Degree (BBA)',
    cvEducationYear: 'Currently 3rd year',
    cvEducationDescription: 'Fast learning and technical autonomy',
    
    cvLanguages: 'Languages',
    cvLanguageSpanish: 'Spanish',
    cvLanguageEnglish: 'English',
    cvLanguageFrench: 'French',
    cvLanguageLevelNative: 'Native',
    cvLanguageLevelAdvanced: 'Advanced',
    cvLanguageLevelBasic: 'Basic',
    
    cvAvailability: 'Available immediately',
    cvAvailabilityText: 'for collaborations and new opportunities.',
    cvContactCTA: 'Contact →',
    
    // Home page - CV section
    homeCVTitle: 'CV',
    homeCVDescription: 'Experience, tech stack, and education.',
    viewFullCV: 'View full CV →',
    homeCVSummaryTitle: 'Summary',
    homeCVSummaryText1: 'Full-stack developer focused on Next.js/TypeScript and Python, shipping user-centric products end-to-end (web + mobile with Expo) with solid backends (Supabase/PostgreSQL/Node). Strong with APIs—designing and integrating REST/GraphQL/streaming endpoints and third-party SDKs (auth, payments, observability). Practical AI integrations (Mistral, OpenAI, Llama): prompt orchestration, evals, and lightweight RAG; shipped products with subscriptions and CI/CD. Immediate availability; open to relocation and a sabbatical year for the right project.',
    homeCVSummaryText2: '',
    
    // About me section
    aboutMeTitle: 'About me',
    aboutMeText: 'I\'m Francisco and I like building useful things fast with a love for UX. I enjoy 0→1, measuring before opining, and shipping in short cycles. When I\'m not coding, I experiment with LLMs, evals, and small automations that save me time. I prefer clear code, CI that doesn\'t get in the way, and products people want to use. I\'m motivated by turning ideas into products in days, not months. If there\'s data, we do science; if not, I prototype and measure. Low ego, high delivery. I believe the world needs to know about AI, as in my environment and university classes I\'m one of the few who understands its importance and especially sees the trajectory and where AI is heading with its future capabilities.',
    
    // Availability
    availabilityTitle: 'Availability',
    availabilityText: 'Immediate start available on-site EU (4–6 months internship). Open to full-time conversion after internship.',
    availableForCollaborations: 'Available immediately for collaborations →',
  },
  
  fr: {
    // Navigation & General
    backToProjects: 'Retour aux projets',
    backToHome: 'Retour à l\'accueil',
    downloadPDF: 'Télécharger PDF',
    viewOnAppStore: 'Voir sur l\'App Store',
    viewWeb: 'Voir le site',
    viewCode: 'Voir le code',
    live: 'Live',
    development: 'En Développement',
    dev: 'Dev',
    archived: 'Archivé',
    home: 'Accueil',
    projects: 'Projets',
    cv: 'CV',
    
    // Home page
    homeTitle: 'Francisco De Haro',
    homeSubtitle: 'Spécialiste de l’IA appliquée et de l’évaluation des LLM.',
    homeDescription: 'J’intègre des LLM dans des cas d’usage réels (éducation, économie, produit), je transforme des idées en démos en quelques jours et je publie des résultats comparables (coût/latence/précision). Mon objectif est de faire connaître l’IA et d’anticiper ses effets sur la base de preuves et de pragmatisme. Je travaille en indépendant de bout en bout ; cycles courts, livraison continue et focus sur les résultats. 430+ contributions GitHub sur les 12 derniers mois (majoritairement privées).',
    featuredProjects: 'Projets en vedette',
    viewAllProjects: 'Voir tous les projets',
    contact: 'Contact',
    
    // Projects page
    allProjects: 'Tous les projets',
    projectsDescription: 'Une collection de projets sur lesquels j\'ai travaillé, des applications web aux intégrations IA.',
    
    // Project detail
    aboutProject: 'À propos du projet',
    technologies: 'Technologies',
    features: 'Fonctionnalités',
    technicalChallenges: 'Défis techniques',
    learnings: 'Apprentissages',
    screenshots: 'Captures d\'écran',
    view: 'Vue',
    training: 'Entraînement',
    results: 'Résultats',
    
    // CV page
    cvTitle: 'Francisco De Haro',
    cvSubtitle: 'Développeur Full Stack · Next.js · IA & ML',
    cvContact: 'Contact',
    cvEmail: 'Email',
    cvLocation: 'Localisation',
    cvLocationValue: 'Espagne',
    cvPortfolio: 'Portfolio',
    
    cvProfile: 'Profil',
    cvProfileText: 'Développeur full-stack orienté résultats. Expérience 0→1, cycles rapides et produits end-to-end. Spécialisé en Next.js, React Native et IA. J\'ai publié Repai Trainer sur App Store avec abonnements, backend Supabase et intégration de LLMs. Je préfère le code clair, l\'expérimentation rapide et les produits que les gens veulent utiliser.',
    
    cvSummary: 'Résumé',
    cvSummaryText1: 'Développeur full-stack axé sur Next.js/TypeScript et Python, livrant des produits de bout en bout centrés UX (web + mobile avec Expo) avec des backends robustes (Supabase/PostgreSQL/Node). Solide sur les APIs : conception et intégration REST/GraphQL/streaming et SDK tiers (authentification, paiements, observabilité). Intégrations IA pragmatiques (Mistral, OpenAI, Llama) : orchestration de prompts, évaluations et RAG léger ; produits expédiés avec abonnements et CI/CD. Disponibilité immédiate ; ouvert à la relocalisation et à une année sabbatique selon le projet.',
    cvSummaryText2: '',
    
    cvWhatIBring: 'Ce que j\'apporte',
    cvSkill1: 'Conception et développement frontend (Next.js/React) et mobile (Expo)',
    cvSkill2: 'APIs et backend en Node/TypeScript (Supabase, PostgreSQL, Neon)',
    cvSkill3: 'Authentification et paiements (Clerk, Stripe, RevenueCat, abonnements)',
    cvSkill4: 'Intégration de LLMs (Mistral, OpenAI, etc.), orchestration de prompts et déploiements',
    cvSkill5: 'Fine-tuning de modèles (Llama, QLoRA, LoRA) et génération d\'images (Stable Diffusion)',
    cvSkill6: 'DevOps pratique : Vercel, Cloudflare, GitHub, CI/CD',
    
    cvProjects: 'Projets',
    cvTechStack: 'Stack Technologique',
    cvFrontendMobile: 'Frontend & Mobile',
    cvBackendDatabase: 'Backend & Base de données',
    cvAuthPayments: 'Auth & Paiements',
    cvAIML: 'IA & Machine Learning',
    cvDevOpsTools: 'DevOps & Outils',
    
    cvEducation: 'Éducation',
    cvEducationDegree: 'Licence en Administration et Direction d\'Entreprises',
    cvEducationYear: 'Actuellement en 3ème année',
    cvEducationDescription: 'Apprentissage rapide et autonomie technique',
    
    cvLanguages: 'Langues',
    cvLanguageSpanish: 'Espagnol',
    cvLanguageEnglish: 'Anglais',
    cvLanguageFrench: 'Français',
    cvLanguageLevelNative: 'Natif',
    cvLanguageLevelAdvanced: 'Avancé',
    cvLanguageLevelBasic: 'Basique',
    
    cvAvailability: 'Disponible immédiatement',
    cvAvailabilityText: 'pour des collaborations et de nouvelles opportunités.',
    cvContactCTA: 'Contact →',
    
    // Home page - CV section
    homeCVTitle: 'CV',
    homeCVDescription: 'Expérience, stack technique et formation.',
    viewFullCV: 'Voir le CV complet →',
    homeCVSummaryTitle: 'Résumé',
    homeCVSummaryText1: 'Développeur full-stack axé sur Next.js/TypeScript et Python, livrant des produits de bout en bout centrés UX (web + mobile avec Expo) avec des backends robustes (Supabase/PostgreSQL/Node). Solide sur les APIs : conception et intégration REST/GraphQL/streaming et SDK tiers (authentification, paiements, observabilité). Intégrations IA pragmatiques (Mistral, OpenAI, Llama) : orchestration de prompts, évaluations et RAG léger ; produits expédiés avec abonnements et CI/CD. Disponibilité immédiate ; ouvert à la relocalisation et à une année sabbatique selon le projet.',
    homeCVSummaryText2: '',
    
    // About me section
    aboutMeTitle: 'À propos de moi',
    aboutMeText: 'Je m\'appelle Francisco et j\'aime construire des choses utiles rapidement avec un amour pour l\'UX. J\'apprécie le 0→1, mesurer avant d\'opiner, et livrer en cycles courts. Quand je ne code pas, j\'expérimente avec les LLMs, les evals, et les petites automatisations qui me font gagner du temps. Je préfère le code clair, le CI qui ne gêne pas, et les produits que les gens veulent utiliser. Je suis motivé par la conversion d\'idées en produits en jours, pas en mois. S\'il y a des données, nous faisons de la science ; sinon, je prototypage et mesure. Faible ego, haute livraison. Je crois que le monde a besoin de connaître l\'IA, car dans mon environnement et mes cours universitaires, je suis l\'un des rares à comprendre son importance et surtout à voir la trajectoire et où l\'IA se dirige avec ses capacités futures.',
    
    // Availability
    availabilityTitle: 'Disponibilité',
    availabilityText: 'Démarrage immédiat disponible sur site UE (stage 4–6 mois). Ouvert à une conversion à temps plein après le stage.',
    availableForCollaborations: 'Disponible immédiatement pour des collaborations →',
  },
} as const;

export type TranslationKey = keyof typeof translations.es;

