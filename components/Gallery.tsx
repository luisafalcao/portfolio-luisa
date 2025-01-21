import { GalleryProps } from "@/app/types/customTypes";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import Scroller from "./Scroller";

export default function Gallery({ className, mainImage, gallery }: GalleryProps) {
    return (
        <div className={clsx("w-full overflow-x-hidden flex flex-col max-w-screen-2xl", className)}>
            {/* row 1 */}
            <div className="basis-1/2 md:max-h-[50vh]">
                <PrismicNextImage placeholder="blur" blurDataURL={mainImage?.url ?? undefined} field={mainImage} quality={100} className="object-cover h-full" />
            </div>

            {/* row 2 */}
            <div className="relative basis-1/2 md:max-h-[50vh]">
                <div id="scrollable-gallery" className="flex overflow-x-scroll snap-x snap-mandatory ">
                    {gallery?.map((item, index) => (
                        <PrismicNextImage key={index} placeholder="blur" blurDataURL={item.photo?.url ?? undefined} field={item.photo} height={1000} quality={100} className="h-auto w-auto shrink-0 snap-start object-cover" />
                    ))}
                </div>
                <Scroller /> {/* Place Scroller within the same relative container */}
            </div>
        </div>
    );
}
