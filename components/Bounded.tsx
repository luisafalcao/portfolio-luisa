import { BoundedProps } from "@/app/types/customTypes"
import clsx from "clsx"

export default function Bounded({ as: Comp = "section", className, children, flexDirection = "row", isVariation = false, ...restProps }: BoundedProps) {
    return (
        <Comp className={clsx("mx-auto w-full min-h-screen flex flex-col", className,
            !isVariation && "px-10 py-10 md:px-20 md:py-20 justify-center"
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