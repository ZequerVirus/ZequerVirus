import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Theme } from "../hooks/useTheme";
import { LineIcon } from "./LineIcon";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navLinks.map((link) => link.href.slice(1));

const clockFormat = new Intl.DateTimeFormat("es", {
  weekday: "short",
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
});

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);
  return clockFormat.format(now).replace(/,/g, "");
}

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

// Barra de menús al estilo macOS
export function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const clock = useClock();

  return (
    <header className="navbar">
      <nav className="navbar-inner" aria-label="Principal">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <LineIcon name="terminal" size={16} />
          <span>carlos</span>
        </a>

        <ul className={`nav-links${open ? " is-open" : ""}`}>
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <time className="menu-clock">{clock}</time>
          <button
            type="button"
            className={`menu-btn${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
