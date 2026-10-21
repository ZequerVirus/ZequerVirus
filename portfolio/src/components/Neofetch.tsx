import { profile } from "../data";
import { Window } from "./Window";

const info: [string, string][] = [
  ["Role", "Backend Engineer"],
  ["Arch", "Clean Architecture · SOLID"],
  ["Langs", "Rust · Python · TypeScript"],
  ["Cloud", "AWS · Docker · Kubernetes"],
  ["CI/CD", "GitHub Actions"],
  ["AI", "Claude · OpenCode · ML"],
  ["Mobile", "Flutter"],
  ["Learning", "Stellar · Web3"],
];

const palette = ["red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple"];

// Salida tipo neofetch con los datos del perfil
export function Neofetch() {
  return (
    <Window title="carlos — zsh — 80×24" variant="terminal" className="neofetch-window">
      <p className="term-line">
        <span className="term-ok">➜</span> <span className="term-path">~</span> neofetch
      </p>
      <div className="neofetch">
        <img
          className="neofetch-avatar"
          src={profile.avatar}
          alt={`Avatar de ${profile.name}`}
          width={112}
          height={112}
        />
        <div className="neofetch-info">
          <p className="neofetch-host">
            <span>carlos</span>@<span>zequervirus</span>
          </p>
          <p className="neofetch-rule" aria-hidden="true">
            ----------------------
          </p>
          <dl className="neofetch-list">
            {info.map(([key, value]) => (
              <div key={key} className="neofetch-row">
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
            <div className="neofetch-row">
              <dt>Status</dt>
              <dd className="term-ok">{profile.hireable ? "open to work (remote)" : "busy"}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="neofetch-palette" aria-hidden="true">
        {palette.map((c) => (
          <span key={c} style={{ background: `var(--c-${c})` }} />
        ))}
      </div>
      <p className="term-line">
        <span className="term-ok">➜</span> <span className="term-path">~</span>{" "}
        <span className="caret" aria-hidden="true" />
      </p>
    </Window>
  );
}
