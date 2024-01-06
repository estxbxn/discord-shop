import { MouseEventHandler } from "react";

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
  color?: string;
  width?: number;
  height?: number;
  children?: string | JSX.Element | JSX.Element[];
};
