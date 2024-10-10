import clsx from "clsx"

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode
}

export default function Bounded({ as: Comp = "section", className, children, ...restProps }: BoundedProps) {
    return (
        <Comp className={clsx("mx-auto w-3/4", className)} {...restProps}>
            <div className="md:flex gap-3 align-center justify-center items-center max-w-md m-auto">
                {children}
            </div>
        </Comp>
    )
}