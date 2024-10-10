import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Heading from './Heading';

export default async function Navigation() {
    const client = createClient();
    const settings = await client.getSingle('settings');

    return (
        <nav className='w-full flex flex-col md:flex-row justify-between border-2 px-20 py-10 sticky bottom-0'>
            <Link href="/" >
                <Heading as="h3" size='sm'>{settings.data.site_title}</Heading>
                <Heading as="h4" size='sm' fontFamily='secondary' className='hidden md:block'>{settings.data.meta_description}</Heading>
            </Link>
            <ul className='text-1xl md:text-2xl lowercase'>
                {settings.data.navigation.map(({ link, label }) => (
                    <li key={label}>
                        <PrismicNextLink field={link}>{label}</PrismicNextLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
