'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/app/data/projects';
import BackButton from '@/components/BackButton';
import { useProjectTranslation } from '@/app/hooks/useProjectTranslation';
import { useLanguage } from '@/app/contexts/LanguageContext';

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }
  
  const translated = useProjectTranslation(project);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <BackButton />

        {/* Banner Header */}
        {project.banner && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-zinc-800/50">
            <div className="relative">
              <Image
                src={project.banner}
                alt={`${project.title} banner`}
                width={1200}
                height={600}
                className="w-full h-auto opacity-60"
                priority
              />
              {/* Overlay to soften the banner */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
            </div>
          </div>
        )}

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            {project.logo && (
              <Image 
                src={project.logo} 
                alt={`${project.title} logo`}
                width={80}
                height={80}
                className="rounded-xl"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {translated.title}
                </h1>
                {project.status && (
                  <span 
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      project.status === 'live' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                        : project.status === 'development'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                    }`}
                  >
                    {project.status === 'live' ? t('live') : project.status === 'development' ? t('development') : t('archived')}
                  </span>
                )}
              </div>
              <p className="text-xl text-zinc-400">
                {translated.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {project.liveUrl.includes('apps.apple.com') ? t('viewOnAppStore') : t('viewWeb')}
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {t('viewCode')}
              </a>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-12">
          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('aboutProject')}</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              {translated.longDescription}
            </p>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('technologies')}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          {translated.features && translated.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('features')}</h2>
              <ul className="space-y-2">
                {translated.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Challenges */}
          {translated.challenges && translated.challenges.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('technicalChallenges')}</h2>
              <ul className="space-y-2">
                {translated.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Learnings */}
          {translated.learnings && translated.learnings.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('learnings')}</h2>
              <ul className="space-y-2">
                {translated.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-400">
                    <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Screenshots Section */}
          {project.images && project.images.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">{t('screenshots')}</h2>
              {project.slug === 'testum' ? (
                // Layout 2-1 triangular especial para Testum
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.slice(0, 2).map((image, index) => (
                      <div 
                        key={index} 
                        className="group relative flex items-center justify-center"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-contain rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
                        />
                        {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-2xl">
                        <span className="text-white text-sm font-medium">
                          {t('view')} {index + 1}
                        </span>
                      </div>
                      </div>
                    ))}
                  </div>
                  {project.images[2] && (
                    <div className="group relative flex items-center justify-center max-w-4xl mx-auto">
                      <Image
                        src={project.images[2]}
                        alt={`${project.title} screenshot 3`}
                        width={1600}
                        height={900}
                        className="w-full h-auto object-contain rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-2xl">
                        <span className="text-white text-sm font-medium">
                          Vista 3
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ) : project.slug === 'llama-lyrics-finetuning' ? (
                // Layout especial para Llama Lyrics: primera imagen horizontal prioritaria
                <div className="space-y-6">
                  {/* Primera imagen - horizontal, grande y prioritaria */}
                  {project.images[0] && (
                    <div className="group relative flex items-center justify-center">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} screenshot 1`}
                        width={1600}
                        height={900}
                        className="w-full h-auto object-contain rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
                        priority
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-2xl">
                        <span className="text-white text-sm font-medium">
                          {t('training')}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Segunda imagen - vertical, más pequeña */}
                  {project.images[1] && (
                    <div className="group relative flex items-center justify-center max-w-3xl mx-auto">
                      <Image
                        src={project.images[1]}
                        alt={`${project.title} screenshot 2`}
                        width={1200}
                        height={1600}
                        className="w-auto h-auto max-h-[700px] object-contain rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-2xl">
                        <span className="text-white text-sm font-medium">
                          {t('results')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ) : project.slug === 'pre-paper' ? (
                // Layout especial para PRE-Paper: imágenes grandes verticales
                <div className="space-y-8">
                  {project.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="group relative flex items-center justify-center"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Graph ${index + 1}`}
                        width={1600}
                        height={1000}
                        className="w-full h-auto object-contain rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]"
                        priority={index === 0}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-2xl">
                        <span className="text-white text-sm font-medium">
                          Graph {index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Layout por defecto para otros proyectos
                <div className={`grid gap-6 ${project.images?.length === 1 ? 'md:grid-cols-1' : project.images?.length === 2 ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-3'}`}>
                  {project.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="group relative flex items-center justify-center"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={1200}
                        height={800}
                        className={`w-auto h-auto ${project.images?.length === 1 ? 'max-h-[800px]' : project.images?.length === 2 ? 'max-h-[600px]' : 'max-h-[400px]'} max-w-full object-contain rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.02]`}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white text-sm font-medium">
                          Vista {index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Disclaimer */}
          {translated.disclaimer && (
            <section className="border-t border-zinc-900 pt-8">
              <p className="text-sm text-zinc-600 italic">
                {translated.disclaimer}
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

