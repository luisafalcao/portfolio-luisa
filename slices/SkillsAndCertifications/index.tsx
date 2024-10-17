import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, PrismicDocument } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { styleVariation } from "@/app/utils/serializers";

/*** Props for `SkillsAndCertifications`. */
export type SkillsAndCertificationsProps = SliceComponentProps<Content.SkillsAndCertificationsSlice> & {
  context: PrismicDocument
};

/*** Component for "SkillsAndCertifications" Slices. */
const SkillsAndCertifications = ({ slice, context }: SkillsAndCertificationsProps): JSX.Element => {
  const currentLang = context?.lang

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-light"
      flexDirection="column"
      id={slice.slice_type}
    >
      <div className="basis-1/2 flex flex-col w-full">
        <Heading>{currentLang === "en-us" ? "Skills" : "Habilidades"}</Heading>
        <div className="flex flex-col md:flex-row  items-center md:items-end md:gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Languages:" : "Idiomas:"}</Heading>
          <PrismicRichText field={slice.primary.languages} components={styleVariation} />
        </div>

        <div className="flex flex-col md:flex-row  items-center md:items-end md:gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Coding:" : "Desenvolvimento:"}</Heading>
          <PrismicRichText field={slice.primary.coding} components={styleVariation} />
        </div>

        <div className="flex flex-col md:flex-row  items-center md:items-end md:gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Graphic Design:" : "Design:"}</Heading>
          <PrismicRichText field={slice.primary.design} components={styleVariation} />
        </div>
      </div>
      <div className="basis-1/2 flex flex-col mt-10 md:mt-5 w-full">
        <Heading>{currentLang === "en-us" ? "Certifications" : "Certificados"}</Heading>
        {slice.primary.certifications.map((item, index) => (
          <PrismicRichText key={index} field={item.certification} components={styleVariation} />
        ))}
      </div>
    </Bounded >
  );
};

export default SkillsAndCertifications;
