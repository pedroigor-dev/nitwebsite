import {
  Blocks,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  DatabaseZap,
  FolderKanban,
  GraduationCap,
  Rocket,
  ScanSearch,
  Users,
} from "lucide-react";

export const metrics = [
  { value: "4", label: "trilhas para descobrir onde você rende melhor" },
  { value: "100%", label: "foco em prática, colaboração e portfólio" },
  { value: "UJ", label: "projetos conectados à vida acadêmica" },
];

export const tracks = [
  {
    title: "Desenvolvimento",
    description:
      "Sites, sistemas, APIs e interfaces com boas práticas de produto.",
    icon: Code2,
  },
  {
    title: "Dados e IA",
    description:
      "Modelos, automações, análise de dados e soluções inteligentes.",
    icon: BrainCircuit,
  },
  {
    title: "Pesquisa aplicada",
    description:
      "Prototipagem, validação de ideias e documentação técnica.",
    icon: ScanSearch,
  },
  {
    title: "Produto e design",
    description:
      "Experiências digitais bonitas, úteis e fáceis de apresentar.",
    icon: Blocks,
  },
];

export const processSteps = [
  {
    title: "Inscrição",
    description:
      "Você conta sua área de interesse, repertório e por que quer entrar.",
    icon: GraduationCap,
  },
  {
    title: "Desafio curto",
    description:
      "Uma atividade prática para entendermos seu jeito de raciocinar.",
    icon: Cpu,
  },
  {
    title: "Conversa",
    description:
      "Bate-papo com a coordenação para alinhar disponibilidade e expectativas.",
    icon: Users,
  },
  {
    title: "Imersão",
    description: "Entrada no núcleo, onboarding e escolha do primeiro projeto.",
    icon: Rocket,
  },
];

export const formTracks = [
  "Desenvolvimento",
  "Dados e IA",
  "Pesquisa aplicada",
  "Produto e design",
  "Ainda não sei",
];

export type ApplicationQuestion = {
  id:
    | "name"
    | "email"
    | "course"
    | "period"
    | "track"
    | "portfolio"
    | "availability"
    | "experience"
    | "motivation"
    | "projectIdea";
  label: string;
  placeholder: string;
  type: "text" | "email" | "select" | "textarea";
  options?: string[];
};

export const applicationQuestions: ApplicationQuestion[] = [
  {
    id: "name",
    label: "1. Qual é o seu nome completo?",
    placeholder: "Seu nome",
    type: "text",
  },
  {
    id: "email",
    label: "2. Qual é o seu melhor e-mail?",
    placeholder: "voce@email.com",
    type: "email",
  },
  {
    id: "course",
    label: "3. Qual é o seu curso?",
    placeholder: "Ex: Sistemas de Informação",
    type: "text",
  },
  {
    id: "period",
    label: "4. Em qual período ou fase você está?",
    placeholder: "Ex: 3º período",
    type: "text",
  },
  {
    id: "track",
    label: "5. Qual trilha mais combina com você agora?",
    placeholder: "Selecione uma trilha",
    type: "select",
    options: formTracks,
  },
  {
    id: "portfolio",
    label: "6. Tem GitHub, LinkedIn, portfólio ou algum projeto para mostrar?",
    placeholder: "Cole um link ou escreva 'ainda não tenho'",
    type: "text",
  },
  {
    id: "availability",
    label: "7. Qual é sua disponibilidade semanal para o NITE?",
    placeholder: "Ex: 4 horas por semana, tardes de terça e quinta",
    type: "text",
  },
  {
    id: "experience",
    label: "8. O que você já estudou ou construiu na área de tecnologia?",
    placeholder: "Linguagens, ferramentas, cursos, projetos, pesquisas...",
    type: "textarea",
  },
  {
    id: "motivation",
    label: "9. Por que você quer entrar no NITE?",
    placeholder: "Conte o que te chama atenção no núcleo.",
    type: "textarea",
  },
  {
    id: "projectIdea",
    label: "10. Se pudesse criar um projeto para a UJ, qual seria?",
    placeholder: "Descreva uma ideia, problema ou oportunidade.",
    type: "textarea",
  },
];

export const highlights = [
  { label: "Projetos reais", icon: DatabaseZap },
  { label: "Mentoria técnica", icon: Bot },
  { label: "Portfólio vivo", icon: FolderKanban },
];

export const instagramGallery = [
  {
    title: "UJ Start 2026",
    caption: "Recepção, computação e novas jornadas no campus.",
    type: "Reel",
    href: "https://www.instagram.com/nite.uj/",
    tone: "blue",
    image: "/698248918_17940673077207122_3036707871108492213_n..webp",
  },
  {
    title: "Mostra de Projetos",
    caption: "Ideias, protótipos e criatividade em comunidade.",
    type: "Post",
    href: "https://www.instagram.com/nite.uj/",
    tone: "magenta",
    image: "/694171547_17939660118207122_7528045475335552102_n..webp",
  },
  {
    title: "LabHack",
    caption: "Bastidores de tecnologia, setup e experimentação.",
    type: "Carrossel",
    href: "https://www.instagram.com/nite.uj/",
    tone: "silver",
    image: "/693379129_17939660169207122_3434339759855252725_n..webp",
  },
  {
    title: "Sebrae Supernova",
    caption: "Inovação, empreendedorismo e conexões fora da sala.",
    type: "Post",
    href: "https://www.instagram.com/nite.uj/",
    tone: "navy",
    image: "/686948923_17939660160207122_3137477203241295706_n..webp",
  },
  {
    title: "Boas-vindas NITE",
    caption: "Novos integrantes, troca e energia de equipe.",
    type: "Post",
    href: "https://www.instagram.com/nite.uj/p/DGYPL7duaAL/",
    tone: "team",
    image: "/686498134_17939660127207122_278527269541088021_n..webp",
  },
  {
    title: "Recepção dos calouros",
    caption: "Computação, engenharias e gestores do NITE.",
    type: "Post",
    href: "https://www.instagram.com/nite.uj/p/DNCTAkxtcpZ/",
    tone: "lab",
    image: "/698737958_17940676572207122_7778920465496738866_n..webp",
  },
  {
    title: "LabIA",
    caption: "Conteúdo visual, IA e cultura de criação.",
    type: "Arte",
    href: "https://www.instagram.com/nite.uj/",
    tone: "violet",
    image: "/723491297_17945489472207122_4201853329223784369_n..webp",
  },
  {
    title: "Data Center",
    caption: "Infraestrutura, redes e bastidores que fazem tudo rodar.",
    type: "Reel",
    href: "https://www.instagram.com/nite.uj/",
    tone: "dark",
    image: "/725756610_17945489481207122_8304646454186441998_n..webp",
  },
];
