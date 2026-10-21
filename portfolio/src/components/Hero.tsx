import { motion } from "framer-motion";
import { profile } from "../data";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useTypewriter } from "../hooks/useTypewriter";
import { LayeredRings } from "./LayeredRings";

export function Hero() {
  const reduced = useReducedMotion();
  const typed = useTypewriter(profile.typing, { enabled: !reduced });

  return (
    <section id="inicio" className="hero container">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {profile.hireable && (
          <p className="availability">
            <span className="pulse-dot" aria-hidden="true" />
            Disponible para trabajo remoto
          </p>
        )}
        <h1>
          Hola, soy <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="typing" aria-live="polite">
          <span>{typed}</span>
          <span className="caret" aria-hidden="true" />
        </p>
        <p className="lead">{profile.quote}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contacto">
            Hablemos
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            Ver GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <LayeredRings />
      </motion.div>
    </section>
  );
}
