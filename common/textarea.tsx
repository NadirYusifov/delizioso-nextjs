import { cn } from "@/lib/utils";

type TextareaVariants = "primary" | "secondary" | "outline";

interface TextareaProps {
  variants?: TextareaVariants;
  className?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  name?: string;
}

const TextareaStyle: Record<
  TextareaVariants,
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

export const Textarea = ({
  variants = "primary",
  className,
  rows,
  cols,
  name,
  placeholder,
}: TextareaProps) => {
  const styles = TextareaStyle[variants];
  return (
    <>
      <textarea
        name={name}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className={cn(
          "textarea",
          styles.background,
          styles.container,
          className,
        )}
      />
    </>
  );
};
