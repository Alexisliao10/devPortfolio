"use client";
import { useState } from "react";
import type { MenuState } from "app/types";
import HamMenu from "app/ui/HamMenu";
import NavBar from "./NavBar";

export default function Header() {
  const [menu, setMenu] = useState<MenuState>({
    closeIcon: "hidden",
    hamIcon: "block",
    isOpen: false,
  });

  const clickHandle = () => {
    if (menu.isOpen === false) {
      setMenu({
        ...menu,
        closeIcon: "block",
        hamIcon: "hidden",
        isOpen: true,
      });
    } else {
      setMenu({
        ...menu,
        closeIcon: "hidden",
        hamIcon: "block",
        isOpen: false,
      });
    }
  };

  return (
    <header className="relative flex h-11 w-full justify-end bg-primaryColor px-6 sm:h-20">
      <HamMenu
        onClick={clickHandle}
        hamIconClass={menu.hamIcon}
        closeIconClass={menu.closeIcon}
      />
      <NavBar isOpen={menu.isOpen || false} setMenu={clickHandle} />
    </header>
  );
}
