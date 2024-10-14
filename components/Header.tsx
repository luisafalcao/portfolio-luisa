import { createClient } from '@/prismicio';
import Heading from './Heading';
import Bounded from './Bounded';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LanguageSwitcherProps } from '@/app/types/customTypes';

export default async function Header({ locales }: LanguageSwitcherProps) {
    const client = createClient();
    const settings = await client.getSingle('settings');

    return (
        <Bounded flexDirection='column' className='bg-yellow-purple'>
            <LanguageSwitcher locales={locales} />
            <Heading as="h1" size="xxl" className='text-center mb-0'>{settings.data.site_title}</Heading>
            <Heading as="h2" size="md" fontFamily="secondary" className='text-center mb-10 md:mb-0 mt-0'>{settings.data.meta_description}</Heading>
            <Heading as="h3" size="xs" fontFamily="primary" className='font-normal text-center mb-10 md:mb-0 mt-0'>{settings.data.intro}</Heading>
        </Bounded>
    );
}
