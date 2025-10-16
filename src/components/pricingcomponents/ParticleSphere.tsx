import { useEffect, useRef } from 'react';

export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      theta: number;
      phi: number;
    }> = [];

    const radius = 250;
    const latitudeLines = 25;
    const particlesPerLine = 40;

    for (let i = 0; i < latitudeLines; i++) {
      const phi = (Math.PI / latitudeLines) * i;

      for (let j = 0; j < particlesPerLine; j++) {
        const theta = (Math.PI * 2 / particlesPerLine) * j;

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        particles.push({ x, y, z, theta, phi });
      }
    }

    let rotation = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.003;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const sortedParticles = particles
        .map(particle => {
          const rotatedX = particle.x * Math.cos(rotation) - particle.z * Math.sin(rotation);
          const rotatedZ = particle.x * Math.sin(rotation) + particle.z * Math.cos(rotation);

          const scale = 600 / (600 + rotatedZ);
          const x2d = rotatedX * scale + centerX;
          const y2d = particle.y * scale + centerY;

          return {
            x: x2d,
            y: y2d,
            z: rotatedZ,
            scale,
            originalY: particle.y,
          };
        })
        .sort((a, b) => a.z - b.z);

      sortedParticles.forEach(particle => {
        const size = particle.scale * 1.8;
        const opacity = Math.max(0.3, Math.min(0.9, (particle.z + radius) / (radius * 2)));

        const normalizedY = Math.abs(particle.originalY / radius);

        let color;
        if (normalizedY < 0.2) {
          color = `rgba(167, 139, 250, ${opacity})`;
        } else if (normalizedY < 0.5) {
          color = `rgba(139, 92, 246, ${opacity})`;
        } else if (normalizedY < 0.7) {
          color = `rgba(124, 58, 237, ${opacity})`;
        } else {
          color = `rgba(109, 40, 217, ${opacity})`;
        }

        ctx.shadowBlur = 12;
        ctx.shadowColor = color;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        const gradient = ctx.createRadialGradient(
          particle.x - size * 0.3,
          particle.y - size * 0.3,
          0,
          particle.x,
          particle.y,
          size * 2
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        gradient.addColorStop(0.3, color);
        gradient.addColorStop(1, 'rgba(109, 40, 217, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
