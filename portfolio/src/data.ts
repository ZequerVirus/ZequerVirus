import {
  siClaude,
  siCloudflare,
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
  role: "Fullstack Engineer & Software Architect",
  bio: "Especializado en Software Architecture, Clean Architecture, AWS y Cloudflare. Construyo productos de punta a punta: APIs robustas, apps web y móviles, pipelines CI/CD, orquestación de contenedores y agentes de IA en producción.",
  quote: "Diseño y construyo productos completos con Rust, Clean Architecture, AWS y Cloudflare. Me apasiona la arquitectura de software, la documentación clara y los sistemas que escalan sin romperse.",
  typing: [
    "Fullstack Engineer | Rust + Clean Architecture",
    "Software Architect | AWS + Cloudflare + K8s",
    "AI Agents | Claude, OpenCode",
    "Mobile | Flutter",
    "Productos completos, de la idea a la nube",
  ],
  email: "sequeiros.dc44@gmail.com",
  phone: "+591 75522732",
  phoneHref: "tel:+59175522732",
  whatsapp: "https://wa.me/59175522732",
  github: "https://github.com/ZequerVirus",
  repo: "https://github.com/ZequerVirus/ZequerVirus",
  avatar: "https://avatars.githubusercontent.com/u/104024109?v=4",
  credlyBadgeId: "9ea805f3-0d85-48b5-9e80-dfcba36d03af",
  credlyUrl: "https://www.credly.com/badges/9ea805f3-0d85-48b5-9e80-dfcba36d03af",
  hireable: true,
};

export type Tone = "blue" | "violet" | "teal" | "amber" | "rose" | "green";

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#stack", label: "Stack" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#contacto", label: "Contacto" },
];

export interface Solution {
  title: string;
  text: string;
  result: string;
  tone: Tone;
  icon: IconName;
}

// Soluciones explicadas para clientes, sin tecnicismos
export const solutions: Solution[] = [
  {
    title: "De la idea al producto final",
    text: "Me encargo de que tu web, tu app y el servicio que las conecta funcionen como una sola pieza, sin depender de varios proveedores.",
    result: "Un solo responsable de principio a fin.",
    tone: "blue",
    icon: "layers",
  },
  {
    title: "Aplicaciones que no se caen",
    text: "Preparo tu sistema para que siga funcionando aunque algo salga mal, evitando interrupciones que afecten a tus clientes o a tu negocio.",
    result: "Menos caídas, más confianza.",
    tone: "teal",
    icon: "distributed",
  },
  {
    title: "Nube sin sorpresas en la factura",
    text: "Configuro y ordeno tus servicios en la nube de AWS y Cloudflare, automatizo las actualizaciones y controlo los costos para que pagues solo lo necesario.",
    result: "Despliegues rápidos y gastos predecibles.",
    tone: "violet",
    icon: "cloud",
  },
  {
    title: "Automatización con inteligencia artificial",
    text: "Creo asistentes que responden consultas, clasifican información o realizan tareas repetitivas para que tu equipo gane tiempo.",
    result: "Tu equipo se enfoca en lo importante.",
    tone: "amber",
    icon: "spark",
  },
  {
    title: "Una app para tus clientes",
    text: "Desarrollo aplicaciones móviles para Android e iOS, cuidadas en rendimiento y pensadas para que tus usuarios las disfruten.",
    result: "Más cercanía con tus usuarios.",
    tone: "rose",
    icon: "smartphone",
  },
  {
    title: "Decisiones técnicas explicadas claro",
    text: "Documento qué se construyó, por qué y cómo puede crecer, en un lenguaje que puedes entender sin ser técnico.",
    result: "Control y claridad sobre tu producto.",
    tone: "green",
    icon: "document",
  },
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
    title: "Desarrollo fullstack",
    text: "APIs robustas y servicios de alta disponibilidad, con interfaces web y móviles cuidadas, priorizando rendimiento y fiabilidad.",
    tone: "blue",
    icon: "server",
    items: ["Rust · Python", "TypeScript", "APIs REST", "Alta disponibilidad"],
  },
  {
    title: "Cloud & DevOps",
    text: "Infraestructura en AWS y Cloudflare con contenedores orquestados, pipelines repetibles y costos controlados.",
    tone: "teal",
    icon: "cloud",
    items: ["AWS · Cloudflare", "Docker · Kubernetes", "CI/CD", "GitHub Actions"],
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
  { title: "AWS + Cloudflare + K8s", text: "Alta disponibilidad, red segmentada, costos controlados." },
  { title: "IA & Agentes", text: "Automatización real con Claude, OpenCode y ML." },
];

export const focus = [
  "Productos fullstack",
  "APIs robustas",
  "Alta disponibilidad y failover",
  "Orquestación de contenedores",
  "Apps mobile",
  "Agentes de IA",
  "Cloudflare",
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
    { name: "Cloudflare", icon: siCloudflare },
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
    role:       "Fullstack Engineer & Software Architect",
    focus:      ["Productos fullstack", "Alta disponibilidad", "Orquestación de contenedores"],
    principles: ["SOLID", "Clean Architecture", "Buenas prácticas", "Documentación"],
    cloud:      ["AWS", "Cloudflare", "Kubernetes", "CI/CD"],
    ai:         ["Agentes de IA", "Claude", "OpenCode", "Machine Learning"],
    learning:   ["AI Engineer", "Stellar", "Web3"],
}`;
