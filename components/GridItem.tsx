import { PrismicNextImage } from "@prismicio/next";
import { GridItemProps } from "@/app/types/customTypes";
import Link from "next/link";
import clsx from "clsx";

export default function GridItem({ className, data, index, image }: GridItemProps) {
    const { uid } = data
    const { title } = data.data

    if (!uid) {
        console.warn(`Project with index ${index} has a null or undefined uid.`);
        return null;
    }

    return (
        <Link href={`/${uid}`} key={data.id}>
            <div className={clsx("group relative w-full min-h-60 p-5 flex justify-center items-center overflow-clip", className)}>
                <PrismicNextImage field={image} style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute" }} className="grayscale group-hover:grayscale-0 group-hover:opacity-30 group-hover:scale-125 transition-all"></PrismicNextImage>
                <p className="relative z-10 scale-0 group-hover:scale-100 transition-all">{title}</p>
            </div>
        </Link>
    )
}