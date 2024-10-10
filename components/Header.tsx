import { createClient } from '@/prismicio';
import Heading from './Heading';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle('settings');

    return (
        <>
            <Heading as="h1" size="xxl">{settings.data.site_title}</Heading>
            <Heading size="xl" fontFamily="secondary">{settings.data.meta_description}</Heading>
            <p>ABOUT</p>
        </>
    );
}
