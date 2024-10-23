import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { ContextProps } from "@/app/types/customTypes";
import { headingWithHr } from "@/app/utils/serializers";

/*** Props for `Contact`. */
export type ContactProps = SliceComponentProps<Content.ContactSlice> & {
  context: ContextProps
};

async function getEmailField(context: ContextProps) {
  return context?.settings?.data?.email
}

const contactRichText = (context: ContextProps): JSXMapSerializer => ({
  paragraph: ({ children }) => {
    const field = getEmailField(context)
    return <p className="font-primary text-base md:text-xl mb-6 last:mb-0 leading-normal">{children} <strong><a href={`mailto:${field}`} className="border-effect horizontal">{field}</a></strong></p>
  }
})

/*** Component for "Contact" Slices. */
const Contact = ({ slice, context }: ContactProps): JSX.Element => {
  const combinedSerializers: JSXMapSerializer = {
    ...headingWithHr,
    ...contactRichText(context)
  };

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
        <PrismicRichText field={slice.primary.message} components={combinedSerializers} />
      </div>
    </Bounded>
  );
};

export default Contact;
