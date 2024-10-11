import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { lists } from "@/app/utils/serializers";
/*** Props for `SkillsAndCertifications`. */
export type SkillsAndCertificationsProps =
  SliceComponentProps<Content.SkillsAndCertificationsSlice>;

/*** Component for "SkillsAndCertifications" Slices. */
const SkillsAndCertifications = ({ slice }: SkillsAndCertificationsProps): JSX.Element => {
  console.log(slice.primary.skills)
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-half"
      flexDirection="column"
    >
      <div className="basis-1/2 flex flex-col text-center">
        <Heading >Certifications</Heading>
        {slice.primary.certifications.map((item) => (
          <PrismicRichText field={item.certification} />
        ))}
      </div>

      <div className="basis-1/2 flex flex-col text-center">
        <Heading >Skills</Heading>
        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">Languages:</Heading>
          {slice.primary.skills.map((item) => {
            if (item.category === "Languages") {
              return <PrismicRichText field={item.skill} components={lists} />
            }
          })}
        </div>

        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">Coding:</Heading>
          {slice.primary.skills.map((item) => {
            if (item.category === "Coding") {
              return <PrismicRichText field={item.skill} components={lists} />
            }
          })}
        </div>

        <div className="flex justify-center items-end gap-4">
          <Heading as="h3" size="xs" fontFamily="secondary" className="mb-0">Graphic Design:</Heading>
          {slice.primary.skills.map((item) => {
            if (item.category === "Graphic Design") {
              return <PrismicRichText field={item.skill} components={lists} />
            }
            return ""
          })}
        </div>
      </div>
    </Bounded >
  );
};

export default SkillsAndCertifications;
