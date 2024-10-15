import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, PrismicDocument } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { lists } from "@/app/utils/serializers";

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
      <div className="basis-1/2 flex flex-col text-center">
        <Heading>{currentLang === "en-us" ? "Certifications" : "Certificados"}</Heading>
        {slice.primary.certifications.map((item, index) => (
          <PrismicRichText key={index} field={item.certification} components={lists} />
        ))}
      </div>

      <div className="basis-1/2 flex flex-col text-center">
        <Heading>{currentLang === "en-us" ? "Skills" : "Habilidades"}</Heading>
        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Languages:" : "Idiomas:"}</Heading>
          {slice.primary.skills.map((item, index) => {
            if (item.category === "Languages") {
              return <p key={index}>{item.skill}</p>
            }
            return null
          })}
        </div>

        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Coding:" : "Desenvolvimento:"}</Heading>
          {slice.primary.skills.map((item, index) => {
            if (item.category === "Coding") {
              return <p key={index}>{item.skill}</p>
            }
            return null
          })}
        </div>

        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">{currentLang === "en-us" ? "Graphic Design:" : "Design:"}</Heading>
          {slice.primary.skills.map((item, index) => {
            if (item.category === "Graphic Design") {
              return <p key={index}>{item.skill}</p>
            }
            return null
          })}
        </div>
      </div>
    </Bounded >
  );
};

export default SkillsAndCertifications;
