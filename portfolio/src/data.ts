import {
  siClaude,
  siDart,
  siDocker,
  siFlutter,
  siGit,
  siGithub,
  siGithubactions,
  siGnubash,
  siJavascript,
  siKubernetes,
  siLinux,
  siMarkdown,
  siMysql,
  siOpencode,
  siPostgresql,
  siPython,
  siRust,
  siStellar,
  siTypescript,
  siUml,
} from "simple-icons";
import { awsGlyph, mlGlyph, sqlGlyph, type BrandGlyph } from "./brandGlyphs";
import type { IconName } from "./components/LineIcon";

// Datos tomados del perfil de GitHub (ZequerVirus) y su README.
export const profile = {
  name: "Carlos Sequeiros",
  handle: "ZequerVirus",
  role: "Backend Engineer & Software Architect",
  bio: "Especializado en Software Architecture, Clean Architecture y AWS. Construyo APIs robustas, pipelines CI/CD, apps mobile, orquestación de contenedores y agentes de IA en producción.",
  quote: "Diseño y construyo backends con Rust, Clean Architecture y AWS. Me apasiona la arquitectura de software, la documentación clara y los sistemas que escalan sin romperse.",
  typing: [
    "Backend Engineer | Rust + Clean Architecture",
    "Software Architect | AWS + K8s + CI/CD",
    "AI Agents | Claude, OpenCode",
    "Mobile | Flutter",
    "Backends robustos y de alta disponibilidad",
  ],
  email: "sequeiros.dc44@gmail.com",
  phone: "+591 75522732",
  phoneHref: "tel:+59175522732",
  whatsapp: "https://wa.me/59175522732",
  github: "https://github.com/ZequerVirus",
  repo: "https://github.com/ZequerVirus/ZequerVirus",
  avatar: "https://avatars.githubusercontent.com/u/104024109?v=4",
  hireable: true,
};

export type Tone = "blue" | "violet" | "teal" | "amber" | "rose" | "green";

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#stack", label: "Stack" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#contacto", label: "Contacto" },
];

// Capas de Clean Architecture, de la más externa a la más interna
export const layers = [
  { label: "Frameworks", note: "Web, DB, cloud" },
  { label: "Adaptadores", note: "Interfaces y repositorios" },
  { label: "Casos de uso", note: "Lógica de aplicación" },
  { label: "Entidades", note: "Reglas de negocio" },
];

interface Skill {
  title: string;
  text: string;
  tone: Tone;
  icon: IconName;
  items: string[];
}

export const engineeringSkills: Skill[] = [
  {
    title: "Arquitectura de software",
    text: "Diseño sistemas desacoplados y mantenibles, con decisiones documentadas que el equipo puede seguir.",
    tone: "violet",
    icon: "layers",
    items: ["Clean Architecture", "SOLID", "Patrones de diseño", "UML · ADRs"],
  },
  {
    title: "Desarrollo backend",
    text: "APIs robustas y servicios de alta disponibilidad con failover, priorizando rendimiento y fiabilidad.",
    tone: "blue",
    icon: "server",
    items: ["Rust", "Python", "APIs REST", "Alta disponibilidad"],
  },
  {
    title: "Cloud & DevOps",
    text: "Infraestructura en AWS con contenedores orquestados, pipelines repetibles y costos controlados.",
    tone: "teal",
    icon: "cloud",
    items: ["AWS", "Docker · Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Control de versiones y calidad",
    text: "Flujos de trabajo con Git, revisiones de código y código testeable que envejece bien.",
    tone: "green",
    icon: "branch",
    items: ["Git · GitHub", "Code review", "Testing", "Documentación"],
  },
  {
    title: "IA & Agentes",
    text: "Agentes de IA en producción y automatización real de procesos con modelos de lenguaje.",
    tone: "amber",
    icon: "spark",
    items: ["Agentes de IA", "Claude", "OpenCode", "Machine Learning"],
  },
  {
    title: "Producto & metodologías",
    text: "Como Product Owner conecto negocio y tecnología, priorizando lo que aporta valor.",
    tone: "rose",
    icon: "target",
    items: ["Product Owner", "Scrum", "Backlog", "Historias de usuario"],
  },
];

export const csFundamentals: Omit<Skill, "items">[] = [
  {
    title: "Redes",
    text: "Segmentación de red, subnetting y CIDR para infraestructuras seguras.",
    tone: "teal",
    icon: "network",
  },
  {
    title: "Bases de datos",
    text: "Modelado relacional, SQL y consultas eficientes en PostgreSQL y MySQL.",
    tone: "blue",
    icon: "database",
  },
  {
    title: "Sistemas operativos",
    text: "Linux, shell scripting, procesos y contenedores.",
    tone: "green",
    icon: "terminal",
  },
  {
    title: "Algoritmos y estructuras de datos",
    text: "La base para escribir código eficiente y escalable.",
    tone: "violet",
    icon: "code",
  },
  {
    title: "Sistemas distribuidos",
    text: "Alta disponibilidad, failover y escalado horizontal.",
    tone: "amber",
    icon: "distributed",
  },
];

export const principles = [
  { title: "Clean Architecture", text: "Capas desacopladas, testeables y mantenibles." },
  { title: "SOLID", text: "Código que envejece bien y escala con el equipo." },
  { title: "Documentación", text: "Diagramas UML, ADRs y READMEs que hablan por sí solos." },
  { title: "CI/CD", text: "Despliegues repetibles, rápidos y sin drama." },
  { title: "Cloud AWS + K8s", text: "Alta disponibilidad, red segmentada, costos controlados." },
  { title: "IA & Agentes", text: "Automatización real con Claude, OpenCode y ML." },
];

export const focus = [
  "APIs robustas",
  "Alta disponibilidad y failover",
  "Orquestación de contenedores",
  "Apps mobile",
  "Agentes de IA",
  "Web3 (aprendiendo Stellar)",
];

export interface Tech {
  name: string;
  icon: BrandGlyph;
}

export const stackGroups: Record<string, Tech[]> = {
  Lenguajes: [
    { name: "Rust", icon: siRust },
    { name: "Python", icon: siPython },
    { name: "TypeScript", icon: siTypescript },
    { name: "JavaScript", icon: siJavascript },
    { name: "Dart", icon: siDart },
    { name: "SQL", icon: sqlGlyph },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: awsGlyph },
    { name: "Docker", icon: siDocker },
    { name: "Kubernetes", icon: siKubernetes },
    { name: "GitHub Actions", icon: siGithubactions },
    { name: "Linux", icon: siLinux },
    { name: "Bash", icon: siGnubash },
  ],
  "Git & docs": [
    { name: "Git", icon: siGit },
    { name: "GitHub", icon: siGithub },
    { name: "UML", icon: siUml },
    { name: "Markdown", icon: siMarkdown },
  ],
  Datos: [
    { name: "PostgreSQL", icon: siPostgresql },
    { name: "MySQL", icon: siMysql },
  ],
  Mobile: [{ name: "Flutter", icon: siFlutter }],
  "IA & Web3": [
    { name: "Claude", icon: siClaude },
    { name: "OpenCode", icon: siOpencode },
    { name: "Machine Learning", icon: mlGlyph },
    { name: "Stellar", icon: siStellar },
  ],
};

export const allTech = Object.values(stackGroups).flat();

export const engineerSnippet = `struct Engineer {
    role:       "Backend Engineer & Software Architect",
    focus:      ["APIs robustas", "Alta disponibilidad", "Orquestación de contenedores"],
    principles: ["SOLID", "Clean Architecture", "Buenas prácticas", "Documentación"],
    ai:         ["Agentes de IA", "Claude", "OpenCode", "Machine Learning"],
    learning:   ["Stellar", "Web3"],
}`;
