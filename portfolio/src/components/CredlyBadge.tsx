import { useEffect, useRef } from "react";

const EMBED_SCRIPT = "https://cdn.credly.com/assets/utilities/embed.js";

interface Props {
  badgeId: string;
  width?: number;
  height?: number;
}

// Embed oficial de Credly: su script sustituye el div por un iframe, así que el div
// se crea fuera de React para que React nunca gestione ese nodo
export function CredlyBadge({ badgeId, width = 150, height = 270 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const placeholder = document.createElement("div");
    placeholder.dataset.iframeWidth = String(width);
    placeholder.dataset.iframeHeight = String(height);
    placeholder.dataset.shareBadgeId = badgeId;
    placeholder.dataset.shareBadgeHost = "https://www.credly.com";
    container.replaceChildren(placeholder);

    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, [badgeId, width, height]);

  return <div ref={containerRef} className="credly-badge" style={{ width, minHeight: height }} />;
}
