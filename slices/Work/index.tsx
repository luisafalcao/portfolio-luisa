import { Content, ImageField, PrismicDocument, Slice } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HeroSlice } from "@/prismicio-types";
// import { AllSlicePrimaryMainImage } from "@/app/types/customTypes";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Link from "next/link";
import GridItem from "@/components/GridItem";

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
        <Heading className="mb-10">Work</Heading>
        {slice.primary.navigation.map((item, index) => (
          <Heading as="h4" key={index} size="xs" fontFamily="secondary">{item.category}</Heading>
        ))}
        <Heading as="h4" size="xs" fontFamily="secondary"><Link href="/projects">See All</Link></Heading>
      </div>

      <Grid className="basis-2/3">
        {context.map((project: PrismicDocument, index: number) => {

          const infoSourceSlice: Slice = project.data.slices.find((slice: HeroSlice) => slice.slice_type === 'hero')
          const image: ImageField<never> | null = infoSourceSlice?.primary.main_image as ImageField<never> || null;

          return (
            <GridItem key={index} data={project} index={index} image={image} />
          )
        })}
      </Grid>
    </Bounded>
  );
};

export default Work;
