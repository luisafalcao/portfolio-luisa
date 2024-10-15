import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicDocument } from "@prismicio/client";

export default async function Page() {
    const client = createClient();
    const page: PrismicDocument = await client.getSingle("projects");
    const pages: PrismicDocument[] = await client.getAllByType("project")

    return (
        <>
            <SliceZone slices={page.data.slices} components={components} context={pages} />
        </>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("homepage");

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}