import { JSXMapSerializer } from "@prismicio/react";

export const components: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="font-primary text-base md:text-xl mb-6 last:mb-0 leading-normal">{children}</p>
    ),
    heading4: ({ children }) => (
        <h4 className="font-primary text-1xl md:text-2xl text-center">{children}</h4>
    )
}

export const lists: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="mb-0 text-base leading-normal after:content-['•'] after:ml-0.5 after:text-dark after:text-2xl after:ml-4 last:after:content-['']">{children}</p>
    )
}
