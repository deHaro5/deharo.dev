import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/app/data/projects';
import BackButton from '@/components/BackButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos — Francisco De Haro',
  description: 'Proyectos de Francisco De Haro: Repai Trainer, demos con IA y más. Next.js, React Native, Supabase.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <BackButton />

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Proyectos
          </h1>
          <p className="text-lg text-zinc-400">
            Trabajos recientes y experimentos con tecnologías modernas.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <section className="max-w-5xl mx-auto space-y-6">
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
        </section>
      ) : (
        <div className="max-w-2xl mx-auto text-center py-16">
          <p className="text-zinc-500">
            Próximamente...
          </p>
        </div>
      )}
    </div>
  );
}

