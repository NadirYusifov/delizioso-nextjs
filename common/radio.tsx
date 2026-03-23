import { cn } from "@/lib/utils";

type RadioTypes =
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "info"
    | "error"
    | "custom";

interface RadioProps {
    variant?: RadioTypes;
    className?: string;
    name?: string;
    id?: string;
    type: string;
    value: string;
    defaultChecked?: boolean;
    disabled?: boolean;
}

const RadioStyle: Record<RadioTypes, { container: string; size: string }> = {
    neutral: {
        container: "radio-neutral",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    primary: {
        container: "radio-primary",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    secondary: {
        container: "radio-secondary",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    accent: {
        container: "radio-accent",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    success: {
        container: "radio-success",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    warning: {
        container: "radio-warning",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    info: {
        container: "radio-info",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    error: {
        container: "radio-error",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
    custom: {
        container:
            "bg-transparent border-dark-coffee checked:bg-transparent checked:text-medium-jungle checked:border-medium-jungle",
        size: "radio-xs sm:radio-sm md:radio-md lg:radio-lg xl:radio-xl",
    },
};

export const Radio = ({
    variant = "neutral",
    type,
    value,
    className,
    defaultChecked,
    disabled,
    id,
    name,
}: RadioProps) => {
    const styles = RadioStyle[variant]
    return (
        <>
            <input
                type={type}
                value={value}
                id={id}
                name={name}
                disabled={disabled}
                defaultChecked={defaultChecked}
                className={cn(styles.container, styles.size, className)}
            />
        </>
    );
};
