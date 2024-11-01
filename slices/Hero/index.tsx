import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { headingWithHr } from "@/app/utils/serializers";
import ProjectNav from "@/components/ProjectNav";
import { ContextProps } from "@/app/types/customTypes";
import Gallery from "@/components/Gallery";

/*** Props for `Hero`. */
export type HeroProps = SliceComponentProps<Content.HeroSlice> & {
  context: ContextProps;
};

/*** Component for "Hero" Slices. */
const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  const { title } = context.currentPage?.data ?? {}
  const { uid } = context.currentPage ?? {}
  const { lang } = context.currentPage ?? {}
  const { projectPages } = context ?? []
  const { year, description, link_github, link_live_demo, main_image, gallery } = slice.primary

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col lg:flex-row w-full overflow-hidden min-h-screen"
    >
      <div className="lg:flex-grow basis-1/3 lg:text-right p-10 md:p-24 md:pt-10 self-stretch flex flex-col md:justify-center">
        <div className="mt-20 lg:mt-0">
          <Heading as="h2" className="normal-case">{title}</Heading>
          <h3 className="italic">{year}</h3>
          <br />
          <PrismicRichText field={description} components={headingWithHr} />
          <hr className="border border-slate-600 my-3" />
          <PrismicNextLink field={link_github} className="font-secondary">{link_github.text}</PrismicNextLink> {link_github.text && link_live_demo.text ? "|" : ""} <PrismicNextLink field={link_live_demo} className="font-secondary">{link_live_demo.text}</PrismicNextLink>
        </div>
        <ProjectNav uid={uid} title={title} projectsArray={projectPages} currentLang={lang} />
      </div>
      <Gallery className="basis-2/3 flex-grow" mainImage={main_image} gallery={gallery} />
    </section>
  );
};

export default Hero;