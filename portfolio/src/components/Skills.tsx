import { csFundamentals, engineeringSkills } from "../data";
import { LineIcon } from "./LineIcon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { TiltCard } from "./TiltCard";

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <Reveal>
          <SectionTitle path="~/habilidades" command="ls -la" title="Ingeniería de software e informática" />
        </Reveal>

        <Reveal>
          <h3 className="subheading">Ingeniería de software</h3>
        </Reveal>
        <div className="skills-grid">
          {engineeringSkills.map((skill, i) => (
            <Reveal key={skill.title} delay={i * 0.06}>
              <TiltCard className={`skill-card tone-${skill.tone}`}>
                <span className="icon-badge">
                  <LineIcon name={skill.icon} />
                </span>
                <h4>{skill.title}</h4>
                <p className="muted">{skill.text}</p>
                <ul className="skill-tags">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="subheading">Fundamentos de informática</h3>
        </Reveal>
        <div className="fundamentals-grid">
          {csFundamentals.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className={`card fundamental tone-${item.tone}`}>
                <span className="icon-badge">
                  <LineIcon name={item.icon} size={20} />
                </span>
                <h4>{item.title}</h4>
                <p className="muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
