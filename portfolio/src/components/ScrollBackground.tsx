import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import type { Theme } from "../hooks/useTheme";

interface Props {
  theme: Theme;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
}

const mod = (value: number, size: number) => ((value % size) + size) % size;

// Red de partículas con parallax: cuanto más "cerca" está un nodo, más se mueve con el scroll
export function ScrollBackground({ theme }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);
  const redrawRef = useRef<() => void>(() => {});
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let scrollY = window.scrollY;
    let lastScrollY = scrollY;
    let velocity = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        depth: 0.3 + Math.random() * 0.7,
      }));
    };

    const render = (animate: boolean) => {
      const [r, g, b] = themeRef.current === "dark" ? [125, 211, 252] : [37, 99, 235];
      ctx.clearRect(0, 0, width, height);

      const points = particles.map((p) => {
        if (animate) {
          p.x = mod(p.x + p.vx, width);
          p.y = mod(p.y + p.vy + velocity * p.depth * 0.15, height);
        }
        return { x: p.x, y: mod(p.y - scrollY * p.depth * 0.4, height), depth: p.depth };
      });

      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(1 - dist / 140) * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.3 + p.depth * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.8 + p.depth * 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // La velocidad del scroll empuja las partículas y se amortigua en cada frame
    const loop = () => {
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;
      velocity = velocity * 0.9 + delta * 0.2;
      render(true);
      frame = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      if (reduced) render(false);
    };

    const onResize = () => {
      resize();
      render(false);
    };

    redrawRef.current = () => render(false);
    resize();
    render(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    if (!reduced) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  useEffect(() => {
    themeRef.current = theme;
    redrawRef.current();
  }, [theme]);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}
