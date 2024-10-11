import { GridProps } from "@/app/types/customTypes";
import clsx from "clsx";

export default function Grid({ className, children, flexDirection = "row", isVariation = false }: GridProps) {

    return (
        <div className={clsx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            isVariation ? "gap-0" : "gap-6",
            className)}>
            {children}
        </div>
    )
}