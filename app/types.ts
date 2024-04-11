import { MouseEventHandler } from "react";

export interface MenuState {
  closeIcon: string;
  hamIcon: string;
  isOpen?: boolean;
}

export interface HamMenuProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  hamIconClass: string;
  closeIconClass: string;
}

export interface Project {
  title: string;
  scURL: string;
  stacks: StackIcons;
  gitHubLink?: string;
  deployLink?: string;
}

export type StackIcons = (
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "React"
  | "TypeScript"
  | "Tailwind"
  | "Figma"
  | "Git"
  | "NextJs"
  | "GitHub"
  | "Sass"
  | "Webpack"
  | "Bootstrap"
  | "NodeJs"
  | "Visual Studio Code"
  | "PostgreSQL"
  | "Express"
  | "Prisma"
  | "Python"
)[];
