import { GalleryProps } from "@/app/types/customTypes"
import { PrismicNextImage } from "@prismicio/next"
import clsx from "clsx"

export default function Gallery({ className, mainImage, gallery }: GalleryProps) {
    return (
        <div
            className={clsx("w-full overflow-x-hidden flex flex-col max-w-screen-2xl", className)}
        >
            {/* row 1 */}
            <div className="bg-red-200 basis-1/2 max-h-[50vh]">
                <PrismicNextImage placeholder="blur" blurDataURL={mainImage?.url ?? undefined} field={mainImage} quality={100} className="object-cover h-full" />
            </div>

            {/* row 2 */}
            <div className="flex basis-1/2 overflow-x-scroll snap-x snap-mandatory max-h-[50vh]">
                {
                    gallery?.map((item, index: number) => (
                        <PrismicNextImage key={index} placeholder="blur" blurDataURL={item.photo?.url ?? undefined} field={item.photo} height={1000} quality={100} className="h-full w-auto shrink-0 snap-start relative object-cover" />
                    ))
                }

            </div>

        </div>
    )
}
