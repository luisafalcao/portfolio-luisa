import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/*** Props for `Contact`. */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/*** Component for "Contact" Slices. */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading>Contact</Heading>
      <div>
        <Heading as="h3" size="sm">Want to get in touch?</Heading>
        <hr className="border border-slate-600 mb-3" />
        <p>Shoot me an email at <a href={`mailto: ${slice.primary.email}`} className="font-bold">{slice.primary.email}</a></p>
      </div>
    </Bounded>
  );
};

export default Contact;
