import { ImageField, KeyTextField, PrismicDocument } from "@prismicio/client";
import { Dispatch, SetStateAction } from "react";

export type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
    flexDirection?: "row" | "column";
}

export type GridProps = {
    className?: string;
    children: React.ReactNode;
    flexDirection?: "row" | "column";
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
    size?: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
    fontFamily?: "primary" | "secondary"
    children: React.ReactNode;
    className?: string;
    category: KeyTextField;
    setCurrentState: Dispatch<SetStateAction<KeyTextField>>;
}

export type Repo = {
    id: number;
    name: string;
    html_url: string;
}

export type ReposProps = {
    repos: Repo[];
}