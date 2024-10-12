import { ButtonProps } from "@/app/types/customTypes"
import clsx from "clsx"

export default function Button({ as: Comp = "button", className, children, category = "", currentCategory, setCurrentCategory }: ButtonProps) {
    return (
        <Comp className={clsx("lowercase",
            category === currentCategory ? "border-t-dark border-t-2 md:border-t-0 md:border-static" : "md:border-effect vertical",
            className
        )} onClick={() => setCurrentCategory(category)}>
            {children}
        </Comp>
    )
}

