'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [backText, setBackText] = useState('Volver');
  const [backHref, setBackHref] = useState('/');

  useEffect(() => {
    // Intentar obtener el origen desde sessionStorage (guardado al navegar)
    const previousPath = sessionStorage.getItem('previousPath');
    
    // Configurar texto y href basado en la página actual y el origen
    if (pathname.startsWith('/projects/') && pathname !== '/projects') {
      // Estamos en un proyecto individual
      if (previousPath === '/') {
        setBackText('Volver al Inicio');
        setBackHref('/');
      } else if (previousPath === '/projects') {
        setBackText('Volver a Proyectos');
        setBackHref('/projects');
      } else {
        // Por defecto, volver a Proyectos
        setBackText('Volver a Proyectos');
        setBackHref('/projects');
      }
    } else if (pathname === '/projects') {
      setBackText('Volver al Inicio');
      setBackHref('/');
    } else if (pathname === '/cv') {
      setBackText('Volver al Inicio');
      setBackHref('/');
    } else {
      setBackText('Volver');
      setBackHref('/');
    }

    // Guardar la ruta actual para la próxima navegación
    return () => {
      sessionStorage.setItem('previousPath', pathname);
    };
  }, [pathname]);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(backHref);
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors mb-8 group"
    >
      <svg 
        className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="text-sm">{backText}</span>
    </button>
  );
}

