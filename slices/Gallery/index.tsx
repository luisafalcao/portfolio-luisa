import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex w-full overflow-x-scroll"
    >
      {
        slice.primary.photos.map((item, index) => (
          <PrismicNextImage key={index} field={item.photo} width={1000} height={1000} quality={100} style={{ objectFit: "cover" }} />
        ))
      }
    </section>
  );
};

export default Gallery;
