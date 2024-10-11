import { ButtonProps } from "@/app/types/customTypes"
import clsx from "clsx"

export default function Button({ as: Comp = "button", className, children, size = "md", fontFamily = "primary", category, setCurrentCategory }: ButtonProps) {
    return (
        <Comp className={clsx("lowercase my-3",
            size === "xxl" && "text-5xl md:text-6xl lg:text-7xl",
            size === "xl" && "text-4xl md:text-5xl lg:text-6xl",
            size === "lg" && "text-3xl md:text-4xl lg:text-5xl",
            size === "md" && "text-2xl md:text-3xl lg:text-4xl",
            size === "sm" && "text-1xl md:text-2xl lg:text-3xl",
            size === "xs" && "text-sm md:text-1xl lg:text-2xl",
            fontFamily === "primary" && "font-primary font-bold",
            fontFamily === "secondary" && "font-secondary font-medium",
            className
        )} onClick={() => setCurrentCategory(category)}>
            {children}
        </Comp>
    )
}