import TechStackWrapper from "app/ui/TechStack/TechStackWrapper";
import {
  backEndStacks,
  devTools,
  frontEndStacks,
  learningStacks,
} from "app/data/portfolio";

export default function Knowledge() {
  return (
    <section id="knowledge" className="mt-4">
      <h2 className="text-xl text-titleText  sm:mt-20 sm:px-8 sm:text-2xl">
        Conocimientos
      </h2>
      <div className="mt-8 space-y-8 sm:grid sm:h-auto sm:grid-cols-2 sm:grid-rows-[80px_1fr_70px_90px] sm:items-center sm:space-y-0 sm:rounded-2xl sm:bg-white">
        <h3 className="col-start-1 row-start-1 font-bold text-titleText sm:ml-20 sm:place-self-center sm:text-xl  sm:text-secondaryColor">
          Front-End
        </h3>
        <TechStackWrapper
          stacks={frontEndStacks}
          className="flex flex-wrap gap-3 sm:col-start-1 sm:row-start-2 sm:ml-20 sm:self-start"
          classNameCard="text-base sm:text-lg"
        />
        <h3 className="col-start-2 row-start-1 font-bold text-titleText sm:ml-20 sm:place-self-center sm:text-xl sm:text-secondaryColor">
          Back-End
        </h3>
        <TechStackWrapper
          stacks={backEndStacks}
          className="flex flex-wrap gap-3 sm:col-start-2 sm:row-start-2 sm:ml-20 sm:self-start"
          classNameCard="text-base sm:text-lg"
        />
        <h3 className="col-span-full row-start-3 font-bold text-titleText sm:place-self-center sm:text-xl sm:text-secondaryColor">
          Herramientas
        </h3>
        <TechStackWrapper
          stacks={devTools}
          className="col-span-full row-start-4 flex flex-wrap gap-3 sm:place-self-center"
          classNameCard="text-base sm:text-lg"
        />
      </div>
      <h2 className="text-xl text-titleText sm:my-10 sm:text-2xl">
        Aprendiendo
      </h2>
      <TechStackWrapper
        stacks={learningStacks}
        className="flex flex-wrap gap-3"
        classNameCard="text-base sm:text-lg"
      />
    </section>
  );
}
