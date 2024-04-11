import TechStackWrapper from "app/ui/TechStack/TechStackWrapper";
import {
  backEndStacks,
  devTools,
  frontEndStacks,
  learningStacks,
} from "app/data/portfolio";

export default function Knowledge() {
  return (
    <section className="mt-4 space-y-8">
      <h2 className="text-xl text-titleText">Conocimientos</h2>
      <h3 className="text-titleText">Front-End</h3>
      <TechStackWrapper
        stacks={frontEndStacks}
        className="flex flex-wrap gap-3"
        classNameCard="text-base"
      />
      <h3 className="text-titleText">Back-End</h3>
      <TechStackWrapper
        stacks={backEndStacks}
        className="flex flex-wrap gap-3"
        classNameCard="text-base"
      />
      <h3 className="text-titleText">Herramientas</h3>
      <TechStackWrapper
        stacks={devTools}
        className="flex flex-wrap gap-3"
        classNameCard="text-base"
      />
      <h2 className="text-xl text-titleText">Aprendiendo</h2>
      <TechStackWrapper
        stacks={learningStacks}
        className="flex flex-wrap gap-3"
        classNameCard="text-base"
      />
    </section>
  );
}
