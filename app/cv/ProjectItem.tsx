'use client';

import { Project } from '@/app/data/projects';
import { useProjectTranslation } from '@/app/hooks/useProjectTranslation';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { t } = useLanguage();
  const translated = useProjectTranslation(project);

  return (
    <div className="border-l-2 border-zinc-800 pl-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-medium text-zinc-100 mb-1">
            {translated.title}
          </h3>
          <p className="text-zinc-400 text-sm mb-3">
            {translated.description}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          {project.status && (
            <span 
              className={`px-2 py-0.5 text-xs font-medium rounded whitespace-nowrap ${
                project.status === 'live' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : project.status === 'development'
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
              }`}
            >
              {project.status === 'live' ? t('live') : project.status === 'development' ? t('dev') : t('archived')}
            </span>
          )}
        </div>
      </div>
      {translated.features && translated.features.length > 0 && (
        <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm mb-3">
          {translated.features.slice(0, 5).map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 6).map((tag) => (
          <span key={tag} className="badge">{tag}</span>
        ))}
      </div>
    </div>
  );
}

