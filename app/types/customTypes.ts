import { ImageField, KeyTextField, PrismicDocument } from "@prismicio/client";
import { Dispatch, SetStateAction } from "react";

export type ArrowProps = {
    direction: string;
    targetProject: PrismicDocument | null
}

export type ProjectNavProps = {
    uid: string | null | undefined;
    projectsArray: PrismicDocument[] | undefined;
    title: string
}

export type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    id?: string;
    children: React.ReactNode;
    flexDirection?: "row" | "column";
    isVariation?: boolean;
}

export type GridProps = {
    className?: string;
    children: React.ReactNode;
    isVariation?: boolean;
}

export type GridItemProps = {
    className?: string;
    data: PrismicDocument;
    index: number;
    image: ImageField<never> | null;
}

export type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
    fontFamily?: "primary" | "secondary"
    children: React.ReactNode;
    className?: string;
}

export type ButtonProps = {
    as?: "button";
    children: React.ReactNode;
    className?: string;
    category: KeyTextField | undefined;
    currentCategory: KeyTextField;
    setCurrentCategory: Dispatch<SetStateAction<KeyTextField>>;
}

export type Repo = {
    id: number;
    name: string;
    html_url: string;
}

export type ReposProps = {
    repos: Repo[];
}

export type LanguageSwitcherProps = {
    locales: {
        lang: string;
        lang_name: string;
        url: string;
    }[] | string[] | undefined,
    className?: string;
}

export type ContextWithPages = PrismicDocument & {
    pages: PrismicDocument[];
};

export type Params = {
    uid: string;
    lang?: string
};

export type ContextProps = {
    settings?: {
        data: {
            site_title: string;
            meta_description: string;
        };
    };
    locales?: string[];
    page?: PrismicDocument;
    uniquePages?: PrismicDocument[]
};