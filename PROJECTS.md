# Guía de Proyectos

## Cómo añadir imágenes a un proyecto

### 1. Estructura de carpetas

Crea una carpeta para las imágenes de tu proyecto en `public/projects/[slug]/`:

```
public/
└── projects/
    ├── repai-trainer/
    │   ├── screenshot-1.png
    │   ├── screenshot-2.png
    │   └── demo.gif
    ├── mistral-chat/
    │   └── screenshot.png
    └── portfolio/
        └── preview.png
```

### 2. Actualizar el tipo de proyecto

Edita `app/data/projects.ts` y añade el campo `images`:

```typescript
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  liveUrl?: string;
  repoUrl?: string;
  tags: string[];
  logo?: string;
  images?: string[]; // Array de rutas de imágenes
  featured?: boolean;
  status?: 'live' | 'development' | 'archived';
  disclaimer?: string;
};
```

### 3. Añadir imágenes al proyecto

```typescript
{
  slug: 'repai-trainer',
  title: 'Repai Trainer',
  // ... otros campos
  images: [
    '/projects/repai-trainer/screenshot-1.png',
    '/projects/repai-trainer/screenshot-2.png',
    '/projects/repai-trainer/demo.gif',
  ],
}
```

### 4. Actualizar la página del proyecto

Edita `app/projects/[slug]/page.tsx` en la sección de imágenes:

```typescript
{/* Images Section */}
<section>
  <h2 className="text-2xl font-bold text-white mb-4">Capturas</h2>
  {project.images && project.images.length > 0 ? (
    <div className="grid md:grid-cols-2 gap-4">
      {project.images.map((image, index) => (
        <div key={index} className="aspect-video relative rounded-lg overflow-hidden border border-zinc-800">
          <Image
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="aspect-video bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center">
        <p className="text-zinc-600 text-sm">Imagen próximamente</p>
      </div>
    </div>
  )}
</section>
```

## Recomendaciones de imágenes

- **Formato**: PNG o JPG optimizado
- **Tamaño**: Máximo 2MB por imagen
- **Resolución**: 1920x1080 o 16:9 aspect ratio
- **Optimización**: Usa herramientas como TinyPNG antes de subir
- **Nombres**: Descriptivos y en minúsculas con guiones

## Añadir nuevo proyecto

1. Agrega el proyecto en `app/data/projects.ts`
2. Crea la carpeta `public/projects/[tu-slug]/`
3. Añade las imágenes
4. ¡Listo! La página se genera automáticamente

