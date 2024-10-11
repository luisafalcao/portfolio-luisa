import { BoundedProps } from "@/app/types/customTypes"
import clsx from "clsx"

export default function Bounded({ as: Comp = "section", className, children, flexDirection = "row", ...restProps }: BoundedProps) {
    return (
        <Comp className={clsx("mx-auto w-4/5 max-w-5xl min-h-screen justify-center flex flex-col", className)} {...restProps}>
            <div className={clsx("md:flex w-full gap-10 align-center justify-center items-center m-auto",
                flexDirection === "column" && "flex-col",
                flexDirection === "row" && "flex-row",
            )}>
                {children}
            </div>
        </Comp>
    )
}