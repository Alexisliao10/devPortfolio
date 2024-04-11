"use client";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import type { Project } from "app/types";
import ProjectCard from "app/ui/ProjectCard";

const myProjects: Project[] = [
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

export default function Projects() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {});
  return (
    <section id="projects" className="h-full w-full">
      <h2 className="mb-4 mt-10 text-xl text-titleText">Proyectos:</h2>
      <div
        className="h-auto w-full touch-auto space-x-4 overflow-x-scroll whitespace-nowrap"
        {...events}
        ref={ref}
      >
        {myProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            scURL={project.scURL}
            stacks={project.stacks}
            gitHubLink={project.gitHubLink}
            deployLink={project.deployLink}
          />
        ))}
      </div>
    </section>
  );
}
