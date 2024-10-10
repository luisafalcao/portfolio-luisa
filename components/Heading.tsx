import clsx from "clsx"

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xxl" | "xl" | "lg" | "md" | "sm";
    fontFamily?: "primary" | "secondary"
    children: React.ReactNode;
    className?: string;
}

export default function Heading({ as: Comp = "h2", className, children, size = "md", fontFamily = "primary" }: HeadingProps) {
    return (
        <Comp className={clsx("lowercase font-bold my-3",
            size === "xxl" && "text-5xl md:text-7xl",
            size === "xl" && "text-4xl md:text-5xl",
            size === "lg" && "text-3xl md:text-4xl",
            size === "md" && "text-2xl md:text-3xl",
            size === "sm" && "text-1xl md:text-2xl",
            fontFamily === "primary" && "font-primary",
            fontFamily === "secondary" && "font-secondary",
            className
        )}>
            {children}
        </Comp>
    )
}