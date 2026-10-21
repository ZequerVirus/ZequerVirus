import { useEffect, useState } from "react";
import { navLinks } from "../data";
import type { Theme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <nav className="container navbar-inner" aria-label="Principal">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          CS<span>.</span>
        </a>

        <ul className={`nav-links${open ? " is-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
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
