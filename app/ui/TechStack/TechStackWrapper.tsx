import type { StackIcons } from "app/types";
import TechStackCard from "./TechStackCard";

export default function TechStackWrapper({
  stacks,
  className,
  classNameCard,
}: {
  stacks: StackIcons;
  className?: string;
  classNameCard?: string;
}) {
  return (
    <div className={className}>
      {stacks.map((stack, index) => (
        <TechStackCard
          key={stack + index + Math.random}
          stack={stack}
          className={classNameCard}
        />
      ))}
    </div>
  );
}
