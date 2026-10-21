import { AnimatePresence, motion } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { allTech, stackGroups } from "../data";
import { BrandIcon } from "./BrandIcon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Window } from "./Window";

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

// El stack se presenta como una ventana de Finder: categorías en la barra lateral
export function Stack() {
  const [active, setActive] = useState(ALL);
  const items = active === ALL ? allTech : stackGroups[active];

  return (
    <section id="stack" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle path="~/stack" command="ls --color" title="Lenguajes, herramientas y tecnologías" />
        </Reveal>

        <Reveal>
          <Window title={active === ALL ? "Stack" : `Stack › ${active}`} className="finder">
            <div className="finder-layout">
              <div className="finder-sidebar" role="group" aria-label="Filtrar tecnologías por categoría">
                <p className="sidebar-heading">Categorías</p>
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
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="filter-label">{filter}</span>
                    <span className="filter-count">{filter === ALL ? allTech.length : stackGroups[filter].length}</span>
                  </button>
                ))}
              </div>

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
                      transition={{ duration: 0.22 }}
                    >
                      <span className="logo-icon">
                        <BrandIcon icon={tech.icon} size={30} />
                      </span>
                      <span>{tech.name}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            </div>
          </Window>
        </Reveal>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
