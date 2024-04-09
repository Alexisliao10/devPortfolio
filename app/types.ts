import { MouseEventHandler } from "react";

export interface menuState {
  closeIcon: string;
  hamIcon: string;
  isOpen?: boolean;
}

export interface HamMenuProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  hamIconClass: string;
  closeIconClass: string;
}
