import { stack } from "../data";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const allItems = Object.values(stack).flat();

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`marquee${reverse ? " is-reverse" : ""}`}>
      <div className="marquee-track">
        {[...allItems, ...allItems].map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="03 — Stack" title="Tecnologías con las que trabajo" />
        </Reveal>

        <div className="stack-grid">
          {Object.entries(stack).map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.05}>
              <div className="card stack-card">
                <h3>{group}</h3>
                <div className="chips">
                  {items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="marquee-wrap" aria-hidden="true">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
