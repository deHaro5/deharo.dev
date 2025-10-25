import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Francisco De Haro | Full Stack Developer & AI Integrator',
    template: '%s | Francisco De Haro',
  },
  description: 'Desarrollador Full Stack especializado en Next.js, React Native y AI. Creador de Repai Trainer (App Store). Desarrollo productos rápidos, eficientes y modernos con integración de IA y backend escalable. Disponible para colaboraciones.',
  keywords: [
    'Francisco De Haro',
    'deharo',
    'deharo.dev',
    'Full Stack Developer',
    'Next.js',
    'React',
    'React Native',
    'Supabase',
    'TypeScript',
    'AI Integration',
    'Inteligencia Artificial',
    'Software Engineer',
    'Expo',
    'Repai Trainer',
    'PostgreSQL',
    'Desarrollador España',
    'RevenueCat',
    'App Store',
    'OpenAI',
    'Mistral AI',
  ],
  authors: [{ name: 'Francisco De Haro', url: 'https://deharo.dev' }],
  creator: 'Francisco De Haro',
  publisher: 'Francisco De Haro',
  metadataBase: new URL('https://deharo.dev'),
  alternates: {
    canonical: 'https://deharo.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://deharo.dev',
    siteName: 'deharo.dev',
    title: 'Francisco De Haro | Full Stack Developer & AI Integrator',
    description: 'Desarrollo productos modernos con Next.js, React Native y AI. Creador de Repai Trainer. Disponible para colaboraciones.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Francisco De Haro - Full Stack Developer & AI Integrator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco De Haro | Full Stack Developer & AI Integrator',
    description: 'Desarrollo productos modernos con Next.js, React Native y AI. Creador de Repai Trainer.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { 
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Puedes añadir aquí Google Search Console verification si tienes
    // google: 'tu-codigo-de-verificacion',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Francisco De Haro',
    url: 'https://deharo.dev',
    image: 'https://deharo.dev/opengraph-image',
    jobTitle: 'Full Stack Developer',
    description: 'Desarrollador Full Stack especializado en Next.js, React Native y AI',
    sameAs: [
      'https://github.com/deHaro5',
      'https://instagram.com/fran_de_haro',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: [
      'Next.js',
      'React',
      'React Native',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'AI Integration',
      'Expo',
      'OpenAI',
      'Mistral AI',
      'RevenueCat',
      'App Store Connect',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Grado en Administración y Dirección de Empresas',
    },
  };

  return (
    <html lang="es">
      <body>
        {/* Structured Data JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <LanguageSelector />
          <Header />

          <main className="min-h-screen">
            {children}
          </main>

          <footer className="border-t border-zinc-900 mt-20 no-print">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-zinc-500 text-sm">
                  © {new Date().getFullYear()} Francisco De Haro
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <a 
                    href="https://github.com/deHaro5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="mailto:frandeharo55@gmail.com"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}

