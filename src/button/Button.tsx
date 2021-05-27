import * as React from "react";
import { getContrast } from "../utils/getContrast";

type Variants = "solid" | "outlined" | "filled" | "transparent";
type Style = { background: string; color: string; borderColor: string };
type Colors = "primary" | "warning" | "light" | "dark";
type Themes = { [index: string]: string };

interface ButtonProps {
  className?: string;
  color?: Colors | string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: Variants;
}

const themeColors: Themes = {
  primary: "#126e82",
  warning: "#c72819",
  light: "#eeebdd",
  dark: "#1b1717",
};

const getColor = (color: Colors | string): string => {
  return themeColors[color] || color;
};

const getStyles = (color: string, variant: string): Style => {
  const c = getColor(color);
  if (variant === "solid") {
    return {
      background: c,
      color: getContrast(color),
      borderColor: "transparent",
    };
  }
  return {
    background: variant === "filled" ? "#eeebdd" : "transparent",
    color: c,
    borderColor: c,
  };
};

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  children,
  className,
  color = "primary",
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`button__ button__${variant} ${className}`}
      onClick={onClick}
      style={getStyles(color, variant)}
    >
      {children}
    </button>
  );
};
