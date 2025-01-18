'use client'
import { Content, ImageField, PrismicDocument } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Link from "next/link";
import GridItem from "@/components/GridItem";
import clsx from "clsx";
import { ContextProps } from "@/app/types/customTypes";
import { getProjectsArray } from "@/app/utils/getProjects";

/*** Props for `Entries`. */
export type EntriesProps = SliceComponentProps<Content.EntriesSlice> & {
  context: ContextProps
};

/*** Component for "Entries" Slices. */
const Entries = ({ slice, context }: EntriesProps): JSX.Element => {
  const { journalPages } = context

  function renderGridItems(array: PrismicDocument[]) {
    return array.map((item: PrismicDocument, index: number) => {
      const image: ImageField<never> | null = (item.data.featured_image as ImageField<never>) || null;
      return <GridItem data={item} index={index} key={index} image={image} type="journal" />
    })
  }

  const journalEntriesArray = journalPages ? getProjectsArray(journalPages) : [];

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.slice_type?.toLowerCase()}
      className="bg-medium"
    >
      <div className={clsx("basis-1/3 flex md:flex-col items-center justify-end md:justify-normal md:items-start gap-4 md:gap-1")}>
        <Heading className="md:mb-10 mr-auto md:ml-4">Journal</Heading>

        <Heading as="h4" size="xs" fontFamily="secondary">
          <Link href="/projects">See All</Link>
        </Heading>

      </div>
      <Grid className="basis-2/3" >
        {renderGridItems(journalEntriesArray)}
      </Grid>
    </Bounded>
  );
};

export default Entries;

