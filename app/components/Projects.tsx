"use client";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import ProjectCard from "app/ui/ProjectCard";
import { myProjects } from "app/data/portfolio";

export default function Projects() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {});
  return (
    <section id="projects" className="h-full w-full">
      <h2 className="mb-4 mt-10 text-xl text-titleText sm:mt-20 sm:px-8 sm:text-2xl">
        Proyectos:
      </h2>
      <div
        className="h-auto w-full touch-auto space-x-4 overflow-x-scroll whitespace-nowrap sm:mt-10 sm:space-x-7"
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
