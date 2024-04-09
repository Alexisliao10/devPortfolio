import { ReactSVG } from "react-svg";
import type { HamMenuProps } from "app/types";

export default function HamMenu({
  onClick,
  hamIconClass,
  closeIconClass,
}: HamMenuProps) {
  return (
    <div className="navMenu h-fit cursor-pointer self-center" onClick={onClick}>
      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute("width", "30px");
          svg.setAttribute("height", "30px");
          const path = svg.querySelector("path");
          path?.setAttribute("stroke", "white");
        }}
        className={hamIconClass}
        src="./icons/menu-svgrepo-com.svg"
      />
      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute("width", "30px");
          svg.setAttribute("height", "30px");
          const path = svg.querySelector("path");
          path?.setAttribute("stroke", "white");
          path?.setAttribute("fill", "white");
        }}
        className={closeIconClass}
        src="./icons/close-svgrepo-com.svg"
      />
    </div>
  );
}
