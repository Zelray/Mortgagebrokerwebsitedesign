import { useEffect, useRef } from 'react';

export function SwirlAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      angle: number;
      speed: number;
      orbitRadius: number;
      color: string;
      opacity: number;
    }> = [];

    const colors = ['#10b981', '#2563eb', '#f59e0b', '#8b5cf6'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        orbitRadius: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 51, 102, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.angle += particle.speed;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        particle.x = centerX + Math.cos(particle.angle) * particle.orbitRadius;
        particle.y = centerY + Math.sin(particle.angle) * particle.orbitRadius;

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * particle.opacity * 50).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Pulsate
        particle.radius = Math.abs(Math.sin(particle.angle * 2) * 2) + 1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
