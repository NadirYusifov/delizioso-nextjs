import { cn } from "@/lib/utils";
import { MouseEvent } from "react";

type ButtonVariants = "primary" | "secondary" | "outline" | "default";

interface ButtonProps {
  children?: React.ReactNode
  variant?: ButtonVariants;
  className?: string;
  type?: "submit" | "reset" | "button"
  onClick?: (e: MouseEvent<HTMLButtonElement>) => boolean | void;
}

const ButtonStyle: Record<
  ButtonVariants,
  { title: string; container: string; background: string }
> = {
  primary: {
    title: "text-white",
    container: " font-popins",
    background: "bg-dark-orange",
  },
  secondary: {
    title: "text-white",
    container: "font-popins",
    background: "bg-medium-jungle",
  },
  outline: {
    title: "text-dark-coffee",
    container: "font-popins",
    background: "bg-transparent",
  },
  default: {
    title: "text-dark-coffee",
    container: "font-popins",
    background: "bg-white",
  },
};

export function Button({
  variant = "primary",
  className,
  type,
  children,
  onClick
}: ButtonProps) {
  const styles = ButtonStyle[variant];
  return (
    <button
      onClick={onClick}
      className={cn(
        "btn",
        styles.background,
        styles.container,
        styles.title,
        className,
      )}
      type={type}
    >
      {children}
    </button>
  );
}
