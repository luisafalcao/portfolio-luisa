import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/*** Props for `Repos`. */
export type ReposProps = SliceComponentProps<Content.ReposSlice>;

/*** Component for "Repos" Slices. */
const Repos = ({ slice }: ReposProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for repos (variation: {slice.variation}) Slices
    </section>
  );

};

export default Repos;
