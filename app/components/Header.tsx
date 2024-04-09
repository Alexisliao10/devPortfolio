"use client";
import NavBar from "@/components/NavBar";
import HamMenu from "./HamMenu";
import { useState } from "react";
import type { menuState } from "app/types";

export default function Header() {
  const [menu, setMenu] = useState<menuState>({
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
    <header className="relative flex h-11 w-full justify-end bg-primaryColor px-6">
      <HamMenu
        onClick={clickHandle}
        hamIconClass={menu.hamIcon}
        closeIconClass={menu.closeIcon}
      />
      <NavBar isOpen={menu.isOpen || false} />
    </header>
  );
}
