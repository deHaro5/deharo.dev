import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Francisco De Haro — Full Stack Developer',
  description: 'Desarrollador Full Stack especializado en Next.js e IA. Creador de Repai Trainer. Disponible para colaboraciones.',
  metadataBase: new URL('https://deharo.dev'),
  openGraph: {
    title: 'Francisco De Haro — Full Stack Developer',
    description: 'Desarrollador Full Stack especializado en Next.js e IA. Creador de Repai Trainer.',
    url: 'https://deharo.dev',
    siteName: 'deharo.dev',
    type: 'website',
  },
  icons: { 
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/80 border-b border-zinc-900 no-print">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-lg font-semibold text-zinc-100 hover:text-white transition-colors">
                deharo.dev
              </Link>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  Inicio
                </Link>
                <Link href="/projects" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  Proyectos
                </Link>
                <Link href="/cv" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
                  CV
                </Link>
              </div>
            </div>
          </nav>
        </header>

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
                  href="https://instagram.com/fran_de_haro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Instagram
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
      </body>
    </html>
  );
}

