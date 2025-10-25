'use client';

import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/app/data/projects';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
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
            aria-label={t('home')}
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              activeSection === 'hero' ? 'bg-white scale-150' : 'bg-zinc-700'
            }`} />
            <span className={`text-xs whitespace-nowrap transition-colors ${
              activeSection === 'hero' ? 'text-white' : 'text-zinc-500'
            }`}>
              {t('home')}
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('proyectos')}
            className="flex items-center gap-3 group"
            aria-label={t('projects')}
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              activeSection === 'proyectos' ? 'bg-white scale-150' : 'bg-zinc-700'
            }`} />
            <span className={`text-xs whitespace-nowrap transition-colors ${
              activeSection === 'proyectos' ? 'text-white' : 'text-zinc-500'
            }`}>
              {t('projects')}
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('cv')}
            className="flex items-center gap-3 group"
            aria-label={t('cv')}
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              activeSection === 'cv' ? 'bg-white scale-150' : 'bg-zinc-700'
            }`} />
            <span className={`text-xs whitespace-nowrap transition-colors ${
              activeSection === 'cv' ? 'text-white' : 'text-zinc-500'
            }`}>
              {t('cv')}
            </span>
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section id="hero" className="py-32 md:py-40">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              {t('homeTitle')}
            </h1>
            
            {/* Content with badges on the right */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Left: Text content */}
              <div className="flex-1">
                <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed">
                  {t('homeSubtitle')}
                </p>
                <p className="text-base text-zinc-500 mb-12 leading-relaxed">
                  {t('homeDescription')}
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                  <Link href="/projects" className="btn btn-primary">
                    {t('viewAllProjects')}
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
                {t('featuredProjects')}
              </h2>
              <p className="text-lg text-zinc-400">
                {t('projectsDescription')}
              </p>
            </div>
            <Link 
              href="/projects" 
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline whitespace-nowrap mt-3"
            >
              {t('viewAllProjects')} →
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
                {t('homeCVTitle')}
              </h2>
              <p className="text-lg text-zinc-400">
                {t('homeCVDescription')}
              </p>
            </div>
            <Link 
              href="/cv" 
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline whitespace-nowrap mt-3"
            >
              {t('viewFullCV')}
            </Link>
          </div>

          {/* Personal Info */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white">
              {t('cvContact')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-zinc-500 mb-1">{t('cvEmail')}</p>
                <p className="text-zinc-300">frandeharo55@gmail.com</p>
              </div>
              <div>
                <p className="text-zinc-500 mb-1">{t('cvLocation')}</p>
                <p className="text-zinc-300">{t('cvLocationValue')}</p>
              </div>
              <div>
                <p className="text-zinc-500 mb-1">GitHub</p>
                <a href="https://github.com/deHaro5" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-100 transition-colors underline">
                  github.com/deHaro5
                </a>
              </div>
              <div>
                <p className="text-zinc-500 mb-1">{t('cvPortfolio')}</p>
                <a href="https://deharo.dev" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-zinc-100 transition-colors underline">
                  deharo.dev
                </a>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('homeCVSummaryTitle')}
            </h3>
             <p className="text-zinc-400 leading-relaxed text-sm">
               {t('homeCVSummaryText1')}
             </p>
          </section>

          {/* Key Skills Summary */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('cvWhatIBring')}
            </h3>
            <ul className="list-disc list-inside text-zinc-400 space-y-2 text-sm">
              <li>{t('cvSkill1')}</li>
              <li>{t('cvSkill2')}</li>
              <li>{t('cvSkill3')}</li>
              <li>{t('cvSkill4')}</li>
              <li>{t('cvSkill6')}</li>
            </ul>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-white">
              {t('cvTechStack')}
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">{t('cvFrontendMobile')}</h4>
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
                <h4 className="text-sm font-medium text-zinc-300 mb-2">{t('cvBackendDatabase')}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">Node.js</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Supabase</span>
                  <span className="badge">Neon</span>
                  <span className="badge">PostgreSQL</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">{t('cvAuthPayments')}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">Clerk</span>
                  <span className="badge">Stripe</span>
                  <span className="badge">RevenueCat</span>
                  <span className="badge">App Store Connect</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">{t('cvAIML')}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge">LLMs</span>
                  <span className="badge">Mistral AI</span>
                  <span className="badge">OpenAI</span>
                  <span className="badge">Prompting</span>
                  <span className="badge">API Integration</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-zinc-300 mb-2">{t('cvDevOpsTools')}</h4>
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
              {t('cvEducation')}
            </h3>
            
            <div className="border-l-2 border-zinc-800 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-medium text-zinc-100">
                  {t('cvEducationDegree')}
                </h4>
                <span className="text-xs text-zinc-500">
                  {t('cvEducationYear')}
                </span>
              </div>
              <p className="text-zinc-400 text-sm">
                {t('cvEducationDescription')}
              </p>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('cvLanguages')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-zinc-300">{t('cvLanguageSpanish')}</p>
                <p className="text-zinc-500">{t('cvLanguageLevelNative')}</p>
              </div>
              <div>
                <p className="text-zinc-300">{t('cvLanguageEnglish')}</p>
                <p className="text-zinc-500">{t('cvLanguageLevelAdvanced')}</p>
              </div>
              <div>
                <p className="text-zinc-300">{t('cvLanguageFrench')}</p>
                <p className="text-zinc-500">{t('cvLanguageLevelBasic')}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* About me Section */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white">{t('aboutMeTitle')}</h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
            <p className="text-zinc-300 text-lg leading-relaxed">
              {t('aboutMeText')}
            </p>
          </div>
        </div>
      </section>

        {/* Contact - Discrete */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              <p className="text-zinc-500 text-sm">
                <span className="text-zinc-400 font-medium">{t('availabilityTitle')}:</span> {t('availabilityText')}
              </p>
              <p className="text-zinc-500 text-sm">
                {t('availableForCollaborations')}{' '}
                <a 
                  href="mailto:frandeharo55@gmail.com" 
                  className="text-zinc-400 hover:text-zinc-100 transition-colors underline"
                >
                  frandeharo55@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

