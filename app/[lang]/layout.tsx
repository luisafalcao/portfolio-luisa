import { Montserrat, Source_Code_Pro } from 'next/font/google';
import clsx from 'clsx';
import { createClient } from '@/prismicio';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Navigation from '@/components/Navigation';
import { ReactNode } from 'react';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    variable: '--font-source-code-pro',
    display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const settings = await client.getSingle('settings');

    return {
        title: settings.data.site_title || 'Luisa Falcão',
        description: settings.data.meta_description || 'front-end developer & designer',
        // openGraph: {
        //     images: [settings.data.og_image.url || ''],
        // },
    };
}

export default async function RootLayout({ children, params, }: Readonly<{ children: ReactNode; params: { lang: string }; }>) {
    const client = createClient();
    const settings = await client.getSingle('settings', { lang: params.lang });

    return (
        <html
            lang={params.lang}
            className={clsx(montserrat.variable, sourceCodePro.variable, "text-dark font-primary scroll-smooth bg-light")}
        >
            <body>
                {children}
                <Navigation settings={settings}></Navigation>
            </body>
        </html>
    );
}
