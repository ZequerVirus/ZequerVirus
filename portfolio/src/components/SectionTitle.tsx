interface Props {
  path: string;
  command: string;
  title: string;
}

// Encabezado de sección escrito como un prompt de shell
export function SectionTitle({ path, command, title }: Props) {
  return (
    <header className="section-header">
      <p className="prompt">
        <span className="prompt-user">carlos@zequervirus</span>
        <span className="prompt-sep">:</span>
        <span className="prompt-path">{path}</span>
        <span className="prompt-sep">$</span> {command}
      </p>
      <h2 className="section-title">{title}</h2>
    </header>
  );
}
