import { profile } from "../data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="muted">Hecho con React + TypeScript</p>
      </div>
    </footer>
  );
}
