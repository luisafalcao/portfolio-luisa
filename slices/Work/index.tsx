import { Content, PrismicDocument } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { HeroSlice } from "@/prismicio-types";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Link from "next/link";

/*** Props for `Work`. */
export type WorkProps = SliceComponentProps<Content.WorkSlice> & {
  context: PrismicDocument[]
};

/*** Component for "Work" Slices. */
const Work = ({ slice, context }: WorkProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="basis-1/3">
        <Heading>Work</Heading>
        {slice.primary.navigation.map((item, index) => (
          <Heading as="h4" key={index} size="xs" fontFamily="secondary">{item.category}</Heading>
        ))}
        <Heading as="h4" size="xs" fontFamily="secondary"><Link href="/projects">See All</Link></Heading>
      </div>

      <Grid className="basis-2/3">
        {context.map((project: PrismicDocument, index: number) => {
          const { uid } = project
          const { title } = project.data

          console.log(uid)
          const heroSlice = project.data.slices.find((slice: HeroSlice) => slice.slice_type === 'hero')
          const { alt } = heroSlice.primary.main_image

          if (!uid) {
            console.warn(`Project with index ${index} has a null or undefined uid.`);
            return null;
          }

          return (
            <Link key={index} href={`/${uid[0]}`}>
              <div className="relative min-w-40 min-h-36 p-5 flex justify-center items-center">
                <PrismicNextImage field={heroSlice.primary.main_image} alt={alt} style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute" }}	></PrismicNextImage>
                <p className="relative z-10">{title}</p>
              </div>
            </Link>
          )
        })}
      </Grid>
    </Bounded>
  );
};

export default Work;
