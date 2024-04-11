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
  },
  {
    title: "AlMovie",
    scURL: "/images/sc-almovie.jpg",
    stacks: ["HTML", "JavaScript", "Tailwind"],
  },
  {
    title: "TodoApp",
    scURL: "/images/sc-react-todo-app.jpg",
    stacks: ["React", "CSS"],
  },
  {
    title: "Platzi Travel",
    scURL: "/images/sc-platzi-travel.jpg",
    stacks: ["HTML", "Tailwind"],
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
          />
        ))}
      </div>
    </section>
  );
}
