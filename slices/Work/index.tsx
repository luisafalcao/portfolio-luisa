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
import { motion } from "framer-motion";

/*** Props for `Work`. */
export type WorkProps = SliceComponentProps<Content.WorkSlice> & {
  context: PrismicDocument[]
};

/*** Component for "Work" Slices. */
const Work = ({ slice, context }: WorkProps): JSX.Element => {
  const [currentCategory, setCurrentCategory] = useState<KeyTextField | null>('')
  const isVariation = slice.variation === "fullScreen" ? true : false

  function renderGridItems(array: PrismicDocument[]) {
    const itemsToRender = isVariation ? array : array.slice(0, 6)

    return itemsToRender.length > 0 ?
      itemsToRender.map((project: PrismicDocument, index: number) => {
        const infoSourceSlice: Slice | undefined = project.data.slices.find((slice: HeroSlice) => slice.slice_type === 'hero')

        if (!infoSourceSlice) {
          console.error(`No hero slice found for project ${project.id}`);
          return null;
        }

        const image: ImageField<never> | null = infoSourceSlice?.primary.main_image as ImageField<never> || null;

        return isVariation ? (
          <GridItem data={project} index={index} image={image} />
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}>
            <GridItem data={project} index={index} image={image} />
          </motion.div>
        )
      })
      : null
  }


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      isVariation={isVariation}
      id={slice.slice_type}
      className="bg-medium"
    >
      <div className={clsx("basis-1/3 flex md:flex-col items-center justify-end md:justify-normal md:items-start gap-4 md:gap-1",
        isVariation && "ml-20 mt-20 mr-20 md:mr-0"
      )}>
        <Heading className="md:mb-10 mr-auto md:ml-4">{slice.primary.slice_name}</Heading>

        {
          slice.primary.navigation.map((item, index) => {
            return (
              <Heading
                key={index}
                size="xs"
                fontFamily="secondary">
                <Button
                  category={item.category}
                  setCurrentCategory={setCurrentCategory}
                  currentCategory={currentCategory}>
                  {item.category}
                </Button>
              </Heading>)
          })
        }

        {
          isVariation ?
            (<Heading
              size="xs"
              fontFamily="secondary">
              <Button
                category={''}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}>
                See All
              </Button>
            </Heading>) :
            (<Heading
              as="h4"
              size="xs"
              fontFamily="secondary">
              <Button
                category={''}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}>
                <Link href="/projects">See All</Link>
              </Button>
            </Heading>)
        }
      </div>
      <Grid className="basis-2/3" isVariation={isVariation}>
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
