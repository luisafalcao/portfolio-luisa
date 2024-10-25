// Scroller.tsx
"use client";

import { useEffect, useRef } from "react";

export default function Scroller() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = document.getElementById("scrollable-gallery");

        const handleScroll = () => {
            if (scrollContainer && scrollerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
                const initialOffset = 0.05;
                const scrollProgress = initialOffset + (scrollLeft / (scrollWidth - clientWidth)) * (1 - initialOffset);
                scrollerRef.current.style.transform = `scaleX(${scrollProgress})`;
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            return () => scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return <div ref={scrollerRef} className="scroller absolute top-0 left-0 w-full h-1 bg-yellow-purple"></div>;
}
