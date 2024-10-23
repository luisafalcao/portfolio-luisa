import Heading from "@/components/Heading";
import { JSXMapSerializer } from "@prismicio/react";

const basicSerializer: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="font-primary text-base md:text-xl mb-6 last:mb-0 leading-normal">{children}</p>
    ),
    hyperlink: ({ node, children }) => (
        <a href={node.data.url} className="border-effect horizontal">{children}</a>
    )
}

const alternativeSerializer: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="mb-0 text-base md:text-xl leading-normal whitespace-nowrap">{children}</p>
    ),
    hyperlink: ({ node, children }) => (
        <a href={node.data.url} className="font-secondary border-effect horizontal">{children}</a>
    )
}

export const mainStyle: JSXMapSerializer = {
    ...basicSerializer,
    heading2: ({ children }) => (
        <Heading as="h2" size="lg">{children}</Heading>
    ),
    heading3: ({ children }) => (
        <Heading as="h3" size="md">{children}</Heading>
    ),
    heading4: ({ children }) => (
        <Heading as="h4" size="sm">{children}</Heading>
    ),
    heading5: ({ children }) => (
        <Heading as="h5" size="xs">{children}</Heading>
    ),
}

export const alternativeStyle: JSXMapSerializer = {
    ...alternativeSerializer,
    heading5: ({ children }) => (
        <Heading as="h5" size="xs" fontFamily="secondary" className="normal-case mb-0">{children}</Heading>
    )
}

export const headingWithHr: JSXMapSerializer = {
    ...basicSerializer,
    heading3: ({ children }) => (
        <>
            <Heading as="h3" size="sm">{children}</Heading>
            <hr className="border border-slate-600 my-3" />
        </>
    )
}
