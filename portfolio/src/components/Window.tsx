import type { FormEventHandler, ReactNode, Ref } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "terminal" | "app";
  as?: "div" | "form";
  onSubmit?: FormEventHandler<HTMLFormElement>;
  formRef?: Ref<HTMLFormElement>;
}

// Ventana estilo macOS: barra de título con los tres "semáforos" y el contenido debajo
export function Window({ title, children, className = "", variant = "app", as = "div", onSubmit, formRef }: Props) {
  const header = (
    <div className="window-bar">
      <span className="traffic" aria-hidden="true">
        <i className="t-close" />
        <i className="t-min" />
        <i className="t-max" />
      </span>
      <span className="window-title">{title}</span>
    </div>
  );
  const classes = `window window-${variant} ${className}`;

  if (as === "form") {
    return (
      <form ref={formRef} className={classes} onSubmit={onSubmit}>
        {header}
        <div className="window-body">{children}</div>
      </form>
    );
  }

  return (
    <div className={classes}>
      {header}
      <div className="window-body">{children}</div>
    </div>
  );
}
