import { ImageField, PrismicDocument } from "@prismicio/client";

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