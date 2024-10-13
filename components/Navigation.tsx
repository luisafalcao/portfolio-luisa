import { createClient } from '@/prismicio';
import Link from 'next/link';
import Heading from './Heading';

export default async function Navigation() {
    const client = createClient();
    const settings = await client.getSingle('settings');
    const homepage = await client.getSingle('homepage');
    const homepageSlices = homepage.data.slices

    return (
        <nav className='navigation w-full flex flex-col md:flex-row justify-between items-center px-20 py-5 sticky bottom-0'>
            <Link href="/" >
                <Heading as="h3" size='xs' className='hidden md:block mb-0'>{settings.data.site_title}</Heading>
                <Heading as="h4" size='xs' fontFamily='secondary' className='hidden md:block mt-0'>{settings.data.meta_description}</Heading>
            </Link>
            <ul className='text-base md:text-2xl lowercase flex gap-3'>
                {homepageSlices.map(({ primary, slice_type }, index) => (
                    <li key={index} className='md:border-effect horizontal'>
                        <Link href={`/#${slice_type}`}>{primary.slice_name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
