// Scroller.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Scroller() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = document.getElementById("scrollable-gallery");

        if (scrollerRef.current) {
            scrollerRef.current.style.transform = `scaleX(1)`;
        }
        const handleScroll = () => {
            if (scrollContainer && scrollerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
                // const initialOffset = 0.025;
                const scrollProgress = scrollLeft / (scrollWidth - clientWidth);

                const scaleValue = 1 - scrollProgress
                scrollerRef.current.style.transform = `scaleX(${scaleValue})`;
                scrollerRef.current.style.transformOrigin = 'right';
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            return () => scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return <div ref={scrollerRef} className="scroller absolute top-0 left-0 w-full h-1 bg-light-transparent"></div>;
}
