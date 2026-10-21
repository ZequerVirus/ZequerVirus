import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { siGithub, siWhatsapp } from "simple-icons";
import { profile, type Tone } from "../data";
import { BrandIcon } from "./BrandIcon";
import { LineIcon } from "./LineIcon";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

interface Method {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  tone: Tone;
  copy?: string;
  external?: boolean;
}

const methods: Method[] = [
  {
    label: "Correo",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <LineIcon name="mail" size={20} />,
    tone: "blue",
    copy: profile.email,
  },
  {
    label: "Teléfono",
    value: profile.phone,
    href: profile.phoneHref,
    icon: <LineIcon name="phone" size={20} />,
    tone: "teal",
    copy: profile.phone,
  },
  {
    label: "WhatsApp",
    value: "Escríbeme directamente",
    href: profile.whatsapp,
    icon: <BrandIcon icon={siWhatsapp} size={20} mono />,
    tone: "green",
    external: true,
  },
  {
    label: "GitHub",
    value: `@${profile.handle}`,
    href: profile.github,
    icon: <BrandIcon icon={siGithub} size={20} mono />,
    tone: "violet",
    external: true,
  },
];

const emptyForm = { name: "", email: "", message: "" };

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(null), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
    } catch {
      // Portapapeles no disponible: el dato sigue visible como enlace
    }
  };

  const update = (field: keyof typeof emptyForm) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const composeMessage = () =>
    `Hola Carlos, soy ${form.name.trim()} (${form.email.trim()}).\n\n${form.message.trim()}`;

  // El sitio es estático: el formulario abre el correo o WhatsApp con el mensaje ya redactado
  const sendByEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde tu portafolio — ${form.name.trim()}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(composeMessage())}`;
    setStatus("Abriendo tu app de correo con el mensaje listo…");
  };

  const sendByWhatsApp = () => {
    if (!formRef.current?.reportValidity()) return;
    window.open(`${profile.whatsapp}?text=${encodeURIComponent(composeMessage())}`, "_blank", "noopener,noreferrer");
    setStatus("Abriendo WhatsApp con el mensaje listo…");
  };

  return (
    <section id="contacto" className="section tone-rose">
      <div className="container">
        <Reveal>
          <SectionTitle eyebrow="05 — Contacto" title="¿Hablamos de tu próximo proyecto?" />
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <p className="muted contact-intro">
              Si buscas backends robustos, arquitectura limpia o integrar agentes de IA en producción, escríbeme por el
              medio que prefieras. Respondo lo antes posible.
            </p>

            <ul className="contact-methods">
              {methods.map((method) => (
                <li key={method.label} className={`contact-method tone-${method.tone}`}>
                  <span className="icon-badge">{method.icon}</span>
                  <a
                    className="method-body"
                    href={method.href}
                    {...(method.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </a>
                  {method.copy ? (
                    <button
                      type="button"
                      className="icon-btn"
                      onClick={() => copy(method.label, method.copy!)}
                      aria-label={`Copiar ${method.label.toLowerCase()}`}
                      title={copied === method.label ? "¡Copiado!" : "Copiar"}
                    >
                      <LineIcon name={copied === method.label ? "check" : "copy"} size={18} />
                    </button>
                  ) : (
                    <span className="method-arrow" aria-hidden="true">
                      <LineIcon name="arrow" size={18} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form ref={formRef} className="card contact-form" onSubmit={sendByEmail}>
              <h3>Envíame un mensaje</h3>

              <div className="field">
                <label htmlFor="contact-name">Nombre</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  required
                  value={form.name}
                  onChange={update("name")}
                />
              </div>

              <div className="field">
                <label htmlFor="contact-email">Correo</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  required
                  value={form.email}
                  onChange={update("email")}
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto o propuesta"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update("message")}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  <LineIcon name="send" size={18} />
                  Enviar por correo
                </button>
                <button type="button" className="btn btn-whatsapp" onClick={sendByWhatsApp}>
                  <BrandIcon icon={siWhatsapp} size={18} mono />
                  Enviar por WhatsApp
                </button>
              </div>

              <p className="form-status muted" aria-live="polite">
                {status}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
