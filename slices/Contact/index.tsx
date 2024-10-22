import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { headingWithHr } from "@/app/utils/serializers";

/*** Props for `Contact`. */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/*** Component for "Contact" Slices. */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.slice_type?.toLowerCase()}
      className="bg-purple-light"
    >
      <div className="basis-1/3">
        <Heading>{slice.primary.slice_name}</Heading>
      </div>

      <div className="basis-2/3">
        <PrismicRichText field={slice.primary.message} components={headingWithHr} />
      </div>
    </Bounded>
  );
};

export default Contact;
