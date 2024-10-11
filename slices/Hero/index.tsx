import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="font-primary">{children}</p>
  )
}

/*** Props for `Hero`. */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/*** Component for "Hero" Slices. */
const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  const { title } = context.data

  // const heroSlice = context.data.slices.find(slice => slice.slice_type === 'hero')
  // const { year, link_github, link_live_demo } = heroSlice.primary
  const { year, description, link_github, link_live_demo, main_image } = slice.primary

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col md:flex-row w-full overflow-hidden"
    >
      <div className="h-full">
        <Heading as="h2" className="normal-case">{title}</Heading>
        <h3 className="italic">{year}</h3>
        <PrismicRichText field={description} components={components} />
        <hr className="border border-slate-600 my-3" />
        <PrismicNextLink field={link_github} >{link_github.text}</PrismicNextLink> | <PrismicNextLink field={link_live_demo} >{link_live_demo.text}</PrismicNextLink>
      </div>
      <PrismicNextImage field={main_image} style={{ objectFit: "cover" }} />
    </section>
  );
};

export default Hero;
