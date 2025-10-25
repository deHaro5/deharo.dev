'use client';

import BackButton from '@/components/BackButton';
import DownloadPDFButton from './DownloadPDFButton';
import ProjectItem from './ProjectItem';
import { projects } from '@/app/data/projects';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function CVPage() {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="no-print">
          <BackButton />
        </div>

        {/* Header with Download Button */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {t('cvTitle')}
            </h1>
            <p className="text-zinc-400">
              {t('cvSubtitle')}
            </p>
          </div>
          <DownloadPDFButton />
        </div>

        {/* Personal Info */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white">
            {t('cvContact')}
          </h2>
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

        {/* Profile */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t('cvProfile')}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            {t('cvProfileText')}
          </p>
        </section>

        {/* Availability */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t('availabilityTitle')}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            {t('availabilityText')}
          </p>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t('cvSummary')}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-sm">
            {t('cvSummaryText1')}
          </p>
        </section>

        {/* Key Skills Summary */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t('cvWhatIBring')}
          </h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 text-sm">
            <li>{t('cvSkill1')}</li>
            <li>{t('cvSkill2')}</li>
            <li>{t('cvSkill3')}</li>
            <li>{t('cvSkill4')}</li>
            <li>{t('cvSkill5')}</li>
            <li>{t('cvSkill6')}</li>
          </ul>
        </section>

        {/* Projects / Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white">
            {t('cvProjects')}
          </h2>
          
          <div className="space-y-8">
            {projects
              .filter(p => p.slug !== 'portfolio') // Excluir el portfolio mismo
              .map((project) => (
                <ProjectItem key={project.slug} project={project} />
              ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white">
            {t('cvTechStack')}
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">{t('cvFrontendMobile')}</h3>
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
              <h3 className="text-sm font-medium text-zinc-300 mb-2">{t('cvBackendDatabase')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Node.js</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Supabase</span>
                <span className="badge">Neon</span>
                <span className="badge">PostgreSQL</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">{t('cvAuthPayments')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Clerk</span>
                <span className="badge">Stripe</span>
                <span className="badge">RevenueCat</span>
                <span className="badge">App Store Connect</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">{t('cvAIML')}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">LLMs</span>
                <span className="badge">Mistral AI</span>
                <span className="badge">OpenAI</span>
                <span className="badge">PyTorch</span>
                <span className="badge">Fine-tuning</span>
                <span className="badge">LoRA</span>
                <span className="badge">QLoRA</span>
                <span className="badge">Stable Diffusion</span>
                <span className="badge">Hugging Face</span>
                <span className="badge">Prompting</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">{t('cvDevOpsTools')}</h3>
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
          <h2 className="text-xl font-semibold mb-6 text-white">
            {t('cvEducation')}
          </h2>
          
          <div className="border-l-2 border-zinc-800 pl-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-lg font-medium text-zinc-100">
                {t('cvEducationDegree')}
              </h3>
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
          <h2 className="text-xl font-semibold mb-4 text-white">
            {t('cvLanguages')}
          </h2>
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

        {/* Contact CTA */}
        <section>
          <div className="border-t border-zinc-900 pt-8">
            <p className="text-zinc-400 text-sm mb-2">
              <strong className="text-zinc-300">{t('cvAvailability')}</strong> {t('cvAvailabilityText')}
            </p>
            <p className="text-zinc-500 text-sm">
              {t('cvContactCTA')}{' '}
              <a href="mailto:frandeharo55@gmail.com" className="text-zinc-400 hover:text-zinc-100 transition-colors underline">
                frandeharo55@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
