import { GalleryProps } from "@/app/types/customTypes"
import clsx from "clsx"

export default function Gallery({ className, content }: GalleryProps) {
    return (
        <section
            className={clsx("w-full overflow-x-hidden grid grid-cols-2 grid-auto-rows", className)}
        >
            <p className=" bg-slate-100">1</p>
            <p className=" bg-slate-200">2</p>
            <div className="col-span-2 flex overflow-x-auto snap-x snap-mandatory">
                <p className=" bg-slate-300 snap-start basis-1/2 shrink-0" >3</p>
                <p className=" bg-slate-400 snap-start basis-1/2 shrink-0" >4</p>
                <p className=" bg-slate-500 snap-start basis-1/2 shrink-0" >5</p>
                <p className=" bg-slate-600 snap-start basis-1/2 shrink-0" >6</p>
                <p className=" bg-slate-700 snap-start basis-1/2 shrink-0" >7</p>
            </div>

        </section>
    )
}


{/* {
                slice.primary.photos.map((item, index) => (
                    <PrismicNextImage key={index} field={item.photo} width={1000} height={1000} quality={100} style={{ objectFit: "cover" }} />
                ))
            } */}