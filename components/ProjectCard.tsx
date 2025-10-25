'use client';

import type { Project } from '@/app/data/projects';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useProjectTranslation } from '@/app/hooks/useProjectTranslation';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const translated = useProjectTranslation(project);
  const { t } = useLanguage();
  
  // Si es el portfolio, redirigir al GitHub directamente
  const isPortfolio = project.slug === 'portfolio';
  const href = isPortfolio && project.repoUrl ? project.repoUrl : `/projects/${project.slug}`;
  const isExternal = isPortfolio && project.repoUrl;
  
  const handleClick = () => {
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(href);
    }
  };
  
  return (
    <div 
      className={`card group cursor-pointer ${isPortfolio ? '' : 'h-full'} flex flex-col`}
      onClick={handleClick}
    >
      {/* Logo and Header */}
      <div className="flex items-start gap-4 mb-4">
        {project.logo && (
          <div className="flex-shrink-0">
            <Image 
              src={project.logo} 
              alt={`${project.title} logo`}
              width={48}
              height={48}
              className="rounded-lg"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {translated.title}
            </h2>
            {project.status && (
              <span 
                className={`flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded ${
                  project.status === 'live' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : project.status === 'development'
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                }`}
              >
                {project.status === 'live' ? t('live') : project.status === 'development' ? t('dev') : t('archived')}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={`text-zinc-400 text-sm mb-4 leading-relaxed ${isPortfolio ? '' : 'flex-grow'}`}>
        {translated.longDescription}
      </p>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors underline"
            onClick={(e) => e.stopPropagation()}
          >
            {project.liveUrl.includes('apps.apple.com') ? t('viewOnAppStore') : t('viewWeb')} ↗
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors underline"
            onClick={(e) => e.stopPropagation()}
          >
            {t('viewCode')} ↗
          </a>
        )}
      </div>

      {/* Disclaimer */}
      {translated.disclaimer && (
        <p className="mt-4 text-xs text-zinc-600 italic border-t border-zinc-900 pt-3">
          {translated.disclaimer}
        </p>
      )}
      
      {/* Read More Hint */}
      {!isPortfolio && (
        <div className="mt-4 pt-4 border-t border-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm text-zinc-500">
            {t('viewAllProjects')} →
          </span>
        </div>
      )}
    </div>
  );
}

