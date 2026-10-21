import { AnimatePresence, motion } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { allTech, stackGroups } from "../data";
import { BrandIcon } from "./BrandIcon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const ALL = "Todos";
const filters = [ALL, ...Object.keys(stackGroups)];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`marquee${reverse ? " is-reverse" : ""}`}>
      <div className="marquee-track">
        {[...allTech, ...allTech].map((tech, i) => (
          <span key={`${tech.name}-${i}`} className="marquee-item">
            <BrandIcon icon={tech.icon} size={16} mono />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  const [active, setActive] = useState(ALL);
  const items = active === ALL ? allTech : stackGroups[active];

  return (
    <section id="stack" className="section tone-teal">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="03 — Stack" title="Lenguajes, herramientas y tecnologías" />
        </Reveal>

        <Reveal>
          <div className="filters" role="group" aria-label="Filtrar tecnologías por categoría">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter${active === filter ? " is-active" : ""}`}
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
              >
                {active === filter && (
                  <motion.span
                    layoutId="filter-pill"
                    className="filter-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="filter-label">{filter}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="logo-grid">
          <AnimatePresence mode="popLayout">
            {items.map((tech) => (
              <motion.li
                key={tech.name}
                layout
                className="logo-tile"
                style={{ "--brand": `#${tech.icon.hex}` } as CSSProperties}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
              >
                <BrandIcon icon={tech.icon} size={34} />
                <span>{tech.name}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
