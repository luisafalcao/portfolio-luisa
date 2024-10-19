import { SettingsDocument } from "@/prismicio-types"
import { ImageField, KeyTextField, PrismicDocument } from "@prismicio/client"
import { Dispatch, SetStateAction } from "react"

export type ArrowProps = {
    direction: string,
    targetProject: PrismicDocument | null,
    className?: string,
    currentLang: string,
}

export type ProjectNavProps = {
    uid: string | null | undefined,
    projectsArray: PrismicDocument[] | undefined,
    title: string,
    currentLang?: string | undefined,
}

export type BoundedProps = {
    as?: React.ElementType,
    className?: string,
    id?: string,
    children: React.ReactNode,
    flexDirection?: "row" | "column",
    isVariation?: boolean,
}

export type GridProps = {
    className?: string,
    children: React.ReactNode,
    isVariation?: boolean,
}

export type GridItemProps = {
    className?: string,
    data: PrismicDocument,
    index: number,
    image: ImageField<never> | null,
}

export type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    size?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs",
    fontFamily?: "primary" | "secondary"
    children: React.ReactNode,
    className?: string,
}

export type ButtonProps = {
    as?: "button",
    children: React.ReactNode,
    className?: string,
    category: KeyTextField | undefined,
    currentCategory: KeyTextField,
    setCurrentCategory: Dispatch<SetStateAction<KeyTextField>>,
}

export type Repo = {
    id: number,
    name: string,
    html_url: string,
}

export type ReposProps = {
    repos: Repo[],
}

export type LocalesProps = {
    lang: string,
    lang_name: string,
    url: string
}

export type LanguageSwitcherProps = {
    locales: (string | LocalesProps)[] | undefined,
    className?: string,
}

export type ContextWithPages = PrismicDocument & {
    pages: PrismicDocument[],
}

export type Params = {
    uid: string,
    lang?: string
}

export type ContextProps = {
    projectPages?: PrismicDocument[],
    lang?: string,
    settings?: SettingsDocument,
    locales?: string[],
    currentPage?: PrismicDocument,
}

export type NavigationProps = {
    settings: SettingsDocument,
}
