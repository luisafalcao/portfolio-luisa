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
                    "absolute text-center text-sm hidden group-hover:block transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto top-1/2 transform  -translate-y-1/2",
                    direction === "previous"
                        ? "left-full mr-2"
                        : "right-full ml-2")}>
                {currentLang === 'en-us' ? direction : directionTranslation}
            </div>
        </Link>
    )
}
