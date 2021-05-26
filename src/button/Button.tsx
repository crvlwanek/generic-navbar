import * as React from "react";

interface ButtonProps {
  theme?: "light" | "dark";
  style?: "solid" | "outlined";
}

export const Button: React.FC<ButtonProps> = ({
  theme = "light",
  style = "solid",
  children,
}) => {
  return (
    <button className={`button__ button__${theme}-${style}`}>{children}</button>
  );
};
