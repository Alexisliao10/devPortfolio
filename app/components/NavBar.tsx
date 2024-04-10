"use client";

import { useEffect, useState } from "react";

export default function NavBar({ isOpen }: { isOpen: boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setIsMobile(true);
    }
  }, []);
  return (
    <ul
      className={` ${(isMobile && "dropdown") || ""} ${(isOpen && isMobile && "is-open opacity-100") || "-z-10 opacity-0"} absolute flex flex-col items-end gap-7 bg-secondaryColor/50 px-6 py-4 text-lg text-titleText sm:relative sm:top-0 sm:z-0 sm:flex-row sm:items-center sm:bg-transparent sm:text-xl sm:opacity-100`}
    >
      <li>
        <a href="#">Sobre mí</a>
      </li>
      <li>
        <a href="#">Proyectos</a>
      </li>
      <li>
        <a href="#">Conocimientos</a>
      </li>
      <li>
        <a href="#">Contacto</a>
      </li>
    </ul>
  );
}
