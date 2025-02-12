import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { alternativeStyle } from "@/app/utils/serializers";
import { ContextProps } from "@/app/types/customTypes";

/*** Props for `SkillsAndCertifications`. */
export type SkillsAndCertificationsProps = SliceComponentProps<Content.SkillsAndCertificationsSlice> & {
  context: ContextProps
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
      id={slice.slice_type?.toLowerCase()}
    >
      <div className="basis-1/2 flex flex-col w-full">
        <Heading>{currentLang === "en-us" ? "Skills" : "Habilidades"}</Heading>
        <div className="flex flex-col md:flex-row items-center md:items-end md:gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Languages:" : "Idiomas:"}</Heading>
          <PrismicRichText field={slice.primary.languages} components={alternativeStyle} />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-end md:gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Coding:" : "Desenvolvimento:"}</Heading>
          <PrismicRichText field={slice.primary.coding} components={alternativeStyle} />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-end md:gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Graphic Design:" : "Design:"}</Heading>
          <PrismicRichText field={slice.primary.design} components={alternativeStyle} />
        </div>
      </div>
      <div className="basis-1/2 flex flex-col mt-10 md:mt-5 w-full gap-4">
        <Heading>{currentLang === "en-us" ? "Certifications and Degrees" : "Certificados e Diplomas"}</Heading>
        {slice.primary.certifications.map((item, index) => (
          <PrismicRichText key={index} field={item.certification} components={alternativeStyle} />
        ))}
      </div>
    </Bounded >
  );
};

export default SkillsAndCertifications;
