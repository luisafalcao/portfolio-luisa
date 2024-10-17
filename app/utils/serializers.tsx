import Heading from "@/components/Heading";
import { JSXMapSerializer } from "@prismicio/react";

export const mainStyle: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="font-primary text-base md:text-xl mb-6 last:mb-0 leading-normal">{children}</p>
    ),
    heading5: ({ children }) => (
        <Heading as="h5" size="xs">{children}</Heading>
    ),
    heading4: ({ children }) => (
        <Heading as="h4" size="sm">{children}</Heading>
    ),
    heading3: ({ children }) => (
        <Heading as="h3" size="md">{children}</Heading>
    ),
    heading2: ({ children }) => (
        <Heading as="h2" size="lg">{children}</Heading>
    ),
    hyperlink: ({ node, children }) => (
        <a href={node.data.url} className="border-effect horizontal">{children}</a>
    )
}

export const styleVariation: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="mb-0 text-base md:text-xl leading-normal w-max">{children}</p>
    ),
    heading5: ({ children }) => (
        <Heading as="h5" size="xs" fontFamily="secondary" className="normal-case mb-0">{children}</Heading>
    )
}

export const headingWithHr: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="font-primary text-base md:text-xl mb-6 last:mb-0 leading-normal">{children}</p>
    ),
    heading3: ({ children }) => (
        <>
            <Heading as="h3" size="sm">{children}</Heading>
            <hr className="border border-slate-600 my-3" />
        </>
    ),
    hyperlink: ({ node, children }) => (
        <a href={node.data.url} className="border-effect horizontal">{children}</a>
    )
}
