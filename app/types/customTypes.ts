// import { HeroSlice } from "@/prismicio-types";
import { ImageField, PrismicDocument } from "@prismicio/client";

// Define a union type for all slices' primary fields
// export type AllSlicePrimaryMainImage = HeroSlice['primary']['main_image']; // Add other slice types as needed

export type GridItemProps = {
    className?: string;
    data: PrismicDocument;
    index: number;
    image: ImageField<never> | null;
}