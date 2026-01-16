import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Import CSS
    import("locomotive-scroll/dist/locomotive-scroll.css");

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      lenisOptions: {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      },
    });
    // Cleanup
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, []);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef.current };
};
