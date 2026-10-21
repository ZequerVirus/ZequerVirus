import { useEffect, useState } from "react";
import { profile } from "../data";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Portapapeles no disponible: el correo sigue visible como enlace
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <Reveal>
          <div className="contact-box card">
            <SectionTitle eyebrow="04 — Contacto" title="¿Hablamos de tu próximo proyecto?" />
            <p className="muted contact-text">
              Si buscas backends robustos, arquitectura limpia o integrar agentes de IA en producción, escríbeme.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button type="button" className="btn btn-ghost" onClick={copyEmail}>
                {copied ? "¡Copiado!" : "Copiar correo"}
              </button>
            </div>

            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub · @{profile.handle}
              </a>
              <a href={profile.repo} target="_blank" rel="noreferrer">
                Repositorio del perfil
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
