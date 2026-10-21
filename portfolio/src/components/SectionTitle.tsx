interface Props {
  eyebrow: string;
  title: string;
}

export function SectionTitle({ eyebrow, title }: Props) {
  return (
    <header className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </header>
  );
}
