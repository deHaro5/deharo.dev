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
    slug: 'llama-lyrics-finetuning',
    title: 'Fine-tuning Llama para Letras en Español',
    description: 'Ajuste fino de modelos Llama 3.3 y 3.1 para generación de letras musicales',
    longDescription: 'Proyecto de fine-tuning de modelos Llama (3.3 1B/3B y 3.1 8B) para producir letras de canciones coherentes en español con estructura, rima y tema consistentes. Optimizado para equilibrar calidad y coste mediante técnicas avanzadas como QLoRA 4-bit y Unsloth. El proyecto incluye un pipeline completo de scraping propio desarrollado con Playwright para crear un dataset robusto de +10.000 ejemplos prompt-completion, sistema de tokenización con masking inteligente, y arquitectura de entrenamiento eficiente con A100 que logra resultados de alta calidad con ~24.3M parámetros entrenables.',
    logo: '/projects/llama-lyrics-finetuning/unsloth-logo.png',
    tags: ['PyTorch', 'Llama', 'Fine-tuning', 'QLoRA', 'Hugging Face', 'Unsloth', 'NLP', 'Transformers', 'bitsandbytes', 'PEFT'],
    images: [
      '/projects/llama-lyrics-finetuning/training.png',
      '/projects/llama-lyrics-finetuning/results.png',
    ],
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
    featured: true,
    status: 'archived',
    disclaimer: 'Proyecto personal de experimentación con fine-tuning de LLMs. Entrenamiento realizado con GPU A100.'
  },
  {
    slug: 'lora-black-stories',
    title: 'LoRA Black Stories - Generación de Imágenes',
    description: 'Entrenamiento de LoRA para replicar estética de Black Stories',
    longDescription: 'Proyecto de entrenamiento de un adaptador LoRA para replicar la estética visual característica de "Black Stories" y generar nuevas historias/escenas con consistencia visual. El proyecto incluye curación meticulosa de dataset, sistema de autocaptioning para robustecer el estilo, definición de trigger words para control preciso del estilo mediante prompts, y entrenamiento con resoluciones múltiples (512-1024) para mejorar la generalización. Incluye un riguroso proceso de QA estética revisando composición, siluetas, contraste, contornos y coherencia entre muestras para garantizar una estética estable y reproducible. Entrenado sobre los modelos FLUX de Black Forest Labs (flux-schnell y flux-dev).',
    liveUrl: 'https://replicate.com/deharo5/blackh',
    logo: '/projects/lora-black-stories/replicate-logo.jpg',
    tags: ['FLUX', 'LoRA', 'ComfyUI', 'Image Generation', 'Fine-tuning', 'Computer Vision', 'Diffusion Models', 'Black Forest Labs'],
    images: [
      '/projects/lora-black-stories/style1.png',
      '/projects/lora-black-stories/style2.png',
    ],
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
    featured: true,
    status: 'archived',
    disclaimer: 'Proyecto personal de uso propio para experimentación con generación de imágenes y control de estilo.'
  },
  {
    slug: 'pre-paper',
    title: '1¢, 1min, 100%: AI en Exámenes Universitarios',
    description: 'Investigación opensource sobre modelos de IA aplicados a exámenes de ADE',
    longDescription: 'Paper de investigación de contribución opensource sobre la aplicación de modelos de inteligencia artificial a los exámenes de Economía y Dirección de Empresas de la Universidad de Murcia, España. Los resultados y metodología son públicos. Los resultados demuestran que modelos avanzados de razonamiento como GPT-5-mini (high reasoning) y grok-4-fast-reasoning alcanzan una precisión del 100% en menos de 1 minuto por examen, con un coste aproximado de 1 céntimo por evaluación. Este estudio incluye el desarrollo de un sistema OCR implementado con la API de Mathpix y programa de conversión a LATEX/Markdown para automatizar el procesamiento de exámenes. Base de datos SQLite con Prisma para gestión eficiente de datos.',
    logo: '/projects/pre-paper/arxiv-logo.png',
    tags: ['Research', 'AI', 'Python', 'OCR', 'Mathpix', 'LATEX', 'SQLite', 'Prisma', 'Universidad de Murcia', 'Opensource'],
    images: [
      '/projects/pre-paper/graph1.png',
      '/projects/pre-paper/graph2.png',
    ],
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
    featured: true,
    status: 'development',
    disclaimer: 'Investigación académica en desarrollo. Los resultados son preliminares y están sujetos a revisión.'
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

