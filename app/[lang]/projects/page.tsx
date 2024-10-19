import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicDocument } from "@prismicio/client";
import { getLocales } from "@/app/utils/getLocales";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default async function Page({ params: { lang }, }: { params: { lang: string }; }) {
    const client = createClient();
    const currentPage: PrismicDocument | null = await client.getByUID("projects", "projects", { lang })
    const projectPages: PrismicDocument[] = await client.getAllByType("project")
    const settings = await client.getSingle('settings', { lang: lang });

    if (!currentPage) {
        throw new Error(`No homepage document found for lang: ${lang}`);
    }

    const locales = await getLocales(currentPage, client);

    return (
        <>
            <LanguageSwitcher locales={locales} />
            <SliceZone slices={currentPage.data.slices} components={components} context={{ projectPages, settings, currentPage }} />
        </>
    );
}

export async function generateMetadata({ params: { lang }, }: { params: { lang: string } }): Promise<Metadata> {
    const client = createClient();
    const page = await client.getByUID("projects", "projects", { lang });

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}