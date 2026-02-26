import { cn } from "@/lib/utils";

type InputVariants = "outline" | "primary" | "secondary";

interface InputProps {
  variant?: InputVariants;
  className?: string;
  placeholder?: string;
  type?: string;
  name?: string;
}

const InputStyle: Record<
  InputVariants,
  { container: string; background: string }
> = {
  primary: {
    container:
      "rounded-[20px] py-7 px-10 font-popins font-normal placeholder:text-grey-olive outline-none border-none",
    background: "bg-dust-grey/10",
  },
  secondary: {
    container:
      "rounded-[20px] py-7 px-10 font-popins font-normal placeholder:text-grey-olive outline-none border-none",
    background: "bg-white",
  },
  outline: {
    container:
      "rounded-[20px] py-7 px-10 font-popins font-normal placeholder:text-grey-olive outline-none border-none",
    background: "bg-transparent",
  },
};

export const Input = ({
  variant = "primary",
  placeholder,
  type,
  name,
  className
}: InputProps) => {
  const styles = InputStyle[variant];
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={cn("input", styles.background, styles.container, className)}
      />
    </>
  );
};
