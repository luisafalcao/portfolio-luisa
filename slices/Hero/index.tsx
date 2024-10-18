import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { headingWithHr } from "@/app/utils/serializers";
import ProjectNav from "@/components/ProjectNav";
import { ContextProps } from "@/app/types/customTypes";

/*** Props for `Hero`. */
export type HeroProps = SliceComponentProps<Content.HeroSlice> & {
  context: ContextProps;
};

/*** Component for "Hero" Slices. */
const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  const { title } = context.page?.data ?? {}
  const { uid } = context.page ?? {}
  const { year, description, link_github, link_live_demo, main_image } = slice.primary

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col md:flex-row w-full overflow-hidden min-h-[50vh]"
    >
      <div className="flex-grow basis-2/5 md:text-right p-10  self-stretch flex flex-col justify-between">
        <ProjectNav uid={uid} title={title} projectsArray={context.pages} />
        <div>
          <Heading as="h2" className="normal-case">{title}</Heading>
          <h3 className="italic">{year}</h3>
          <br />
          <PrismicRichText field={description} components={headingWithHr} />
          <hr className="border border-slate-600 my-3" />
          <PrismicNextLink field={link_github} className="font-secondary">{link_github.text}</PrismicNextLink> | <PrismicNextLink field={link_live_demo} className="font-secondary">{link_live_demo.text}</PrismicNextLink>
        </div>
      </div>

      <div className="basis-3/5" >
        <PrismicNextImage field={main_image} height={1000} quality={100} style={{ objectFit: "cover" }} />
      </div>
    </section>
  );
};

export default Hero;
