import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Proyecto no encontrado
        </h1>
        <p className="text-zinc-400 mb-8">
          El proyecto que buscas no existe o ha sido eliminado.
        </p>
        <Link href="/projects" className="btn btn-primary">
          Volver a Proyectos
        </Link>
      </div>
    </div>
  );
}

