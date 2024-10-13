import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { components } from "@/app/utils/serializers";

/*** Props for `Contact`. */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/*** Component for "Contact" Slices. */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.slice_type}
      className="bg-purple-light"
    >
      <div className="basis-1/3">
        <Heading>Contact</Heading>
      </div>

      <div className="basis-2/3">
        <Heading as="h3" size="sm">Want to get in touch?</Heading>
        <hr className="border border-slate-600 mb-3" />
        <PrismicRichText field={slice.primary.message} components={components} />
      </div>
    </Bounded>
  );
};

export default Contact;
