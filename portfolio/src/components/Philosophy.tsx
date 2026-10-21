import { focus, principles } from "../data";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { TiltCard } from "./TiltCard";

export function Philosophy() {
  return (
    <section id="filosofia" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="02 — Filosofía" title="Cómo trabajo y en qué me enfoco" />
        </Reveal>

        <div className="principles-grid">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <TiltCard>
                <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="focus-list" aria-label="Áreas de enfoque">
            {focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
