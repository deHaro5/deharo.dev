# deharo.dev

Portfolio personal de **Francisco De Haro**, desarrollador Full Stack especializado en Next.js e IA.

Diseño minimalista en dark mode construido con **Next.js 14** (App Router), **TypeScript** y **Tailwind CSS**.

## 🚀 Características

- ✨ Diseño minimalista dark mode
- 🎨 Tailwind CSS con paleta oscura (zinc/black)
- 📱 Totalmente responsive
- ⚡ Next.js 14 con App Router
- 🎯 TypeScript para type safety
- 🌐 Página de CV con descarga de PDF
- 🔗 Integración con proyectos en subdominios
- 📦 Listo para desplegar en Vercel

## 👤 Sobre Francisco De Haro

Desarrollador Full Stack (20 años) especializado en Next.js e integración de IA. Creador de **Repai Trainer** (app publicada en App Store con Expo/React Native + Supabase). Estudiante de ADE (3º curso). Disponible de inmediato para colaboraciones.

## 📁 Estructura del Proyecto

```
deharo.dev/
├── app/
│   ├── data/
│   │   └── projects.ts          # Datos de proyectos
│   ├── projects/
│   │   └── page.tsx             # Página de proyectos
│   ├── cv/
│   │   └── page.tsx             # Página de CV
│   ├── globals.css              # Estilos globales con Tailwind
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página de inicio
├── components/
│   └── ProjectCard.tsx          # Componente de tarjeta de proyecto
├── public/
│   ├── cv.pdf                   # CV en formato PDF
│   └── favicon.ico              # Favicon del sitio
├── next.config.js               # Configuración de Next.js
├── tailwind.config.ts           # Configuración de Tailwind
├── tsconfig.json                # Configuración de TypeScript
└── package.json                 # Dependencias
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

- Node.js 18+ o superior
- npm, yarn, o pnpm

### Pasos

1. **Instalar dependencias:**

```bash
npm install
# o
yarn install
# o
pnpm install
```

2. **Iniciar servidor de desarrollo:**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

3. **Abrir en el navegador:**

Visita [http://localhost:3000](http://localhost:3000)

## 📝 Personalización

### 1. Información Personal

Ya incluye la información de Francisco De Haro:

- **Nombre**: Francisco De Haro
- **Email**: frandeharo55@gmail.com
- **GitHub**: github.com/deHaro5
- **Portfolio**: deharo.dev

Si necesitas modificar algo, edita:
- **`app/layout.tsx`**: Enlaces del footer
- **`app/page.tsx`**: Hero section
- **`app/cv/page.tsx`**: Experiencia y habilidades
- **`public/cv.pdf`**: Reemplaza con tu CV real en PDF

### 2. Proyectos

Incluye los proyectos actuales:
- **Repai Trainer**: App de entrenamiento (Expo/React Native + Supabase)
- **Demo Chat IA**: Interfaz con Mistral AI
- **Portfolio Personal**: Este sitio web

**Páginas individuales**: Cada proyecto tiene su propia página en `/projects/[slug]` con:
- Descripción detallada
- Tecnologías utilizadas
- Capturas de pantalla
- Enlaces a demo y código

Para agregar más proyectos, edita `app/data/projects.ts`. Ver `PROJECTS.md` para guía completa de cómo añadir imágenes.

### 3. Colores y Estilos

Modifica `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
theme: {
  extend: {
    colors: {
      primary: { /* tus colores */ },
      accent: { /* tus colores */ },
    },
  },
}
```

## 🚢 Despliegue en Vercel

### Despliegue Básico

1. **Sube tu código a GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/deharo-dev.git
git push -u origin main
```

2. **Importa en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

### Configuración de Dominios

#### Dominio Principal (deharo.dev)

1. En tu proyecto de Vercel → Settings → Domains
2. Agrega `deharo.dev`
3. En tu proveedor de DNS, configura:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

#### Subdominio para Mistral Demo

1. En tu proyecto de mistral-chat en Vercel → Settings → Domains
2. Agrega `mistral-demo.deharo.dev`
3. En tu proveedor de DNS:

```
Tipo: CNAME
Nombre: mistral-demo
Valor: cname.vercel-dns.com
```

El portfolio automáticamente redirige `/mistral-demo` → `https://mistral-demo.deharo.dev`

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta el linter
```

## 🎨 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Deploy**: Vercel
- **Iconos**: SVG inline (Heroicons style)

## 📄 Licencia

Este proyecto es el portfolio personal de Francisco De Haro.

## 📬 Contacto

- Email: frandeharo55@gmail.com
- GitHub: [github.com/deHaro5](https://github.com/deHaro5)
- Portfolio: [deharo.dev](https://deharo.dev)

---

© 2025 Francisco De Haro

