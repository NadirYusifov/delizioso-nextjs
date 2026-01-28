import { cn } from "@/lib/utils";

type ButtonVariants = "primary" | "secondary" | "outline" | "default";

interface ButtonProps {
  variant?: ButtonVariants;
  title?: string;
  className?: string;
  onClick?: () => boolean | void ;
}

const ButtonStyle: Record<
  ButtonVariants,
  { title: string; container: string; background: string }
> = {
  primary: {
    title: "text-white",
    container: "rounded-full font-popins",
    background: "bg-dark-orange",
  },
  secondary: {
    title: "text-white",
    container: "rounded-full font-popins",
    background: "bg-medium-jungle",
  },
  outline: {
    title: "text-dark-coffee",
    container: "rounded-full font-popins",
    background: "bg-transparent",
  },
  default: {
    title: "text-dark-coffee",
    container: "rounded-full font-popins",
    background: "bg-white",
  },
};

export function Button({ variant = "primary", title, className, onClick }: ButtonProps) {
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
    >
      {title}
    </button>
  );
}
