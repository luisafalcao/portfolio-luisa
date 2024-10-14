import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { mainStyle } from "@/app/utils/serializers";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/*** Props for `About`. */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/*** Component for "About" Slices. */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-light"
      id={slice.slice_type}
    >
      <div className="basis-1/3">
        <Heading>{slice.primary.slice_name}</Heading>
      </div>

      <div className="basis-2/3">
        <PrismicRichText field={slice.primary.about} components={mainStyle} />
      </div>
    </Bounded>
  );
};

export default About;
