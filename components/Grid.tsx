import clsx from "clsx";

type GridProps = {
    className?: string;
    children: React.ReactNode;
    flexDirection?: "row" | "column";
}

export default function Grid({ className, children, flexDirection = "row" }: GridProps) {

    return (
        <div className={clsx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
            {children}
        </div>
    )
}