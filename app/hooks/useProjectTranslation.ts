import { useLanguage } from '../contexts/LanguageContext';
import { projectTranslations } from '../projectTranslations';
import type { Project } from '../data/projects';

export function useProjectTranslation(project: Project) {
  const { language } = useLanguage();
  
  const translation = projectTranslations[project.slug]?.[language];
  
  if (!translation) {
    // Fallback to original project data
    return {
      title: project.title,
      description: project.description,
      longDescription: project.longDescription || project.description,
      features: project.features || [],
      challenges: project.challenges || [],
      learnings: project.learnings || [],
      disclaimer: project.disclaimer
    };
  }
  
  return translation;
}

