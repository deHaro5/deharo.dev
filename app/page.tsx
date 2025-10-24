'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/app/data/projects';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'proyectos', 'cv'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation Indicator */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-8">
          {/* Navigation items */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
            aria-label="Ir a inicio"
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              activeSection === 'hero' ? 'bg-white scale-150' : 'bg-zinc-700'
            }`} />
            <span className={`text-xs whitespace-nowrap transition-colors ${
              activeSection === 'hero' ? 'text-white' : 'text-zinc-500'
            }`}>
              Inicio
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('proyectos')}
            className="flex items-center gap-3 group"
            aria-label="Ir a proyectos"
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              activeSection === 'proyectos' ? 'bg-white scale-150' : 'bg-zinc-700'
            }`} />
            <span className={`text-xs whitespace-nowrap transition-colors ${
              activeSection === 'proyectos' ? 'text-white' : 'text-zinc-500'
            }`}>
              Proyectos
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('cv')}
            className="flex items-center gap-3 group"
            aria-label="Ir a CV"
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              activeSection === 'cv' ? 'bg-white scale-150' : 'bg-zinc-700'
            }`} />
            <span className={`text-xs whitespace-nowrap transition-colors ${
              activeSection === 'cv' ? 'text-white' : 'text-zinc-500'
            }`}>
              CV
            </span>
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section id="hero" className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Francisco De Haro
            </h1>
            
            {/* Content with badges on the right */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Left: Text content */}
              <div className="flex-1">
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
                <div className="flex items-center gap-4">
                  <Link href="/projects" className="btn btn-primary">
                    Ver Proyectos
                  </Link>
                  <Link href="/cv" className="btn btn-secondary">
                    CV
                  </Link>
                </div>
              </div>

              {/* Right: Tech Badges */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="flex flex-wrap gap-2 lg:sticky lg:top-32">
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
            </div>
          </div>
        </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Proyectos
              </h2>
              <p className="text-lg text-zinc-400">
                Trabajos recientes y experimentos con tecnologías modernas.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline whitespace-nowrap mt-3"
            >
              Ver todos los proyectos →
            </Link>
          </div>

          {/* Projects Grid */}
          {projects.length > 0 ? (
            <div className="space-y-6">
              {/* Proyectos principales (todos excepto portfolio) */}
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                {projects.filter(p => p.slug !== 'portfolio').map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
              
              {/* Portfolio Personal - altura dinámica, siempre al final */}
              {projects.find(p => p.slug === 'portfolio') && (
                <div>
                  <ProjectCard project={projects.find(p => p.slug === 'portfolio')!} />
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-zinc-500">
                Próximamente...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20">
        <div className="max-w-6xl mx-auto">
          {/* CV Header */}
          <div className="flex items-start justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                CV
              </h2>
              <p className="text-lg text-zinc-400">
                Experiencia, stack tecnológico y formación.
              </p>
            </div>
            <Link 
              href="/cv" 
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline whitespace-nowrap mt-3"
            >
              Ver CV completo →
            </Link>
          </div>

          {/* Personal Info */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Contacto
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-zinc-500 mb-1">Email</p>
                <p className="text-zinc-300">frandeharo55@gmail.com</p>
              </div>
              <div>
                <p className="text-zinc-500 mb-1">Ubicación</p>
                <p className="text-zinc-300">España</p>
              </div>
              <div>
                <p className="text-zinc-500 mb-1">GitHub</p>
                <a href="https://github.com/deHaro5" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-100 transition-colors underline">
                  github.com/deHaro5
                </a>
              </div>
              <div>
                <p className="text-zinc-500 mb-1">Portfolio</p>
                <a href="https://deharo.dev" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-100 transition-colors underline">
                  deharo.dev
                </a>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Resumen
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm mb-3">
              Desarrollador full-stack con foco en <strong className="text-zinc-300">Next.js</strong> e <strong className="text-zinc-300">IA</strong>. 
              He publicado <strong className="text-zinc-300">Repai Trainer</strong> (Expo/React Native) con suscripciones y backend en Supabase, 
              pagos con RevenueCat, integración de APIs IA (GPT-5) y gestión en App Store Connect.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Me muevo cómodo en ciclos rápidos y entregas continuas. Alta disponibilidad y experiencia entregando productos end-to-end.
            </p>
          </section>

          {/* Key Skills Summary */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Qué aporto
            </h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 text-sm">
              <li>Diseño y desarrollo <strong className="text-zinc-300">frontend</strong> (Next.js/React) y <strong className="text-zinc-300">móvil</strong> (Expo)</li>
              <li><strong className="text-zinc-300">APIs</strong> y <strong className="text-zinc-300">backend</strong> en Node/TypeScript (Supabase, PostgreSQL, Neon)</li>
              <li><strong className="text-zinc-300">Autenticación y pagos</strong> (Clerk, Stripe, RevenueCat, suscripciones)</li>
              <li>Integración de <strong className="text-zinc-300">LLMs</strong> (Mistral, OpenAI, etc.), orquestación de prompts y despliegues</li>
              <li><strong className="text-zinc-300">DevOps</strong> práctico: Vercel, Cloudflare, GitHub, CI/CD</li>
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Stack Tecnológico
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">Frontend & Mobile</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">Next.js</span>
                  <span className="badge">React</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Expo</span>
                  <span className="badge">React Native</span>
                  <span className="badge">Xcode</span>
                  <span className="badge">Tailwind CSS</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">Node.js</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Supabase</span>
                  <span className="badge">Neon</span>
                  <span className="badge">PostgreSQL</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">Auth & Payments</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">Clerk</span>
                  <span className="badge">Stripe</span>
                  <span className="badge">RevenueCat</span>
                  <span className="badge">App Store Connect</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">IA & APIs</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">LLMs</span>
                  <span className="badge">Mistral AI</span>
                  <span className="badge">OpenAI</span>
                  <span className="badge">Prompting</span>
                  <span className="badge">API Integration</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">DevOps & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">Vercel</span>
                  <span className="badge">Cloudflare</span>
                  <span className="badge">GitHub</span>
                  <span className="badge">CI/CD</span>
                  <span className="badge">Cursor</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Educación
            </h3>
            
            <div className="border-l-2 border-zinc-800 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-medium text-zinc-100">
                  Grado en Administración y Dirección de Empresas (ADE)
                </h4>
                <span className="text-xs text-zinc-500">
                  Cursando 3º
                </span>
              </div>
              <p className="text-zinc-400 text-sm">
                Aprendizaje rápido y autonomía técnica
              </p>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Idiomas
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-zinc-300">Español</p>
                <p className="text-zinc-500">Nativo</p>
              </div>
              <div>
                <p className="text-zinc-300">Inglés</p>
                <p className="text-zinc-500">Avanzado</p>
              </div>
              <div>
                <p className="text-zinc-300">Francés</p>
                <p className="text-zinc-500">Básico</p>
              </div>
            </div>
          </section>
        </div>
      </section>

        {/* Contact - Discrete */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto">
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
    </>
  );
}

