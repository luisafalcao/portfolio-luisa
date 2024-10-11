import { createClient } from '@/prismicio';
import { PrismicRichText } from '@prismicio/react';
import { components } from '@/app/utils/serializers';
import Heading from './Heading';
import Bounded from './Bounded';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle('settings');

    return (
        <Bounded flexDirection='column' className='bg-yellow-purple'>
            <Heading as="h1" size="xxl" className='text-center'>{settings.data.site_title}</Heading>
            <Heading size="md" fontFamily="secondary" className='text-center mb-10 md:mb-0'>{settings.data.meta_description}</Heading>
            <PrismicRichText field={settings.data.intro} components={components} />
        </Bounded>
    );
}
