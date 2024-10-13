import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { lists, horizontalLists } from "@/app/utils/serializers";

/*** Props for `SkillsAndCertifications`. */
export type SkillsAndCertificationsProps = SliceComponentProps<Content.SkillsAndCertificationsSlice>;

/*** Component for "SkillsAndCertifications" Slices. */
const SkillsAndCertifications = ({ slice }: SkillsAndCertificationsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-light"
      flexDirection="column"
      id={slice.slice_type}
    >
      <div className="basis-1/2 flex flex-col text-center">
        <Heading >Certifications</Heading>
        {slice.primary.certifications.map((item, index) => (
          <PrismicRichText key={index} field={item.certification} components={lists} />
        ))}
      </div>

      <div className="basis-1/2 flex flex-col text-center">
        <Heading >Skills</Heading>
        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">Languages:</Heading>
          {slice.primary.skills.map((item, index) => {
            if (item.category === "Languages") {
              return <PrismicRichText key={index} field={item.skill} components={horizontalLists} />
            }
          })}
        </div>

        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">Coding:</Heading>
          {slice.primary.skills.map((item, index) => {
            if (item.category === "Coding") {
              return <PrismicRichText key={index} field={item.skill} components={horizontalLists} />
            }
          })}
        </div>

        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">Graphic Design:</Heading>
          {slice.primary.skills.map((item, index) => {
            if (item.category === "Graphic Design") {
              return <PrismicRichText key={index} field={item.skill} components={horizontalLists} />
            }
            return ""
          })}
        </div>
      </div>
    </Bounded >
  );
};

export default SkillsAndCertifications;
