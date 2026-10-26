import { solutions } from "../data";
import { LineIcon } from "./LineIcon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

// Soluciones contadas en lenguaje de cliente: qué problema resuelven y qué gana
export function Solutions() {
  return (
    <section id="soluciones" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle path="~/soluciones" command="cat servicios.md" title="Cómo puedo ayudarte" />
        </Reveal>

        <div className="solutions-grid">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 0.05}>
              <article className={`card solution-card tone-${solution.tone}`}>
                <span className="icon-badge">
                  <LineIcon name={solution.icon} />
                </span>
                <h3>{solution.title}</h3>
                <p className="muted">{solution.text}</p>
                <p className="solution-result">
                  <LineIcon name="check" size={16} />
                  <span>{solution.result}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card solutions-cta">
            <div>
              <h3>¿Tienes un reto en mente?</h3>
              <p className="muted">Cuéntame qué necesitas y te propongo un camino claro, sin tecnicismos.</p>
            </div>
            <a className="btn btn-primary" href="#contacto">
              Hablemos de tu proyecto
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
