import type { StacksOption } from "app/types";
import TechStackCard from "./TechStackCard";

export default function TechStackWrapper({ stacks }: { stacks: StacksOption }) {
  return (
    <div className="mt-4 flex w-full justify-center gap-1">
      {stacks.map((stack, index) => (
        <TechStackCard key={stack + index} stack={stack} />
      ))}
    </div>
  );
}
