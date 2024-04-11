import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import type { HamMenuProps } from "app/types";

export default function HamMenu({
  onClick,
  hamIconClass,
  closeIconClass,
}: HamMenuProps) {
  return (
    <div
      className="navMenu z-10 size-8 h-fit cursor-pointer self-center"
      onClick={onClick}
    >
      <Bars3Icon className={hamIconClass} />
      <XMarkIcon className={closeIconClass} />
    </div>
  );
}
