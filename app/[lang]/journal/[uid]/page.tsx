import { PrismicDocument, filter } from "@prismicio/client";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { components } from "@/slices";
import { getLocales } from "@/app/utils/getLocales";
import { Params } from '@/app/types/customTypes';
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { headingWithHr } from "@/app/utils/serializers";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";

export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const currentPage: PrismicDocument = await client
        .getByUID("journal_entry", params.uid, { lang: params.lang })
        .catch(() => notFound());
    const locales = await getLocales(currentPage, client);
    const pages = await client.getAllByType("journal_entry", {
        predicates: [filter.not('my.journal_entry.uid', 'homepage')],
        lang: '*'
    });
    const { title, content, featured_image } = currentPage.data
    const journalPages = pages.filter((item, index, self) => index === self.findIndex((t) => t.uid === item.uid));

    return (
        <>
            <LanguageSwitcher locales={locales} />
            <section className="flex flex-col lg:flex-row w-full overflow-hidden min-h-screen">
                <div className="lg:flex-grow basis-1/3 lg:text-left p-10 md:p-24 md:pt-30 self-stretch flex flex-col">
                    <div className="basis-1/2 md:max-h-[30vh]">
                        <PrismicNextImage placeholder="blur" blurDataURL={featured_image?.url ?? undefined} field={featured_image} quality={100} className="object-cover h-full" />
                    </div>
                    <br />
                    <div className="mt-20 lg:mt-0">
                        <Heading as="h2" className="normal-case">{title}</Heading>
                        <hr className="border border-slate-600 my-3" />
                        <PrismicRichText field={content} components={headingWithHr} />
                    </div>
                    {/* <ProjectNav uid={uid} title={title} projectsArray={journalPages} currentLang={lang} /> */}
                </div>
            </section>
            <SliceZone slices={currentPage.data.slices} components={components} context={{ journalPages, currentPage }} />
        </>
    )
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const client = createClient();
    const page = await client
        .getByUID("journal_entry", params.uid, { lang: params.lang })
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();

    const journalPages = await client.getAllByType("journal_entry", {
        predicates: [
            filter.not('my.journal_entry.uid', 'homepage')],
        lang: '*'
    });

    return journalPages.map((page) => {
        return { uid: page.uid, lang: page.lang };
    });
}
