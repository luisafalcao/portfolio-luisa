import { PrismicNextImage } from "@prismicio/next"
import Link from "next/link"

export default function Grid({ projects }) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                projects.map((project, index) => {
                    const { slugs } = project
                    const { title } = project.data

                    const heroSlice = project.data.slices.find(slice => slice.slice_type === 'hero')
                    const { alt } = heroSlice.primary.main_image

                    return (
                        <Link key={index} href={`/${slugs[0]}`}>
                            <div className="relative min-w-40 min-h-36 p-5 flex justify-center items-center">
                                <PrismicNextImage field={heroSlice.primary.main_image} alt={alt} style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute" }}	></PrismicNextImage>
                                <p className="relative z-10">{title}</p>
                            </div>
                        </Link>
                    )
                })
            }

        </div>
    )
}