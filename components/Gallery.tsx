import { GalleryProps } from "@/app/types/customTypes"
import { PrismicNextImage } from "@prismicio/next"
import clsx from "clsx"

export default function Gallery({ className, mainImage, gallery }: GalleryProps) {
    return (
        <div
            className={clsx("w-full overflow-x-hidden grid grid-cols-2 grid-rows-2 max-w-screen-2xl", className)}
        >
            <div className="relative w-full col-span-2 h-[40vh] md:h-[50vh]">
                <PrismicNextImage field={mainImage} quality={100} className="object-cover h-full" />
            </div>

            <div className="col-span-2 flex snap-x snap-mandatory overflow-x-scroll h-[40vh] md:h-[50vh]">
                {
                    gallery?.map((item, index: number) => (
                        <div key={index} className="basis-1/2 shrink-0 snap-start relative">
                            <PrismicNextImage fill placeholder="blur" blurDataURL={item.photo?.url ?? undefined} field={item.photo} width={1000} height={1000} quality={100} style={{ objectFit: "cover", height: "100%" }} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
