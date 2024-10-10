import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="font-primary">{children}</p>
  )
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col md:flex-row w-full overflow-hidden"
    >
      <div>
        <Heading as="h2" className="normal-case">Project Name</Heading>
        <h3 className="italic">2022</h3>
        <PrismicRichText field={slice.primary.description} components={components} />
        <hr className="border border-slate-600 my-3" />
        <PrismicNextLink field={slice.primary.link_github} /> | <PrismicNextLink field={slice.primary.link_live_demo} />
      </div>
      <PrismicNextImage field={slice.primary.main_image} />
    </section>
  );
};

export default Hero;
