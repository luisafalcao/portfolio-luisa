import { Montserrat, Source_Code_Pro } from 'next/font/google';
import clsx from 'clsx';
import { createClient } from '@/prismicio';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

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
        description:
            settings.data.meta_description || 'front-end developer & designer',
        openGraph: {
            images: [settings.data.og_image.url || ''],
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={clsx(montserrat.variable, sourceCodePro.variable)}
        >
            <body>
                <Header></Header>
                {children}
                <Navigation></Navigation>
            </body>
        </html>
    );
}
