import { ArrowProps } from "@/app/types/customTypes";
import clsx from "clsx";
import Link from "next/link";

export default function Arrow({ direction, targetProject, className, currentLang }: ArrowProps) {
    const directionTranslation = direction === "previous" ? "anterior" : "próximo"

    return (
        <Link href={`/${targetProject?.uid}`} className={clsx("hover:scale-125 transition group", className)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer" role="button">
                <path strokeLinecap="round" strokeLinejoin="round" d={direction === "previous" ? "M15.75 19.5 8.25 12l7.5-7.5" : "m8.25 4.5 7.5 7.5-7.5 7.5"} />
            </svg>
            <div className={
                clsx(
                    "absolute text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    direction === "previous"
                        ? "right-full mr-2 top-1/2 transform -translate-y-1/2 md:opacity-100"
                        : "left-full ml-2 top-1/2 transform -translate-y-1/2 md:opacity-100",
                    "md:block hidden"
                )}>
                {currentLang === 'en-us' ? direction : directionTranslation}
            </div>
        </Link>
    )
}
