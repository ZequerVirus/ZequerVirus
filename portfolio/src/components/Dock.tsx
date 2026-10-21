import { siGithub, siWhatsapp } from "simple-icons";
import { profile } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import { BrandIcon } from "./BrandIcon";
import { LineIcon, type IconName } from "./LineIcon";

const sections: { id: string; label: string; icon: IconName }[] = [
  { id: "inicio", label: "Inicio", icon: "home" },
  { id: "sobre-mi", label: "Sobre mí", icon: "user" },
  { id: "habilidades", label: "Habilidades", icon: "layers" },
  { id: "stack", label: "Stack", icon: "code" },
  { id: "filosofia", label: "Filosofía", icon: "target" },
  { id: "contacto", label: "Contacto", icon: "mail" },
];

const sectionIds = sections.map((s) => s.id);

// Dock inferior al estilo macOS: secciones a la izquierda, enlaces externos tras el separador
export function Dock() {
  const active = useActiveSection(sectionIds);

  return (
    <nav className="dock" aria-label="Dock">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`dock-item${active === s.id ? " is-active" : ""}`}
              aria-label={s.label}
              aria-current={active === s.id ? "location" : undefined}
              data-label={s.label}
            >
              <LineIcon name={s.icon} size={22} />
            </a>
          </li>
        ))}
        <li className="dock-sep" aria-hidden="true" />
        <li>
          <a
            className="dock-item"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            data-label="GitHub"
          >
            <BrandIcon icon={siGithub} size={22} mono />
          </a>
        </li>
        <li>
          <a
            className="dock-item"
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            data-label="WhatsApp"
          >
            <BrandIcon icon={siWhatsapp} size={22} mono />
          </a>
        </li>
        <li>
          <a
            className="dock-item"
            href={profile.phoneHref}
            aria-label={`Llamar al ${profile.phone}`}
            data-label="Teléfono"
          >
            <LineIcon name="phone" size={22} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
