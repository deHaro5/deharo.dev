'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-black/80 border-b border-zinc-900 no-print">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-zinc-100 hover:text-white transition-colors">
            deharo.dev
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
              {t('home')}
            </Link>
            <Link href="/projects" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
              {t('projects')}
            </Link>
            <Link href="/cv" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm">
              {t('cv')}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

