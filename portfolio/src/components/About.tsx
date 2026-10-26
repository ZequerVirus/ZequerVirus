import { engineerSnippet, profile } from "../data";
import { CredlyBadge } from "./CredlyBadge";
import { LineIcon } from "./LineIcon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Window } from "./Window";

// Capas de Clean Architecture, de la más externa a la más interna
const tree = [
  ["frameworks/", "Web, DB, cloud"],
  ["adapters/", "Interfaces y repositorios"],
  ["use_cases/", "Lógica de aplicación"],
  ["entities/", "Reglas de negocio"],
];

const specs = [
  ["Rol", "Fullstack & Software Architect"],
  ["Lenguaje", "Rust · Python · TypeScript"],
  ["Cloud", "AWS · Cloudflare · K8s"],
  ["Enfoque", "Producto · IA / Agentes"],
];

export function About() {
  const lines = engineerSnippet.split("\n");

  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle path="~/sobre-mi" command="cat README.md" title="Arquitectura, fullstack y producto" />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-main">
            <p className="about-text">{profile.bio}</p>

            <Window title="engineer.rs — nvim" variant="terminal">
              <pre className="code-block">
                {lines.map((line, i) => (
                  <span key={i} className="code-line">
                    <span className="line-no" aria-hidden="true">
                      {i + 1}
                    </span>
                    <code>{line}</code>
                  </span>
                ))}
              </pre>
            </Window>

            <Window title="carlos — zsh" variant="terminal">
              <p className="term-line">
                <span className="term-ok">➜</span> <span className="term-path">~/proyecto</span> tree src
              </p>
              <pre className="tree">
                <span className="term-path">src/</span>
                {tree.map(([dir, note], i) => (
                  <span key={dir} className="tree-row">
                    {"\n"}
                    {i === tree.length - 1 ? "└── " : "├── "}
                    <span className="term-path">{dir.padEnd(13)}</span>
                    <span className="term-comment"># {note}</span>
                  </span>
                ))}
              </pre>
            </Window>
          </Reveal>

          <Reveal delay={0.15} className="about-side">
            <Window title="Acerca de Carlos" className="profile-card">
              <img className="avatar" src={profile.avatar} alt={`Avatar de ${profile.name}`} width={96} height={96} />
              <h3>{profile.name}</h3>
              <p className="muted">@{profile.handle}</p>
              <dl className="specs">
                {specs.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <a className="btn btn-ghost btn-block" href={profile.github} target="_blank" rel="noreferrer">
                Perfil de Git
              </a>
            </Window>

            <Window title="Certificación" className="cert-card">
              <CredlyBadge badgeId={profile.credlyBadgeId} />
              <a className="cert-link" href={profile.credlyUrl} target="_blank" rel="noreferrer">
                Verificar en Credly
                <LineIcon name="arrow" size={14} />
              </a>
            </Window>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
