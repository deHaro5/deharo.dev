import { Language } from './translations';

export type ProjectTranslations = {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  disclaimer?: string;
};

export const projectTranslations: Record<string, Record<Language, ProjectTranslations>> = {
  'repai-trainer': {
    es: {
      title: 'Repai Trainer',
      description: 'Desarrollo de App móvil iOS (Fullstack)',
      longDescription: 'Repai Trainer es una aplicación móvil de entrenamiento personalizado con inteligencia artificial, disponible en el App Store. Desarrollada completamente por mí desde cero, combina un frontend nativo en iOS con Expo/React Native, un backend robusto en Supabase, sistema de suscripciones con RevenueCat, y generación de entrenamientos usando GPT-5. La app permite a los usuarios crear rutinas personalizadas, seguir su progreso, y recibir recomendaciones inteligentes de ejercicios basadas en sus objetivos y rendimiento.',
      features: [
        'Generación de entrenamientos personalizados con GPT-5',
        'Sistema de suscripciones (mensual, anual, lifetime) con RevenueCat',
        'Base de datos de ejercicios integrada con Gymvisual',
        'Seguimiento de progreso y estadísticas',
        'Gestión completa de usuarios con Supabase Auth',
        'Interfaz nativa iOS con animaciones fluidas',
        'Sincronización en tiempo real',
        'Gestión de pagos y suscripciones en App Store Connect'
      ],
      challenges: [
        'Integración completa del flujo de suscripciones iOS con RevenueCat',
        'Optimización de prompts para GPT-5 para generar entrenamientos coherentes',
        'Gestión del estado de sincronización entre app y backend',
        'Manejo de diferentes estados de suscripción y trials',
        'Publicación y gestión en App Store (revisiones, actualizaciones, políticas)'
      ],
      learnings: [
        'Desarrollo completo de una app móvil desde cero hasta producción',
        'Arquitectura fullstack con React Native y Supabase',
        'Implementación de sistemas de pago en iOS',
        'Integración de APIs de IA en apps móviles',
        'Gestión del ciclo de vida de un producto en App Store'
      ],
      disclaimer: 'Proyecto propio actualmente en pausa de desarrollo.'
    },
    en: {
      title: 'Repai Trainer',
      description: 'iOS Mobile App Development (Fullstack)',
      longDescription: 'Repai Trainer is a personalized AI-powered training mobile application, available on the App Store. Fully developed by me from scratch, it combines a native iOS frontend with Expo/React Native, a robust Supabase backend, subscription system with RevenueCat, and workout generation using GPT-5. The app allows users to create personalized routines, track their progress, and receive intelligent exercise recommendations based on their goals and performance.',
      features: [
        'Personalized workout generation with GPT-5',
        'Subscription system (monthly, annual, lifetime) with RevenueCat',
        'Exercise database integrated with Gymvisual',
        'Progress tracking and statistics',
        'Complete user management with Supabase Auth',
        'Native iOS interface with fluid animations',
        'Real-time synchronization',
        'Payment and subscription management in App Store Connect'
      ],
      challenges: [
        'Complete integration of iOS subscription flow with RevenueCat',
        'Prompt optimization for GPT-5 to generate coherent workouts',
        'Synchronization state management between app and backend',
        'Handling different subscription and trial states',
        'App Store publication and management (reviews, updates, policies)'
      ],
      learnings: [
        'Complete mobile app development from scratch to production',
        'Fullstack architecture with React Native and Supabase',
        'Implementation of payment systems on iOS',
        'AI API integration in mobile apps',
        'Product lifecycle management on App Store'
      ],
      disclaimer: 'Personal project currently on development pause.'
    },
    fr: {
      title: 'Repai Trainer',
      description: 'Développement d\'application mobile iOS (Fullstack)',
      longDescription: 'Repai Trainer est une application mobile d\'entraînement personnalisé avec intelligence artificielle, disponible sur l\'App Store. Entièrement développée par moi depuis zéro, elle combine un frontend natif iOS avec Expo/React Native, un backend robuste sur Supabase, un système d\'abonnements avec RevenueCat, et une génération d\'entraînements utilisant GPT-5. L\'application permet aux utilisateurs de créer des routines personnalisées, suivre leur progression, et recevoir des recommandations intelligentes d\'exercices basées sur leurs objectifs et performances.',
      features: [
        'Génération d\'entraînements personnalisés avec GPT-5',
        'Système d\'abonnements (mensuel, annuel, lifetime) avec RevenueCat',
        'Base de données d\'exercices intégrée avec Gymvisual',
        'Suivi de progression et statistiques',
        'Gestion complète des utilisateurs avec Supabase Auth',
        'Interface iOS native avec animations fluides',
        'Synchronisation en temps réel',
        'Gestion des paiements et abonnements dans App Store Connect'
      ],
      challenges: [
        'Intégration complète du flux d\'abonnements iOS avec RevenueCat',
        'Optimisation des prompts pour GPT-5 pour générer des entraînements cohérents',
        'Gestion de l\'état de synchronisation entre l\'app et le backend',
        'Gestion de différents états d\'abonnement et d\'essais',
        'Publication et gestion sur l\'App Store (révisions, mises à jour, politiques)'
      ],
      learnings: [
        'Développement complet d\'une app mobile de zéro à production',
        'Architecture fullstack avec React Native et Supabase',
        'Implémentation de systèmes de paiement sur iOS',
        'Intégration d\'APIs IA dans des apps mobiles',
        'Gestion du cycle de vie d\'un produit sur l\'App Store'
      ],
      disclaimer: 'Projet personnel actuellement en pause de développement.'
    }
  },
  'mistral-chat': {
    es: {
      title: 'Demo Mistral Chat',
      description: 'Interfaz de chat con Mistral AI y streaming',
      longDescription: 'Una aplicación web de chat moderna que demuestra las capacidades de Mistral AI. Construida con Next.js 14 y desplegada en Vercel Edge, implementa streaming de respuestas en tiempo real para una experiencia de usuario fluida y responsiva. El proyecto explora las mejores prácticas de integración de LLMs en aplicaciones web, incluyendo manejo de contexto, optimización de prompts, y gestión eficiente del estado de conversación.',
      features: [
        'Streaming de respuestas en tiempo real',
        'Interfaz de chat moderna y responsiva',
        'Manejo de contexto de conversación',
        'Edge Functions para latencia mínima',
        'Optimización de prompts para mejores respuestas',
        'Gestión de estado con React hooks',
        'Diseño dark mode minimalista',
        'Despliegue automático con Vercel'
      ],
      challenges: [
        'Implementación de streaming SSE (Server-Sent Events)',
        'Manejo correcto del contexto entre múltiples mensajes',
        'Optimización del rendimiento en Edge Runtime',
        'Gestión de errores y reconexión automática',
        'Balance entre latencia y calidad de respuestas'
      ],
      learnings: [
        'Integración de LLMs con APIs modernas',
        'Arquitectura serverless con Edge Functions',
        'Patrones de streaming en aplicaciones web',
        'Optimización de prompts para LLMs',
        'Despliegue y monitoreo de apps en Vercel Edge'
      ]
    },
    en: {
      title: 'Demo Mistral Chat',
      description: 'Chat interface with Mistral AI and streaming',
      longDescription: 'A modern chat web application that demonstrates Mistral AI capabilities. Built with Next.js 14 and deployed on Vercel Edge, it implements real-time response streaming for a fluid and responsive user experience. The project explores best practices for integrating LLMs into web applications, including context handling, prompt optimization, and efficient conversation state management.',
      features: [
        'Real-time response streaming',
        'Modern and responsive chat interface',
        'Conversation context handling',
        'Edge Functions for minimal latency',
        'Prompt optimization for better responses',
        'State management with React hooks',
        'Minimalist dark mode design',
        'Automatic deployment with Vercel'
      ],
      challenges: [
        'Implementation of SSE (Server-Sent Events) streaming',
        'Correct context handling between multiple messages',
        'Performance optimization in Edge Runtime',
        'Error handling and automatic reconnection',
        'Balance between latency and response quality'
      ],
      learnings: [
        'LLM integration with modern APIs',
        'Serverless architecture with Edge Functions',
        'Streaming patterns in web applications',
        'Prompt optimization for LLMs',
        'App deployment and monitoring on Vercel Edge'
      ]
    },
    fr: {
      title: 'Demo Mistral Chat',
      description: 'Interface de chat avec Mistral AI et streaming',
      longDescription: 'Une application web de chat moderne qui démontre les capacités de Mistral AI. Construite avec Next.js 14 et déployée sur Vercel Edge, elle implémente le streaming de réponses en temps réel pour une expérience utilisateur fluide et réactive. Le projet explore les meilleures pratiques d\'intégration de LLMs dans les applications web, incluant la gestion du contexte, l\'optimisation des prompts, et la gestion efficace de l\'état de conversation.',
      features: [
        'Streaming de réponses en temps réel',
        'Interface de chat moderne et réactive',
        'Gestion du contexte de conversation',
        'Edge Functions pour latence minimale',
        'Optimisation des prompts pour de meilleures réponses',
        'Gestion d\'état avec React hooks',
        'Design dark mode minimaliste',
        'Déploiement automatique avec Vercel'
      ],
      challenges: [
        'Implémentation du streaming SSE (Server-Sent Events)',
        'Gestion correcte du contexte entre plusieurs messages',
        'Optimisation des performances dans Edge Runtime',
        'Gestion des erreurs et reconnexion automatique',
        'Équilibre entre latence et qualité des réponses'
      ],
      learnings: [
        'Intégration de LLMs avec des APIs modernes',
        'Architecture serverless avec Edge Functions',
        'Patterns de streaming dans les applications web',
        'Optimisation de prompts pour LLMs',
        'Déploiement et monitoring d\'apps sur Vercel Edge'
      ]
    }
  },
  'testum': {
    es: {
      title: 'Testum',
      description: 'Plataforma de exámenes tipo test con IA',
      longDescription: 'Testum es una plataforma web desarrollada con Next.js que permite crear y realizar exámenes tipo test de forma rápida y efectiva. Los usuarios pueden subir sus propios exámenes y resolverlos con una experiencia UX altamente pulida. El proyecto alcanzó +1600 preguntas para resolver y +21400 respuestas acumuladas, difundido únicamente por boca a boca entre estudiantes del grado de ADE de mi universidad. Incluye un chat de IA integrado con OpenAI para ayudar a los usuarios mientras responden, autenticación con Supabase, y base de datos PostgreSQL para almacenar toda la información.',
      features: [
        'Creación y gestión de exámenes tipo test personalizados',
        'Chat de IA integrado con OpenAI para asistencia mientras respondes',
        'Sistema de usuarios con Supabase Auth',
        'Base de datos PostgreSQL para almacenar exámenes y respuestas',
        'Edge Functions para rendimiento óptimo',
        '+1600 preguntas disponibles para resolver',
        '+21400 respuestas acumuladas por usuarios',
        'Controles UX altamente pulidos y optimizados',
        'Interfaz responsiva y moderna',
        'Sistema de estadísticas y progreso'
      ],
      challenges: [
        'Diseñar una experiencia UX fluida para resolver exámenes rápidamente',
        'Integración de IA para asistencia contextual durante los exámenes',
        'Optimización de consultas PostgreSQL para gran volumen de respuestas',
        'Gestión de estado complejo para tracking de progreso',
        'Escalabilidad para múltiples usuarios simultáneos'
      ],
      learnings: [
        'Arquitectura de aplicaciones web de alto rendimiento',
        'Integración de OpenAI en contextos educativos',
        'Diseño UX para plataformas de evaluación',
        'Optimización de bases de datos con PostgreSQL',
        'Crecimiento orgánico de producto (boca a boca)'
      ],
      disclaimer: 'Proyecto personal desarrollado para estudiantes de ADE de mi universidad.'
    },
    en: {
      title: 'Testum',
      description: 'AI-powered test exam platform',
      longDescription: 'Testum is a web platform developed with Next.js that allows creating and taking multiple-choice exams quickly and effectively. Users can upload their own exams and solve them with a highly polished UX experience. The project reached +1600 questions to solve and +21400 accumulated answers, spread solely by word of mouth among students of the Business Administration degree at my university. It includes an integrated AI chat with OpenAI to help users while answering, authentication with Supabase, and PostgreSQL database to store all information.',
      features: [
        'Creation and management of personalized multiple-choice exams',
        'Integrated AI chat with OpenAI for assistance while answering',
        'User system with Supabase Auth',
        'PostgreSQL database to store exams and answers',
        'Edge Functions for optimal performance',
        '+1600 questions available to solve',
        '+21400 answers accumulated by users',
        'Highly polished and optimized UX controls',
        'Responsive and modern interface',
        'Statistics and progress system'
      ],
      challenges: [
        'Designing a fluid UX experience for solving exams quickly',
        'AI integration for contextual assistance during exams',
        'PostgreSQL query optimization for large volume of answers',
        'Complex state management for progress tracking',
        'Scalability for multiple simultaneous users'
      ],
      learnings: [
        'High-performance web application architecture',
        'OpenAI integration in educational contexts',
        'UX design for evaluation platforms',
        'Database optimization with PostgreSQL',
        'Organic product growth (word of mouth)'
      ],
      disclaimer: 'Personal project developed for Business Administration students at my university.'
    },
    fr: {
      title: 'Testum',
      description: 'Plateforme d\'examens type test avec IA',
      longDescription: 'Testum est une plateforme web développée avec Next.js qui permet de créer et de réaliser des examens type test rapidement et efficacement. Les utilisateurs peuvent télécharger leurs propres examens et les résoudre avec une expérience UX hautement polie. Le projet a atteint +1600 questions à résoudre et +21400 réponses accumulées, diffusé uniquement par bouche à oreille parmi les étudiants en Administration des Affaires de mon université. Il comprend un chat IA intégré avec OpenAI pour aider les utilisateurs pendant qu\'ils répondent, une authentification avec Supabase, et une base de données PostgreSQL pour stocker toutes les informations.',
      features: [
        'Création et gestion d\'examens type test personnalisés',
        'Chat IA intégré avec OpenAI pour assistance pendant les réponses',
        'Système d\'utilisateurs avec Supabase Auth',
        'Base de données PostgreSQL pour stocker examens et réponses',
        'Edge Functions pour performance optimale',
        '+1600 questions disponibles à résoudre',
        '+21400 réponses accumulées par les utilisateurs',
        'Contrôles UX hautement polis et optimisés',
        'Interface responsive et moderne',
        'Système de statistiques et progression'
      ],
      challenges: [
        'Concevoir une expérience UX fluide pour résoudre les examens rapidement',
        'Intégration de l\'IA pour assistance contextuelle pendant les examens',
        'Optimisation des requêtes PostgreSQL pour grand volume de réponses',
        'Gestion d\'état complexe pour suivi de progression',
        'Scalabilité pour plusieurs utilisateurs simultanés'
      ],
      learnings: [
        'Architecture d\'applications web haute performance',
        'Intégration d\'OpenAI dans des contextes éducatifs',
        'Design UX pour plateformes d\'évaluation',
        'Optimisation de bases de données avec PostgreSQL',
        'Croissance organique de produit (bouche à oreille)'
      ],
      disclaimer: 'Projet personnel développé pour les étudiants en ADE de mon université.'
    }
  },
  'llama-lyrics-finetuning': {
    es: {
      title: 'Fine-tuning Llama para Letras en Español',
      description: 'Ajuste fino de modelos Llama 3.3 y 3.1 para generación de letras musicales',
      longDescription: 'Proyecto de fine-tuning de modelos Llama (3.3 1B/3B y 3.1 8B) para producir letras de canciones coherentes en español con estructura, rima y tema consistentes. Optimizado para equilibrar calidad y coste mediante técnicas avanzadas como QLoRA 4-bit y Unsloth. El proyecto incluye un pipeline completo de scraping propio desarrollado con Playwright para crear un dataset robusto de +10.000 ejemplos prompt-completion, sistema de tokenización con masking inteligente, y arquitectura de entrenamiento eficiente con A100 que logra resultados de alta calidad con ~24.3M parámetros entrenables.',
      features: [
        'Fine-tuning de Llama 3.3 (1B/3B) y 3.1 (8B) con QLoRA 4-bit',
        'Dataset propio de +10.000 ejemplos prompt-completion',
        'Pipeline de scraping autónomo con Playwright para captura y parseo',
        'Tokenización inteligente con masking (labels=-100 en prompts)',
        'Entrenamiento optimizado con Unsloth (~2× más rápido)',
        'Configuración A100: 5 epochs, 3.200 steps, batch size efectivo 8',
        '~24.3M parámetros entrenables con adaptadores LoRA (r=16)',
        'Gradient checkpointing y optimizaciones de memoria',
        'Evaluaciones de adherencia temática, repetición y longitud',
        'Balance optimizado entre calidad y coste de inferencia'
      ],
      challenges: [
        'Desarrollo de pipeline robusto de scraping y normalización de texto',
        'Implementación de masking correcto para entrenamiento eficiente',
        'Optimización de hiperparámetros (rank, lr, batch, max_seq_length)',
        'Manejo de limitaciones de VRAM con técnicas de cuantización',
        'Balance entre calidad generativa y coste computacional',
        'Evaluación cualitativa de coherencia semántica y estructural'
      ],
      learnings: [
        'Técnicas avanzadas de fine-tuning con recursos limitados',
        'Arquitectura QLoRA y optimizaciones de memoria (4-bit)',
        'Integración de Unsloth para aceleración de entrenamiento',
        'Diseño de pipelines de datos para generación de texto',
        'Evaluación y ajuste de modelos generativos en español',
        'Trade-offs entre tamaño de modelo, calidad y latencia'
      ],
      disclaimer: 'Proyecto personal de experimentación con fine-tuning de LLMs. Entrenamiento realizado con GPU A100.'
    },
    en: {
      title: 'Llama Fine-tuning for Spanish Lyrics',
      description: 'Fine-tuning Llama 3.3 and 3.1 models for music lyrics generation',
      longDescription: 'Fine-tuning project of Llama models (3.3 1B/3B and 3.1 8B) to produce coherent Spanish song lyrics with consistent structure, rhyme, and theme. Optimized to balance quality and cost through advanced techniques like QLoRA 4-bit and Unsloth. The project includes a complete custom scraping pipeline developed with Playwright to create a robust dataset of +10,000 prompt-completion examples, intelligent tokenization system with masking, and efficient training architecture with A100 achieving high-quality results with ~24.3M trainable parameters.',
      features: [
        'Fine-tuning Llama 3.3 (1B/3B) and 3.1 (8B) with QLoRA 4-bit',
        'Custom dataset of +10,000 prompt-completion examples',
        'Autonomous scraping pipeline with Playwright for capture and parsing',
        'Intelligent tokenization with masking (labels=-100 in prompts)',
        'Optimized training with Unsloth (~2× faster)',
        'A100 configuration: 5 epochs, 3,200 steps, effective batch size 8',
        '~24.3M trainable parameters with LoRA adapters (r=16)',
        'Gradient checkpointing and memory optimizations',
        'Thematic adherence, repetition, and length evaluations',
        'Optimized balance between quality and inference cost'
      ],
      challenges: [
        'Development of robust scraping and text normalization pipeline',
        'Implementation of correct masking for efficient training',
        'Hyperparameter optimization (rank, lr, batch, max_seq_length)',
        'Handling VRAM limitations with quantization techniques',
        'Balance between generative quality and computational cost',
        'Qualitative evaluation of semantic and structural coherence'
      ],
      learnings: [
        'Advanced fine-tuning techniques with limited resources',
        'QLoRA architecture and memory optimizations (4-bit)',
        'Unsloth integration for training acceleration',
        'Data pipeline design for text generation',
        'Evaluation and tuning of Spanish generative models',
        'Trade-offs between model size, quality, and latency'
      ],
      disclaimer: 'Personal experimentation project with LLM fine-tuning. Training performed with A100 GPU.'
    },
    fr: {
      title: 'Fine-tuning Llama pour Paroles en Espagnol',
      description: 'Ajustement fin de modèles Llama 3.3 et 3.1 pour génération de paroles musicales',
      longDescription: 'Projet de fine-tuning de modèles Llama (3.3 1B/3B et 3.1 8B) pour produire des paroles de chansons cohérentes en espagnol avec structure, rime et thème cohérents. Optimisé pour équilibrer qualité et coût grâce à des techniques avancées comme QLoRA 4-bit et Unsloth. Le projet comprend un pipeline complet de scraping personnalisé développé avec Playwright pour créer un dataset robuste de +10.000 exemples prompt-completion, système de tokenisation avec masking intelligent, et architecture d\'entraînement efficace avec A100 atteignant des résultats de haute qualité avec ~24.3M paramètres entraînables.',
      features: [
        'Fine-tuning de Llama 3.3 (1B/3B) et 3.1 (8B) avec QLoRA 4-bit',
        'Dataset personnalisé de +10.000 exemples prompt-completion',
        'Pipeline de scraping autonome avec Playwright pour capture et parsing',
        'Tokenisation intelligente avec masking (labels=-100 dans prompts)',
        'Entraînement optimisé avec Unsloth (~2× plus rapide)',
        'Configuration A100: 5 epochs, 3.200 steps, taille de batch effective 8',
        '~24.3M paramètres entraînables avec adaptateurs LoRA (r=16)',
        'Gradient checkpointing et optimisations mémoire',
        'Évaluations d\'adhérence thématique, répétition et longueur',
        'Équilibre optimisé entre qualité et coût d\'inférence'
      ],
      challenges: [
        'Développement de pipeline robuste de scraping et normalisation de texte',
        'Implémentation de masking correct pour entraînement efficace',
        'Optimisation des hyperparamètres (rank, lr, batch, max_seq_length)',
        'Gestion des limitations VRAM avec techniques de quantization',
        'Équilibre entre qualité générative et coût computationnel',
        'Évaluation qualitative de cohérence sémantique et structurelle'
      ],
      learnings: [
        'Techniques avancées de fine-tuning avec ressources limitées',
        'Architecture QLoRA et optimisations mémoire (4-bit)',
        'Intégration d\'Unsloth pour accélération d\'entraînement',
        'Design de pipelines de données pour génération de texte',
        'Évaluation et ajustement de modèles génératifs en espagnol',
        'Trade-offs entre taille de modèle, qualité et latence'
      ],
      disclaimer: 'Projet personnel d\'expérimentation avec fine-tuning de LLMs. Entraînement réalisé avec GPU A100.'
    }
  },
  'lora-black-stories': {
    es: {
      title: 'LoRA Black Stories - Generación de Imágenes',
      description: 'Entrenamiento de LoRA para replicar estética de Black Stories',
      longDescription: 'Proyecto de entrenamiento de un adaptador LoRA para replicar la estética visual característica de "Black Stories" y generar nuevas historias/escenas con consistencia visual. El proyecto incluye curación meticulosa de dataset, sistema de autocaptioning para robustecer el estilo, definición de trigger words para control preciso del estilo mediante prompts, y entrenamiento con resoluciones múltiples (512-1024) para mejorar la generalización. Incluye un riguroso proceso de QA estética revisando composición, siluetas, contraste, contornos y coherencia entre muestras para garantizar una estética estable y reproducible. Entrenado sobre los modelos FLUX de Black Forest Labs (flux-schnell y flux-dev).',
      features: [
        'Entrenamiento de adaptador LoRA sobre FLUX (Black Forest Labs)',
        'Modelos base: black-forest-labs/flux-schnell y flux-dev',
        'Dataset curado con autocaptioning para consistencia',
        'Sistema de trigger words ("TOK") para control por prompt',
        'Entrenamiento multi-resolución (512-1024px)',
        'QA estética: composición, siluetas, contraste y contornos',
        'Pipeline de inferencia en servicios gestionados (Replicate)',
        'Integración con ComfyUI/Automatic1111 para testing',
        'Generación condicionable y reproducible',
        'Estilo visual estable sin depender de activos originales'
      ],
      challenges: [
        'Curación de dataset representativo del estilo objetivo',
        'Desarrollo de sistema de autocaptioning coherente',
        'Balance entre fidelidad al estilo y capacidad generativa',
        'Optimización de trigger words para control preciso',
        'QA exhaustivo de consistencia visual entre generaciones',
        'Generalización a diferentes resoluciones y composiciones'
      ],
      learnings: [
        'Arquitectura y entrenamiento de adaptadores LoRA sobre FLUX',
        'Técnicas de fine-tuning de modelos de difusión (Black Forest Labs)',
        'Curación de datasets para control de estilo visual',
        'Integración de pipelines de generación de imágenes',
        'Evaluación cualitativa de consistencia estética',
        'Despliegue en Replicate para inferencia gestionada'
      ],
      disclaimer: 'Proyecto personal de uso propio para experimentación con generación de imágenes y control de estilo.'
    },
    en: {
      title: 'LoRA Black Stories - Image Generation',
      description: 'LoRA training to replicate Black Stories aesthetic',
      longDescription: 'LoRA adapter training project to replicate the characteristic visual aesthetic of "Black Stories" and generate new stories/scenes with visual consistency. The project includes meticulous dataset curation, autocaptioning system to strengthen style, trigger word definition for precise style control through prompts, and multi-resolution training (512-1024) to improve generalization. It includes a rigorous aesthetic QA process reviewing composition, silhouettes, contrast, contours, and coherence between samples to ensure stable and reproducible aesthetics. Trained on Black Forest Labs FLUX models (flux-schnell and flux-dev).',
      features: [
        'LoRA adapter training on FLUX (Black Forest Labs)',
        'Base models: black-forest-labs/flux-schnell and flux-dev',
        'Curated dataset with autocaptioning for consistency',
        'Trigger word system ("TOK") for prompt-based control',
        'Multi-resolution training (512-1024px)',
        'Aesthetic QA: composition, silhouettes, contrast, and contours',
        'Inference pipeline on managed services (Replicate)',
        'Integration with ComfyUI/Automatic1111 for testing',
        'Conditionable and reproducible generation',
        'Stable visual style without depending on original assets'
      ],
      challenges: [
        'Dataset curation representative of target style',
        'Development of coherent autocaptioning system',
        'Balance between style fidelity and generative capability',
        'Trigger word optimization for precise control',
        'Exhaustive QA of visual consistency between generations',
        'Generalization to different resolutions and compositions'
      ],
      learnings: [
        'LoRA adapter architecture and training on FLUX',
        'Diffusion model fine-tuning techniques (Black Forest Labs)',
        'Dataset curation for visual style control',
        'Image generation pipeline integration',
        'Qualitative evaluation of aesthetic consistency',
        'Deployment on Replicate for managed inference'
      ],
      disclaimer: 'Personal project for own use in image generation and style control experimentation.'
    },
    fr: {
      title: 'LoRA Black Stories - Génération d\'Images',
      description: 'Entraînement LoRA pour répliquer l\'esthétique Black Stories',
      longDescription: 'Projet d\'entraînement d\'un adaptateur LoRA pour répliquer l\'esthétique visuelle caractéristique de "Black Stories" et générer de nouvelles histoires/scènes avec cohérence visuelle. Le projet comprend une curation méticuleuse de dataset, un système d\'autocaptioning pour renforcer le style, une définition de trigger words pour un contrôle précis du style via prompts, et un entraînement multi-résolution (512-1024) pour améliorer la généralisation. Il inclut un processus rigoureux de QA esthétique révisant composition, silhouettes, contraste, contours et cohérence entre échantillons pour garantir une esthétique stable et reproductible. Entraîné sur les modèles FLUX de Black Forest Labs (flux-schnell et flux-dev).',
      features: [
        'Entraînement d\'adaptateur LoRA sur FLUX (Black Forest Labs)',
        'Modèles de base: black-forest-labs/flux-schnell et flux-dev',
        'Dataset curé avec autocaptioning pour cohérence',
        'Système de trigger words ("TOK") pour contrôle par prompt',
        'Entraînement multi-résolution (512-1024px)',
        'QA esthétique: composition, silhouettes, contraste et contours',
        'Pipeline d\'inférence sur services gérés (Replicate)',
        'Intégration avec ComfyUI/Automatic1111 pour testing',
        'Génération conditionnable et reproductible',
        'Style visuel stable sans dépendre d\'actifs originaux'
      ],
      challenges: [
        'Curation de dataset représentatif du style cible',
        'Développement de système d\'autocaptioning cohérent',
        'Équilibre entre fidélité au style et capacité générative',
        'Optimisation de trigger words pour contrôle précis',
        'QA exhaustif de cohérence visuelle entre générations',
        'Généralisation à différentes résolutions et compositions'
      ],
      learnings: [
        'Architecture et entraînement d\'adaptateurs LoRA sur FLUX',
        'Techniques de fine-tuning de modèles de diffusion (Black Forest Labs)',
        'Curation de datasets pour contrôle du style visuel',
        'Intégration de pipelines de génération d\'images',
        'Évaluation qualitative de cohérence esthétique',
        'Déploiement sur Replicate pour inférence gérée'
      ],
      disclaimer: 'Projet personnel pour usage propre en expérimentation de génération d\'images et contrôle de style.'
    }
  },
  'pre-paper': {
    es: {
      title: '1¢, 1min, 100%: AI en Exámenes Universitarios',
      description: 'Investigación opensource sobre modelos de IA aplicados a exámenes de ADE',
      longDescription: 'Paper de investigación de contribución opensource sobre la aplicación de modelos de inteligencia artificial a los exámenes de Economía y Dirección de Empresas de la Universidad de Murcia, España. Los resultados y metodología son públicos. Los resultados demuestran que modelos avanzados de razonamiento como GPT-5-mini (high reasoning) y grok-4-fast-reasoning alcanzan una precisión del 100% en menos de 1 minuto por examen, con un coste aproximado de 1 céntimo por evaluación. Este estudio incluye el desarrollo de un sistema OCR implementado con la API de Mathpix y programa de conversión a LATEX/Markdown para automatizar el procesamiento de exámenes. Base de datos SQLite con Prisma para gestión eficiente de datos.',
      features: [
        'Investigación opensource: resultados y metodología públicos',
        'Modelos evaluados: DeepSeek-V3.2-Exp, grok-4-fast-reasoning, gpt-5-mini-2025-08-07, gemini-2.5-pro, gemini-flash-latest',
        'Sistema OCR implementado con API de Mathpix para digitalización de exámenes',
        'Programa de conversión automática de exámenes a formato LATEX/Markdown',
        'Base de datos SQLite con Prisma para gestión de exámenes y resultados',
        'Análisis de precisión: 100% de acierto en exámenes tipo test',
        'Optimización de costes: ~1 céntimo por examen completo',
        'Optimización de tiempo: resolución en menos de 1 minuto',
        'Dataset de exámenes de ADE de la Universidad de Murcia',
        'Comparativa de rendimiento entre diferentes arquitecturas de LLM',
        'Análisis de implicaciones para la evaluación académica',
        'Gráficas y visualizaciones de resultados'
      ],
      challenges: [
        'Integración de API de Mathpix para OCR adaptado a formato de exámenes universitarios',
        'Creación de parser personalizado para convertir exámenes a LATEX/Markdown',
        'Recopilación y estructuración del dataset de exámenes',
        'Diseño de prompts efectivos para diferentes tipos de preguntas',
        'Validación de resultados y control de calidad',
        'Análisis comparativo entre múltiples modelos y arquitecturas de IA',
        'Gestión eficiente de datos con SQLite y Prisma',
        'Interpretación de las implicaciones educativas de los resultados'
      ],
      learnings: [
        'Integración de API de Mathpix para OCR en documentos académicos',
        'Desarrollo de pipelines de procesamiento de documentos académicos',
        'Capacidades de modelos de razonamiento avanzado (GPT-5-mini, grok-4)',
        'Relación coste-efectividad en aplicaciones de IA educativa',
        'Diseño de metodología de investigación con IA',
        'Análisis cuantitativo de rendimiento de LLMs',
        'Gestión de bases de datos con SQLite y Prisma ORM',
        'Implicaciones éticas y prácticas de IA en educación'
      ],
      disclaimer: 'Investigación académica en desarrollo. Los resultados son preliminares y están sujetos a revisión.'
    },
    en: {
      title: '1¢, 1min, 100%: AI in University Exams',
      description: 'Opensource research on AI models applied to Business Administration exams',
      longDescription: 'Opensource research paper on the application of artificial intelligence models to Business Administration and Management exams at the University of Murcia, Spain. Results and methodology are publicly available. Results demonstrate that advanced reasoning models like GPT-5-mini (high reasoning) and grok-4-fast-reasoning achieve 100% accuracy in less than 1 minute per exam, with an approximate cost of 1 cent per evaluation. This study includes the development of an OCR system implemented with Mathpix API and LATEX/Markdown conversion program to automate exam processing. SQLite database with Prisma for efficient data management.',
      features: [
        'Opensource research: results and methodology publicly available',
        'Models evaluated: DeepSeek-V3.2-Exp, grok-4-fast-reasoning, gpt-5-mini-2025-08-07, gemini-2.5-pro, gemini-flash-latest',
        'OCR system implemented with Mathpix API for exam digitization',
        'Automatic exam conversion program to LATEX/Markdown format',
        'SQLite database with Prisma for exam and results management',
        'Accuracy analysis: 100% success rate on multiple-choice exams',
        'Cost optimization: ~1 cent per complete exam',
        'Time optimization: resolution in less than 1 minute',
        'Dataset of Business Administration exams from University of Murcia',
        'Performance comparison between different LLM architectures',
        'Analysis of implications for academic assessment',
        'Results graphs and visualizations'
      ],
      challenges: [
        'Integration of Mathpix API for OCR adapted to university exam format',
        'Creation of custom parser to convert exams to LATEX/Markdown',
        'Collection and structuring of exam dataset',
        'Effective prompt design for different types of questions',
        'Results validation and quality control',
        'Comparative analysis between multiple AI models and architectures',
        'Efficient data management with SQLite and Prisma',
        'Interpretation of educational implications of results'
      ],
      learnings: [
        'Integration of Mathpix API for OCR in academic documents',
        'Development of academic document processing pipelines',
        'Capabilities of advanced reasoning models (GPT-5-mini, grok-4)',
        'Cost-effectiveness ratio in educational AI applications',
        'Research methodology design with AI',
        'Quantitative analysis of LLM performance',
        'Database management with SQLite and Prisma ORM',
        'Ethical and practical implications of AI in education'
      ],
      disclaimer: 'Academic research in development. Results are preliminary and subject to review.'
    },
    fr: {
      title: '1¢, 1min, 100%: IA dans les Examens Universitaires',
      description: 'Recherche opensource sur modèles IA appliqués aux examens d\'ADE',
      longDescription: 'Article de recherche opensource sur l\'application de modèles d\'intelligence artificielle aux examens d\'Économie et Direction d\'Entreprises de l\'Université de Murcia, Espagne. Les résultats et la méthodologie sont publics. Les résultats démontrent que les modèles de raisonnement avancés comme GPT-5-mini (high reasoning) et grok-4-fast-reasoning atteignent une précision de 100% en moins de 1 minute par examen, avec un coût approximatif de 1 centime par évaluation. Cette étude inclut le développement d\'un système OCR implémenté avec l\'API Mathpix et d\'un programme de conversion LATEX/Markdown pour automatiser le traitement des examens. Base de données SQLite avec Prisma pour une gestion efficace des données.',
      features: [
        'Recherche opensource: résultats et méthodologie publics',
        'Modèles évalués: DeepSeek-V3.2-Exp, grok-4-fast-reasoning, gpt-5-mini-2025-08-07, gemini-2.5-pro, gemini-flash-latest',
        'Système OCR implémenté avec API Mathpix pour la numérisation d\'examens',
        'Programme de conversion automatique d\'examens en format LATEX/Markdown',
        'Base de données SQLite avec Prisma pour la gestion des examens et résultats',
        'Analyse de précision: 100% de réussite aux examens type test',
        'Optimisation des coûts: ~1 centime par examen complet',
        'Optimisation du temps: résolution en moins de 1 minute',
        'Dataset d\'examens d\'ADE de l\'Université de Murcia',
        'Comparaison de performance entre différentes architectures de LLM',
        'Analyse des implications pour l\'évaluation académique',
        'Graphiques et visualisations des résultats'
      ],
      challenges: [
        'Intégration de l\'API Mathpix pour OCR adapté au format des examens universitaires',
        'Création d\'un parser personnalisé pour convertir les examens en LATEX/Markdown',
        'Collecte et structuration du dataset d\'examens',
        'Design de prompts efficaces pour différents types de questions',
        'Validation des résultats et contrôle qualité',
        'Analyse comparative entre plusieurs modèles et architectures IA',
        'Gestion efficace des données avec SQLite et Prisma',
        'Interprétation des implications éducatives des résultats'
      ],
      learnings: [
        'Intégration de l\'API Mathpix pour OCR dans les documents académiques',
        'Développement de pipelines de traitement de documents académiques',
        'Capacités des modèles de raisonnement avancés (GPT-5-mini, grok-4)',
        'Rapport coût-efficacité dans applications IA éducatives',
        'Design de méthodologie de recherche avec IA',
        'Analyse quantitative de performance des LLMs',
        'Gestion de bases de données avec SQLite et Prisma ORM',
        'Implications éthiques et pratiques de l\'IA en éducation'
      ],
      disclaimer: 'Recherche académique en développement. Les résultats sont préliminaires et sujets à révision.'
    }
  },
  'portfolio': {
    es: {
      title: 'Portfolio Personal',
      description: 'Portfolio minimalista dark mode con Next.js',
      longDescription: 'Este sitio web. Portfolio personal construido con Next.js 14 App Router, TypeScript y Tailwind CSS. Diseño minimalista en dark mode.',
      features: [],
      challenges: [],
      learnings: []
    },
    en: {
      title: 'Personal Portfolio',
      description: 'Minimalist dark mode portfolio with Next.js',
      longDescription: 'This website. Personal portfolio built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Minimalist dark mode design.',
      features: [],
      challenges: [],
      learnings: []
    },
    fr: {
      title: 'Portfolio Personnel',
      description: 'Portfolio minimaliste dark mode avec Next.js',
      longDescription: 'Ce site web. Portfolio personnel construit avec Next.js 14 App Router, TypeScript et Tailwind CSS. Design minimaliste en dark mode.',
      features: [],
      challenges: [],
      learnings: []
    }
  }
};

