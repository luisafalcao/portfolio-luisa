import { createClient } from '@/prismicio';
import Heading from './Heading';
import Bounded from './Bounded';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle('settings');

    return (
        <Bounded flexDirection='column'>
            <Heading as="h1" size="xxl">{settings.data.site_title}</Heading>
            <Heading size="md" fontFamily="secondary">{settings.data.meta_description}</Heading>
            <p>short paragraph</p>
        </Bounded>
    );
}
