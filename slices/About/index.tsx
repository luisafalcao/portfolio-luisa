import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="font-primary">{children}</p>
  )
}

/*** Props for `About`. */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/*** Component for "About" Slices. */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading>About</Heading>
      <PrismicRichText field={slice.primary.about} components={components} />
    </Bounded>
  );
};

export default About;
