import type { Metadata } from 'next';
import BackButton from '@/components/BackButton';
import DownloadPDFButton from './DownloadPDFButton';

export const metadata: Metadata = {
  title: 'CV — Francisco De Haro',
  description: 'Currículum vitae de Francisco De Haro - Desarrollador Full Stack especializado en Next.js e IA.',
};

export default function CVPage() {
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
              Francisco De Haro
            </h1>
            <p className="text-zinc-400">
              Desarrollador Full Stack · Next.js · IA
            </p>
          </div>
          <DownloadPDFButton />
        </div>

        {/* Personal Info */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white">
            Contacto
          </h2>
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
          <h2 className="text-xl font-semibold mb-4 text-white">
            Resumen
          </h2>
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
          <h2 className="text-xl font-semibold mb-4 text-white">
            Qué aporto
          </h2>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 text-sm">
            <li>Diseño y desarrollo <strong className="text-zinc-300">frontend</strong> (Next.js/React) y <strong className="text-zinc-300">móvil</strong> (Expo)</li>
            <li><strong className="text-zinc-300">APIs</strong> y <strong className="text-zinc-300">backend</strong> en Node/TypeScript (Supabase, PostgreSQL, Neon)</li>
            <li><strong className="text-zinc-300">Autenticación y pagos</strong> (Clerk, Stripe, RevenueCat, suscripciones)</li>
            <li>Integración de <strong className="text-zinc-300">LLMs</strong> (Mistral, OpenAI, etc.), orquestación de prompts y despliegues</li>
            <li><strong className="text-zinc-300">DevOps</strong> práctico: Vercel, Cloudflare, GitHub, CI/CD</li>
          </ul>
        </section>

        {/* Projects / Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white">
            Proyectos
          </h2>
          
          <div className="space-y-8">
            {/* Repai Trainer */}
            <div className="border-l-2 border-zinc-800 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-medium text-zinc-100 mb-1">
                    Repai Trainer
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Desarrollo de App móvil iOS (Fullstack) · Proyecto propio
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-500/10 text-green-400 border border-green-500/20">
                    Live
                  </span>
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-zinc-800 text-zinc-500 border border-zinc-700">
                    En pausa
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm mb-3">
                <li>Expo/React Native para frontend móvil iOS</li>
                <li>Supabase para backend y PostgreSQL</li>
                <li>RevenueCat para pagos y suscripciones</li>
                <li>Gestión completa en App Store Connect</li>
                <li>Integración de APIs IA (GPT-5) para generación de entrenamientos</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Expo</span>
                <span className="badge">React Native</span>
                <span className="badge">Supabase</span>
                <span className="badge">RevenueCat</span>
                <span className="badge">APIs IA</span>
                <span className="badge">GPT-5</span>
              </div>
            </div>

            {/* Testum */}
            <div className="border-l-2 border-zinc-800 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-medium text-zinc-100 mb-1">
                    Testum
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Plataforma de exámenes tipo test con IA · Proyecto universitario
                  </p>
                </div>
                <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-500/10 text-green-400 border border-green-500/20">
                  Live
                </span>
              </div>
              <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm mb-3">
                <li>Next.js 14 con TypeScript</li>
                <li>Chat IA con OpenAI integrado para asistencia</li>
                <li>Supabase Auth y PostgreSQL</li>
                <li>+1600 preguntas y +21400 respuestas acumuladas</li>
                <li>Crecimiento orgánico (boca a boca entre estudiantes)</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Next.js</span>
                <span className="badge">OpenAI</span>
                <span className="badge">Supabase</span>
                <span className="badge">PostgreSQL</span>
                <span className="badge">UX</span>
              </div>
            </div>

            {/* Demo Chat IA */}
            <div className="border-l-2 border-zinc-800 pl-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-medium text-zinc-100 mb-1">
                    Demo Chat IA
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    Interfaz de chat con LLM y streaming
                  </p>
                </div>
                <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-500/10 text-green-400 border border-green-500/20">
                  Live
                </span>
              </div>
              <ul className="list-disc list-inside text-zinc-400 space-y-1 text-sm mb-3">
                <li>Next.js 14 con Edge Functions</li>
                <li>Integración de Mistral AI con streaming</li>
                <li>Manejo de contexto y prompting optimizado</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Next.js</span>
                <span className="badge">Mistral AI</span>
                <span className="badge">Edge Functions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-white">
            Stack Tecnológico
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">Frontend & Mobile</h3>
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
              <h3 className="text-sm font-medium text-zinc-300 mb-2">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Node.js</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Supabase</span>
                <span className="badge">Neon</span>
                <span className="badge">PostgreSQL</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">Auth & Payments</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Clerk</span>
                <span className="badge">Stripe</span>
                <span className="badge">RevenueCat</span>
                <span className="badge">App Store Connect</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">IA & APIs</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">LLMs</span>
                <span className="badge">Mistral AI</span>
                <span className="badge">OpenAI</span>
                <span className="badge">Prompting</span>
                <span className="badge">API Integration</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-2">DevOps & Tools</h3>
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
            Educación
          </h2>
          
          <div className="border-l-2 border-zinc-800 pl-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-lg font-medium text-zinc-100">
                Grado en Administración y Dirección de Empresas (ADE)
              </h3>
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
          <h2 className="text-xl font-semibold mb-4 text-white">
            Idiomas
          </h2>
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

        {/* Contact CTA */}
        <section>
          <div className="border-t border-zinc-900 pt-8">
            <p className="text-zinc-400 text-sm mb-2">
              <strong className="text-zinc-300">Disponible de inmediato</strong> para colaboraciones y nuevas oportunidades.
            </p>
            <p className="text-zinc-500 text-sm">
              Contacto →{' '}
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
