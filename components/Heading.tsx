import clsx from "clsx"

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xl" | "lg" | "md" | "sm";
    children: React.ReactNode;
    className?: string;
}

export default function Heading({ as: Comp = "h2", className, children, size = "md" }: HeadingProps) {
    return (
        <Comp className={clsx("lowercase font-bold font-primary my-3",
            size === "xl" && "text-4xl md:text-5xl",
            size === "lg" && "text-3xl md:text-4xl",
            size === "md" && "text-2xl md:text-3xl",
            size === "sm" && "text-1xl md:text-2xl",
            className
        )}>
            {children}
        </Comp>
    )
}