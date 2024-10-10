import { createClient } from '@/prismicio';

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle('settings');

    return (
        <>
            <h1>{settings.data.site_title}</h1>
            <h2>{settings.data.meta_description}</h2>
            <p>ABOUT</p>
        </>
    );
}
