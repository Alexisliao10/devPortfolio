import type { Project } from "app/types";
import TechStackWrapper from "./TechStack/TechStackWrapper";

export default function ProjectCard({ title, scURL, stacks }: Project) {
  return (
    <div className="group mb-8 inline-block rounded-xl bg-tertiaryColor pt-2 transition-colors hover:bg-black hover:text-white">
      <h4 className="mb-2 ml-4 text-xl font-medium text-black group-hover:text-white">
        {title}
      </h4>
      <img
        src={scURL}
        className="h-56 w-80"
        draggable={false}
        alt={`captura de imagen de ${title} `}
      />
      <TechStackWrapper stacks={stacks} />
      <div className="mt-4 flex justify-between rounded-b-lg bg-black px-4 py-3 text-xs">
        <a
          className="text-linkColor underline hover:text-orange-300"
          href={
            "https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Echar un vistazo
        </a>
        <a
          className="underline hover:text-orange-400"
          href={
            "https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
