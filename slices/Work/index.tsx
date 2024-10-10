import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Grid from "@/components/Grid";

/*** Props for `Work`. */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/*** Component for "Work" Slices. */
const Work = ({ slice }: WorkProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <Heading>Work</Heading>
        <ul>
          <li>Coding</li>
          <li>Graphic Design</li>
          <li>See All</li>
        </ul>
      </div>
      <div>
        <Grid></Grid>
      </div>
    </Bounded>
  );
};

export default Work;
