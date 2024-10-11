'use client'
import { Content, ImageField, KeyTextField, PrismicDocument, Slice } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HeroSlice } from "@/prismicio-types";
// import { AllSlicePrimaryMainImage } from "@/app/types/customTypes";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Link from "next/link";
import GridItem from "@/components/GridItem";
import { useState } from "react";
import Button from "@/components/Button";

/*** Props for `Work`. */
export type WorkProps = SliceComponentProps<Content.WorkSlice> & {
  context: PrismicDocument[]
};

/*** Component for "Work" Slices. */
const Work = ({ slice, context }: WorkProps): JSX.Element => {
  const [currentCategory, setCurrentCategory] = useState<KeyTextField>('Coding')

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="basis-1/3 flex flex-col items-start">
        <Heading className="mb-10">Work</Heading>

        {slice.primary.navigation.map((item, index) => {
          return <Button key={index} size="xs" fontFamily="secondary" category={item.category} setCurrentState={setCurrentCategory}>{item.category}</Button>
        })}

        <Heading as="h4" size="xs" fontFamily="secondary"><Link href="/projects">See All</Link></Heading>
      </div>
      <Grid className="basis-2/3">
        {

          context
            .filter((project: PrismicDocument) => {
              return project.tags[0] === currentCategory
            })
            .map((project: PrismicDocument, index: number) => {
              const infoSourceSlice: Slice = project.data.slices.find((slice: HeroSlice) => slice.slice_type === 'hero')
              const image: ImageField<never> | null = infoSourceSlice?.primary.main_image as ImageField<never> || null;

              return (
                <GridItem key={index} data={project} index={index} image={image} />
              )
            })
        }
        {/* {context.map((project: PrismicDocument, index: number) => {
          const { tags } = project
          console.log(tags)
          const infoSourceSlice: Slice = project.data.slices.find((slice: HeroSlice) => slice.slice_type === 'hero')
          const image: ImageField<never> | null = infoSourceSlice?.primary.main_image as ImageField<never> || null;

          return (
            <GridItem key={index} data={project} index={index} image={image} />
          )
        })} */}
      </Grid>
    </Bounded>
  );
};

export default Work;
