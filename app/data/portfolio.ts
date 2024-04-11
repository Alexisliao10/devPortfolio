import type { StackIcons, Project } from "app/types";

// my projects

export const myProjects: Project[] = [
  {
    title: "Portfolio",
    scURL: "/images/sc-alexis-portfolio.jpg",
    stacks: ["NextJs", "TypeScript", "Tailwind"],
    gitHubLink: "https://github.com/Alexisliao10/devPortfolio",
  },
  {
    title: "AlMovie",
    scURL: "/images/sc-almovie.jpg",
    stacks: ["HTML", "JavaScript", "Tailwind"],
    deployLink: "https://spectacular-paprenjak-dd59d8.netlify.app",
    gitHubLink: "https://github.com/Alexisliao10/ALMOVIE",
  },
  {
    title: "TodoApp",
    scURL: "/images/sc-react-todo-app.jpg",
    stacks: ["React", "CSS"],
    deployLink: "https://curso-react-intro-nine.vercel.app/",
    gitHubLink: "https://github.com/Alexisliao10/react-todo-app",
  },
  {
    title: "Platzi Travel",
    scURL: "/images/sc-platzi-travel.jpg",
    stacks: ["HTML", "Tailwind"],
    deployLink: "#",
    gitHubLink: "https://github.com/Alexisliao10/Platzi-travel",
  },
];

// knowledge
export const frontEndStacks: StackIcons = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind",
  "Sass",
  "Bootstrap",
  "NextJs",
];

export const backEndStacks: StackIcons = ["NodeJs"];

export const devTools: StackIcons = [
  "GitHub",
  "Git",
  "Webpack",
  "Visual Studio Code",
  "Figma",
];

export const learningStacks: StackIcons = [
  "NextJs",
  "PostgreSQL",
  "Express",
  "Prisma",
  "Python",
];
