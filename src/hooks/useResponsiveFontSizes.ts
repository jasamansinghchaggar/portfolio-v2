import { useEffect, useState } from "react";

export const useResponsiveFontSizes = () => {
  const [sizes, setSizes] = useState({
    asciiFontSize: 8,
    textFontSize: 60,
  });

  useEffect(() => {
    const calculateSizes = () => {
      const width = window.innerWidth;

      // Mobile: width < 640px
      if (width < 640) {
        setSizes({
          asciiFontSize: 7,
          textFontSize: 600,
        });
      }
      // Tablet: 640px <= width < 1024px
      else if (width < 1024) {
        setSizes({
          asciiFontSize: 7,
          textFontSize: 600,
        });
      }
      // Desktop: width >= 1024px
      else {
        setSizes({
          asciiFontSize: 8,
          textFontSize: 350,
        });
      }
    };

    calculateSizes();
    window.addEventListener("resize", calculateSizes);

    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  return sizes;
};
