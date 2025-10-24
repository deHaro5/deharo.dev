export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
  logo?: string;
  banner?: string;
  images?: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  featured?: boolean;
  status?: 'live' | 'development' | 'archived';
  disclaimer?: string;
};

export const projects: Project[] = [
  {
    slug: 'repai-trainer',
    title: 'Repai Trainer',
    description: 'Desarrollo de App móvil iOS (Fullstack)',
    longDescription: 'Repai Trainer es una aplicación móvil de entrenamiento personalizado con inteligencia artificial, disponible en el App Store. Desarrollada completamente por mí desde cero, combina un frontend nativo en iOS con Expo/React Native, un backend robusto en Supabase, sistema de suscripciones con RevenueCat, y generación de entrenamientos usando GPT-5. La app permite a los usuarios crear rutinas personalizadas, seguir su progreso, y recibir recomendaciones inteligentes de ejercicios basadas en sus objetivos y rendimiento.',
    liveUrl: 'https://apps.apple.com/us/app/repai-trainer/id6749765139',
    logo: '/logorepai.png',
    // banner: '/projects/repai-trainer/bannerrepai.png',
    images: [
      '/projects/repai-trainer/p1.png',
      '/projects/repai-trainer/p2.png',
      '/projects/repai-trainer/p3.png',
    ],
    tags: ['Expo', 'React Native', 'Supabase', 'PostgreSQL', 'RevenueCat', 'App Store', 'APIs IA', 'GPT-5'],
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
    featured: true,
    status: 'live',
    disclaimer: 'Proyecto propio actualmente en pausa de desarrollo.'
  },
  {
    slug: 'mistral-chat',
    title: 'Demo Chat IA',
    description: 'Interfaz de chat con Mistral AI y streaming',
    longDescription: 'Una aplicación web de chat moderna que demuestra las capacidades de Mistral AI. Construida con Next.js 14 y desplegada en Vercel Edge, implementa streaming de respuestas en tiempo real para una experiencia de usuario fluida y responsiva. El proyecto explora las mejores prácticas de integración de LLMs en aplicaciones web, incluyendo manejo de contexto, optimización de prompts, y gestión eficiente del estado de conversación.',
    liveUrl: 'https://mistral-demo.deharo.dev',
    repoUrl: 'https://github.com/deHaro5/Mistral-Chat',
    logo: '/logomistral.png',
    images: [
      '/projects/chat-demo/p0.png',
    ],
    tags: ['Next.js', 'Mistral AI', 'TypeScript', 'Edge Functions', 'Streaming'],
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
    ],
    featured: true,
    status: 'live',
    disclaimer: 'Proyecto personal sin afiliación oficial con Mistral AI.'
  },
  {
    slug: 'testum',
    title: 'Testum',
    description: 'Plataforma de exámenes tipo test con IA',
    longDescription: 'Testum es una plataforma web desarrollada con Next.js que permite crear y realizar exámenes tipo test de forma rápida y efectiva. Los usuarios pueden subir sus propios exámenes y resolverlos con una experiencia UX altamente pulida. El proyecto alcanzó +1600 preguntas para resolver y +21400 respuestas acumuladas, difundido únicamente por boca a boca entre estudiantes del grado de ADE de mi universidad. Incluye un chat de IA integrado con OpenAI para ayudar a los usuarios mientras responden, autenticación con Supabase, y base de datos PostgreSQL para almacenar toda la información.',
    liveUrl: 'https://testum.es',
    logo: '/logotestum.png',
    images: [
      '/projects/testum/p1.png',
      '/projects/testum/p1.5.png',
      '/projects/testum/p2.png',
    ],
    tags: ['Next.js', 'OpenAI', 'Supabase', 'PostgreSQL', 'Edge Functions', 'TypeScript', 'UX'],
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
    featured: true,
    status: 'live',
    disclaimer: 'Proyecto personal desarrollado para estudiantes de ADE de mi universidad.'
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Personal',
    description: 'Portfolio minimalista dark mode con Next.js',
    longDescription: 'Este sitio web. Portfolio personal construido con Next.js 14 App Router, TypeScript y Tailwind CSS. Diseño minimalista en dark mode.',
    liveUrl: 'https://deharo.dev',
    repoUrl: 'https://github.com/deHaro5',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React'],
    featured: false,
    status: 'live'
  }
];

