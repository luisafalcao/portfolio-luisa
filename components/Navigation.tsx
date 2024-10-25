import Link from 'next/link';
import Heading from './Heading';
import { NavigationProps } from '@/app/types/customTypes';
import clsx from 'clsx';

export default async function Navigation({ settings }: NavigationProps) {
    const { site_title, meta_description, navigation } = settings.data
    const url = settings.lang === 'pt-br' ? '/pt-br/#' : '/#'

    return (
        <nav className={clsx('navigation w-full flex flex-col md:flex-row justify-center lg:justify-between items-center px-20 py-5 fixed bottom-0')}>
            <Link href="/" >
                <Heading as="h3" size='xs' className='hidden lg:block mb-3 xl:mb-0'>{site_title}</Heading>
                <Heading as="h4" size='xs' fontFamily='secondary' className='hidden xl:block mt-0'>{meta_description}</Heading>
            </Link>
            <ul className='text-base lg:text-2xl lowercase flex gap-5'>
                <li className='block lg:hidden horizontal'>
                    <Link href="/">Home</Link>
                </li>
                {navigation.map(({ menu_item, target_slice }, index) => (
                    <li key={index} className='md:border-effect horizontal'>
                        <Link href={`${url}${target_slice?.toLowerCase().replaceAll(' ', '_')}`}>{menu_item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
