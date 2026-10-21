import type { CSSProperties } from "react";
import type { BrandGlyph } from "../brandGlyphs";

function luminance(hex: string) {
  const n = parseInt(hex, 16);
  const r = ((n >> 16) & 255) / 255;
  const g = ((n >> 8) & 255) / 255;
  const b = (n & 255) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

interface Props {
  icon: BrandGlyph;
  size?: number;
  mono?: boolean;
}

// Logo con su color oficial; los colores muy oscuros o muy claros se ajustan para mantener contraste en cada tema
export function BrandIcon({ icon, size = 28, mono = false }: Props) {
  const lum = luminance(icon.hex);
  const contrast = lum < 0.2 ? " is-dark-brand" : lum > 0.72 ? " is-light-brand" : "";

  return (
    <svg
      className={`brand-icon${mono ? " is-mono" : contrast}`}
      style={{ "--brand": `#${icon.hex}` } as CSSProperties}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
