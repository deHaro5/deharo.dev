import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Francisco De Haro - Full Stack Developer & AI Integrator';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          padding: '80px 100px',
        }}
      >
        {/* Main Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Francisco De Haro
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 42,
            color: '#a1a1aa',
            marginBottom: 60,
          }}
        >
          Full Stack Developer & AI Integrator
        </div>

        {/* Tech Stack Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 40,
          }}
        >
          {['Next.js', 'React Native', 'TypeScript', 'AI Integration'].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: '#18181b',
                color: '#a1a1aa',
                padding: '12px 24px',
                borderRadius: 6,
                fontSize: 24,
                border: '1px solid #27272a',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 32,
            color: '#52525b',
            marginTop: 'auto',
          }}
        >
          deharo.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

