import { PrismicDocument, filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { components } from "@/slices";
import { getLocales } from "@/app/utils/getLocales";
import { Params } from '@/app/types/customTypes';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page: PrismicDocument = await client
        .getByUID("project", params.uid, { lang: params.lang })
        .catch(() => notFound());
    const locales = await getLocales(page, client);

    return (
        <>
            <LanguageSwitcher locales={locales} />
            <SliceZone slices={page.data.slices} components={components} context={page} />
        </>
    )
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const client = createClient();
    const page = await client
        .getByUID("project", params.uid, { lang: params.lang })
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("project", {
        predicates: [filter.not('my.project.uid', 'homepage')],
        lang: '*'
    });

    return pages.map((page) => {
        return { uid: page.uid, lang: page.lang };
    });
}