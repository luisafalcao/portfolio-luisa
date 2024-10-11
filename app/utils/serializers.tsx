import { JSXMapSerializer } from "@prismicio/react";

export const components: JSXMapSerializer = {
    paragraph: ({ children }) => (
        <p className="font-primary text-base md:text-xl mb-6 last:mb-0">{children}</p>
    ),
    heading4: ({ children }) => (
        <h4 className="font-primary text-1xl md:text-2xl text-center">{children}</h4>
    )
}
