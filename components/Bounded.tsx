import clsx from "clsx"

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
    flexDirection?: "row" | "column";
}

export default function Bounded({ as: Comp = "section", className, children, flexDirection = "row", ...restProps }: BoundedProps) {
    return (
        <Comp className={clsx("mx-auto w-3/4 max-w-5xl min-h-screen justify-center flex flex-col", className)} {...restProps}>
            <div className={clsx("md:flex w-full gap-10 align-center justify-center items-center m-auto",
                flexDirection === "column" && "flex-col",
                flexDirection === "row" && "flex-row",
            )}>
                {children}
            </div>
        </Comp>
    )
}