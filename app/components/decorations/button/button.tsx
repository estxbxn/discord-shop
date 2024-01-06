"use client";

import styles from "./button.module.css";
import { ButtonProps } from "./types";

function Button({
  onClick,
  backgroundColor,
  color,
  width,
  height,
  children,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
      style={{
        background: backgroundColor ? backgroundColor : "transparent",
        color: color ? color : "white",
        width: width ? width + "px" : "100%",
        height: height ? height + "px" : "100%",
      }}
    >
      <div className={styles.buttonContent}>{children}</div>
    </button>
  );
}

export default Button;
