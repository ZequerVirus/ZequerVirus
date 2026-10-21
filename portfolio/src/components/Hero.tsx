import { motion } from "framer-motion";
import { siGithub, siWhatsapp } from "simple-icons";
import { profile } from "../data";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useTypewriter } from "../hooks/useTypewriter";
import { BrandIcon } from "./BrandIcon";
import { LineIcon } from "./LineIcon";
import { Neofetch } from "./Neofetch";

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
          Hola, soy <span className="accent-text">{profile.name}</span>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="typing" aria-live="polite">
          <span className="prompt-sep" aria-hidden="true">
            ${" "}
          </span>
          <span>{typed}</span>
          <span className="caret" aria-hidden="true" />
        </p>
        <p className="lead">{profile.quote}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contacto">
            Hablemos
          </a>
          <a className="btn btn-ghost" href="#habilidades">
            Ver habilidades
          </a>
        </div>

        {/* En escritorio estos enlaces viven en el Dock */}
        <ul className="social-row" aria-label="Contacto y redes">
          <li>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <BrandIcon icon={siGithub} size={18} mono />
            </a>
          </li>
          <li>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label={`Escribir a ${profile.email}`}>
              <LineIcon name="mail" size={18} />
            </a>
          </li>
          <li>
            <a className="icon-btn" href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <BrandIcon icon={siWhatsapp} size={18} mono />
            </a>
          </li>
          <li>
            <a className="icon-btn" href={profile.phoneHref} aria-label={`Llamar al ${profile.phone}`}>
              <LineIcon name="phone" size={18} />
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Neofetch />
      </motion.div>
    </section>
  );
}
