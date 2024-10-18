import { ArrowProps } from "@/app/types/customTypes";
import Link from "next/link";

export default function Arrow({ direction, targetProject }: ArrowProps) {

    return (
        <Link href={`/${targetProject?.uid}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer" role="button">
                <path strokeLinecap="round" strokeLinejoin="round" d={direction === "left" ? "M15.75 19.5 8.25 12l7.5-7.5" : "m8.25 4.5 7.5 7.5-7.5 7.5"} />
            </svg>
        </Link>
    )
}
