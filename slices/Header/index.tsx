import { ContextProps } from "@/app/types/customTypes";
import { mainStyle } from "@/app/utils/serializers";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/*** Props for `Header`. */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice> & {
  context: ContextProps;
};

/*** Component for "Header" Slices. */
const Header = ({ slice, context }: HeaderProps): JSX.Element => {
  const settings = context?.settings?.data
  const locales = context?.locales

  return (
    <Bounded flexDirection='column' className='bg-yellow-purple'>
      <LanguageSwitcher locales={locales} />
      <Heading as="h1" size="xxl" className='text-center mb-0'>{settings?.site_title}</Heading>
      <Heading as="h2" size="md" fontFamily="secondary" className='text-center mb-10 md:mb-0 mt-0'>{settings?.meta_description}</Heading>
      <div className="text-center">
        <PrismicRichText field={slice.primary.intro} components={mainStyle} />
      </div>
    </Bounded>
  );
};

export default Header;
