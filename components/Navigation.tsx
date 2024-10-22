import Link from 'next/link';
import Heading from './Heading';
import { NavigationProps } from '@/app/types/customTypes';
import clsx from 'clsx';

export default async function Navigation({ settings }: NavigationProps) {
    const { site_title, meta_description, navigation } = settings.data
    return (
        <nav className={clsx('navigation w-full flex flex-col md:flex-row justify-between items-center px-20 py-5 fixed bottom-0')}>
            <Link href="/" >
                <Heading as="h3" size='xs' className='hidden md:block mb-0'>{site_title}</Heading>
                <Heading as="h4" size='xs' fontFamily='secondary' className='hidden md:block mt-0'>{meta_description}</Heading>
            </Link>
            <ul className='text-base md:text-2xl lowercase flex gap-5'>
                {navigation.map(({ menu_item }, index) => (
                    <li key={index} className='md:border-effect horizontal'>
                        <Link href={`/#${menu_item}`}>{menu_item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
