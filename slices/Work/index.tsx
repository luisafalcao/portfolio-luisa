import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";
import Link from "next/link";

/*** Props for `Work`. */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/*** Component for "Work" Slices. */
const Work = ({ slice, context }: WorkProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <Heading>Work</Heading>
        {slice.primary.navigation.map((item, index) => (
          <Heading as="h4" key={index} size="xs" fontFamily="secondary">{item.category}</Heading>
        ))}
        <Heading as="h4" size="xs" fontFamily="secondary"><Link href="/projects">See All</Link></Heading>
      </div>
      <Grid projects={context}></Grid>
    </Bounded>
  );
};

export default Work;
