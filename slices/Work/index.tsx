'use client'
import { Content, ImageField, KeyTextField, PrismicDocument, Slice } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HeroSlice } from "@/prismicio-types";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Link from "next/link";
import GridItem from "@/components/GridItem";
import { useState } from "react";
import Button from "@/components/Button";
import clsx from "clsx";

/*** Props for `Work`. */
export type WorkProps = SliceComponentProps<Content.WorkSlice> & {
  context: PrismicDocument[]
};

/*** Component for "Work" Slices. */
const Work = ({ slice, context }: WorkProps): JSX.Element => {
  const [currentCategory, setCurrentCategory] = useState<KeyTextField | null>('')
  const isVariation = slice.variation === "fullScreen" ? true : false

  function renderGridItems(array: PrismicDocument[]) {
    let itemsToRender = isVariation ? array : array.slice(0, 6)

    return itemsToRender.map((project: PrismicDocument, index: number) => {
      const infoSourceSlice: Slice = project.data.slices.find((slice: HeroSlice) => slice.slice_type === 'hero')
      const image: ImageField<never> | null = infoSourceSlice?.primary.main_image as ImageField<never> || null;

      return (
        <GridItem key={index} data={project} index={index} image={image} />
      )
    })
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      isVariation={isVariation}
    >
      <div className={clsx("basis-1/3 flex flex-col items-start",
        isVariation && "ml-20 mt-20"
      )}>
        <Heading className="mb-10">Work</Heading>

        {
          slice.primary.navigation.map((item, index) => {
            return <Button key={index} size="xs" fontFamily="secondary" category={item.category} setCurrentCategory={setCurrentCategory} className={clsx(item.category === currentCategory ? "border-static" : "border-effect")}>{item.category}</Button>
          })
        }

        {
          isVariation ?
            <Button size="xs" fontFamily="secondary" category={''} setCurrentCategory={setCurrentCategory} className={clsx(currentCategory === '' ? "border-static" : "border-effect")}>See All</Button> :
            <Heading as="h4" size="xs" fontFamily="secondary" className={clsx(currentCategory === '' ? "border-static" : "border-effect")}><Link href="/projects">See All</Link></Heading>
        }


      </div>
      <Grid className={clsx("basis-2/3",
        isVariation && "gap-0"
      )}>
        {
          currentCategory === '' ?
            renderGridItems(context) :
            renderGridItems(context.filter((project: PrismicDocument) => (project.tags[0] === currentCategory)))
        }
      </Grid>
    </Bounded>
  );
};

export default Work;
