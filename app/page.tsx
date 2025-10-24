import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-6">
      {/* Hero Section */}
      <section className="py-32 md:py-40">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Francisco De Haro
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
            Desarrollador Full Stack especializado en Next.js e integración de IA.
          </p>
          <p className="text-base text-zinc-500 mb-12 leading-relaxed">
            Fullstack la app{' '}
            <Link 
              href="/projects/repai-trainer"
              className="font-bold italic text-zinc-300 hover:text-white underline transition-colors"
            >
              Repai Trainer ↗
            </Link>
            {' '}— iOS (Expo/React Native) con suscripciones, backend Supabase e integración de APIs IA. 
            Experiencia en ciclos rápidos, entregas continuas y productos end-to-end. Solo dev, muchas ideas y ganas de aplicar IA a todo.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 mb-16">
            <Link href="/projects" className="btn btn-primary">
              Ver Proyectos
            </Link>
            <Link href="/cv" className="btn btn-secondary">
              CV
            </Link>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="badge">Next.js</span>
            <span className="badge">React</span>
            <span className="badge">Expo</span>
            <span className="badge">TypeScript</span>
            <span className="badge">Supabase</span>
            <span className="badge">PostgreSQL</span>
            <span className="badge">APIs IA</span>
            <span className="badge">RevenueCat</span>
          </div>
        </div>
      </section>

      {/* Contact - Discrete */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-sm">
            Disponible de inmediato para colaboraciones →{' '}
            <a 
              href="mailto:frandeharo55@gmail.com" 
              className="text-zinc-400 hover:text-zinc-100 transition-colors underline"
            >
              frandeharo55@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

