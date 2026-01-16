import { useEffect, useState } from "react";

export const useMagnet = () => {
  const [isMagnetActive, setIsMagnetActive] = useState(false);

  useEffect(() => {
    const calculateSizes = () => {
      const width = window.innerWidth;

      // Mobile: width < 640px
      if (width < 640) {
        setIsMagnetActive(false);
      }
      // Tablet: 640px <= width < 1024px
      else if (width < 1024) {
        setIsMagnetActive(false);
      }
      // Desktop: width >= 1024px
      else {
        setIsMagnetActive(true);
      }
    };

    calculateSizes();
    window.addEventListener("resize", calculateSizes);

    return () => window.removeEventListener("resize", calculateSizes);
  }, []);

  return isMagnetActive;
};
