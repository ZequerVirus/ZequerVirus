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
  github: "https://github.com/ZequerVirus",
  repo: "https://github.com/ZequerVirus/ZequerVirus",
  avatar: "https://avatars.githubusercontent.com/u/104024109?v=4",
  hireable: true,
};

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

// Capas de Clean Architecture, de la más externa a la más interna
export const layers = [
  { label: "Frameworks", note: "Web, DB, cloud" },
  { label: "Adaptadores", note: "Interfaces y repositorios" },
  { label: "Casos de uso", note: "Lógica de aplicación" },
  { label: "Entidades", note: "Reglas de negocio" },
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

export const stack: Record<string, string[]> = {
  Lenguajes: ["Rust", "Python", "TypeScript", "JavaScript", "Dart", "SQL"],
  "Backend & Arquitectura": ["Clean Architecture", "SOLID", "UML", "REST API"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Linux", "CIDR"],
  "Bases de datos": ["PostgreSQL", "MySQL"],
  Mobile: ["Flutter"],
  "IA & Blockchain": ["Claude", "OpenCode", "Machine Learning", "Stellar"],
  "Gestión": ["Scrum", "Product Owner"],
};

export const engineerSnippet = `struct Engineer {
    role:       "Backend Engineer & Software Architect",
    focus:      ["APIs robustas", "Alta disponibilidad", "Orquestación de contenedores"],
    principles: ["SOLID", "Clean Architecture", "Buenas prácticas", "Documentación"],
    ai:         ["Agentes de IA", "Claude", "OpenCode", "Machine Learning"],
    learning:   ["Stellar", "Web3"],
}`;
