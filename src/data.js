export const profile = {
  name: 'Bruna Carrassai',
  roles: ['Front-end', 'Back-end', 'Fullstack'],
  email: 'carrassaibruna@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bruna-carrassai-da-silva-234852232/',
  github: 'https://github.com/Froginha',
  whatsapp: 'https://contate.me/bruna-carrassai',
  cv: './curriculum.pdf',
}

export const nav = [
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
]

export const focus = [
  {
    icon: 'code',
    title: 'Desenvolvimento',
    text: 'Interfaces, código e soluções funcionais.',
  },
  {
    icon: 'grid',
    title: 'UX/UI Design',
    text: 'Experiências intuitivas e interfaces bem pensadas.',
  },
  {
    icon: 'gamepad',
    title: 'Games e arte',
    text: 'Jogos e experimentação visual.',
  },
]

export const timeline = [
  {
    when: '2012',
    title: 'Primeiros passos',
    text: 'Personalizando temas no Tumblr, aprendi HTML e CSS na prática.',
  },
  {
    when: 'Depois',
    title: 'Mais linguagens',
    text: 'JavaScript, Python, Java, C# e PHP ampliaram o que eu podia criar.',
  },
  {
    when: 'Hoje',
    title: 'Front-end e UX/UI',
    text: 'Aplicações completas como PyLearn e DailyPlan, além de games e arte 2D.',
  },
]

export const experience = [
  {
    company: 'Verdecard Quero-Quero',
    place: 'Cachoeirinha, RS',
    period: 'Jun 2026 – Atual',
    current: true,
    roles: [
      {
        title: 'Estagiária de Design UX/UI – Canais Digitais',
        groups: [
          {
            label: 'UX/UI',
            bullets: [
              'Criação de wireframes e protótipos no Figma.',
              'Jornadas e fluxos de navegação centrados no usuário.',
              'Soluções com foco em usabilidade e consistência visual.',
            ],
          },
          {
            label: 'Front-end',
            dev: true,
            bullets: [
              'Desenvolvimento e manutenção do site da Quero-Quero.',
              'Implementação de interfaces e melhorias em HTML, CSS, JavaScript e PHP.',
            ],
          },
        ],
      },
    ],
  },
  {
    company: 'Código Kid',
    place: 'Cachoeirinha, RS',
    period: 'Out 2025 – Jun 2026',
    roles: [
      {
        title: 'Instrutora de Tecnologia e Programação',
        period: 'Mai 2026 – Jun 2026',
        bullets: [
          'Aulas de desenvolvimento web: HTML, CSS, JavaScript e WordPress.',
          'Ensino de lógica de programação aplicada a páginas e projetos web.',
        ],
      },
      {
        title: 'Estagiária de TI e Programação',
        period: 'Out 2025 – Jun 2026',
        bullets: [
          'Atividades práticas de construção de sites e interfaces.',
          'Apoio no ensino de Python, robótica com Arduino e noções de informática.',
        ],
      },
    ],
  },
  {
    company: 'Vem pra Uno',
    place: 'Cachoeirinha, RS',
    period: 'Mai 2023 – Set 2023',
    roles: [
      {
        title: 'Estagiária NOC (Network Operations Center)',
        bullets: ['Suporte técnico e monitoramento de sistemas.'],
      },
    ],
  },
]

export const education = [
  {
    title: 'Engenharia de Software',
    school: 'Centro Universitário Cesuca',
    degree: 'Bacharelado',
    period: '2026 – 2029 · Em andamento',
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    school: 'Centro Universitário Cesuca',
    degree: 'Tecnólogo',
    period: '2022 – 2026 · Em andamento',
  },
]

export const languages = [
  { name: 'Inglês', level: 'Intermediário' },
  { name: 'Espanhol', level: 'Básico' },
]

// Cada linha vira uma fileira de badges (estilo GitHub). Edite à vontade.
// icon = nome do ícone em Skills.jsx (todos os badges usam a cor do tema)
export const skillRows = [
  {
    label: 'Linguagens',
    items: [
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'Java', icon: 'FaJava' },
      { name: 'C#', icon: 'TbBrandCSharp' },
      { name: 'PHP', icon: 'SiPhp' },
    ],
  },
  {
    label: 'Front-end e frameworks',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Angular', icon: 'SiAngular' },
      { name: 'Sass', icon: 'SiSass' },
    ],
  },
  {
    label: 'Back-end',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express', icon: 'SiExpress' },
    ],
  },
]

export const projects = [
  {
    title: 'PyLearn',
    cover: { tone: 'a', label: 'plataforma-python', icons: ['SiReact', 'SiPython', 'SiNodedotjs', 'SiMongodb'] },
    description:
      'Plataforma interativa para aprender Python: o código é escrito e executado no navegador, com correção automática, pontos e histórico de tentativas.',
    tags: ['React', 'Node.js', 'MongoDB', 'Python'],
    github: 'https://github.com/brunacarrassai/plataforma-python',
    demo: 'https://cerulean-fairy-57ef67.netlify.app/login',
  },
  {
    title: 'DailyPlan',
    cover: { tone: 'b', label: 'dailyplan', icons: ['SiAngular', 'SiTypescript'] },
    description:
      'Aplicação web para organizar as tarefas do dia e acompanhar a produtividade, com agenda, prioridades e progresso.',
    tags: ['Angular', 'TypeScript'],
    github: 'https://github.com/brunacarrassai/dailyplan',
    demo: 'https://github.com/brunacarrassai/dailyplan',
  },
  { title: 'Em breve', soon: true },
]
