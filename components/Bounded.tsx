import { BoundedProps } from "@/app/types/customTypes"
import clsx from "clsx"

export default function Bounded({ as: Comp = "section", className, children, flexDirection = "row", isVariation = false, ...restProps }: BoundedProps) {
    return (
        <Comp className={clsx("mx-auto w-full min-h-screen flex flex-col justify-center", className,
            !isVariation && "px-20 py-20"
        )} {...restProps}>
            <div className={clsx("md:flex w-full gap-10",
                flexDirection === "column" && "flex-col",
                flexDirection === "row" && "flex-row",
                !isVariation && "align-center justify-center items-center m-auto max-w-5xl"
            )}>
                {children}
            </div>
        </Comp>
    )
}