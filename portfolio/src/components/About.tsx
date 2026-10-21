import { engineerSnippet, profile } from "../data";
import { CredlyBadge } from "./CredlyBadge";
import { LineIcon } from "./LineIcon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { TiltCard } from "./TiltCard";

export function About() {
  return (
    <section id="sobre-mi" className="section tone-blue">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="01 — Sobre mí" title="Arquitectura, backend y producto" />
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-text">{profile.bio}</p>
            <pre className="code-block">
              <code>{engineerSnippet}</code>
            </pre>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltCard className="profile-card">
              <img className="avatar" src={profile.avatar} alt={`Avatar de ${profile.name}`} width={88} height={88} />
              <h3>{profile.name}</h3>
              <p className="muted">@{profile.handle}</p>
              <p className="muted">Rust · Clean Architecture · AWS · IA/Agentes</p>
              <a className="btn btn-ghost btn-block" href={profile.github} target="_blank" rel="noreferrer">
                Perfil de GitHub
              </a>
            </TiltCard>

            <div className="card cert-card">
              <p className="eyebrow">Certificación</p>
              <CredlyBadge badgeId={profile.credlyBadgeId} />
              <a className="cert-link" href={profile.credlyUrl} target="_blank" rel="noreferrer">
                Verificar en Credly
                <LineIcon name="arrow" size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
