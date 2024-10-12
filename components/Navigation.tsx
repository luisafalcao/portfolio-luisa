import { createClient } from '@/prismicio';
import Link from 'next/link';
import Heading from './Heading';

export default async function Navigation() {
    const client = createClient();
    const settings = await client.getSingle('settings');
    const homepage = await client.getSingle('homepage');
    const homepageSlices = homepage.data.slices

    return (
        <nav className='w-full flex flex-col md:flex-row justify-between items-center px-20 py-5 sticky bottom-0'>
            <Link href="/" >
                <Heading as="h3" size='xs' className='hidden md:block'>{settings.data.site_title}</Heading>
                <Heading as="h4" size='xs' fontFamily='secondary' className='hidden md:block'>{settings.data.meta_description}</Heading>
            </Link>
            <ul className='text-1xl md:text-2xl lowercase flex gap-3'>
                {homepageSlices.map(({ primary }, index) => (
                    <li key={index}>{primary.slice_name}</li>
                ))}
            </ul>
        </nav>
    );
}
