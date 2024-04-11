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
  stacks: Icons;
  gitHubLink?: string;
  deployLink?: string;
}

export type Icons = (
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
)[];
