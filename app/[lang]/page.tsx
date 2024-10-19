import { Metadata } from "next";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/client";
import { components } from "@/slices";
import { getLocales } from "@/app/utils/getLocales";

export default async function Page({ params: { lang }, }: { params: { lang: string }; }) {
    const client = createClient();
    const home: PrismicDocument | null = await client.getByUID("homepage", "homepage", { lang });
    const settings = await client.getSingle('settings', { lang: lang });

    if (!home) {
        throw new Error(`No homepage document found for lang: ${lang}`);
    }

    const projectPages: PrismicDocument[] = await client.getAllByType("project")

    if (!projectPages || projectPages.length === 0) {
        throw new Error('No projects found');
    }

    const locales = await getLocales(home, client)

    return (
        <>
            <SliceZone slices={home.data.slices} components={components} context={{ projectPages, lang, settings, locales }} />
        </>
    );
}

export async function generateMetadata({ params: { lang }, }: { params: { lang: string } }): Promise<Metadata> {
    const client = createClient();
    const home = await client.getByUID("homepage", "homepage", { lang });

    return {
        title: home.data.meta_title,
        description: home.data.meta_description,
    };
}