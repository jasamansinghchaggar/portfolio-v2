import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Track hover-text elements using event delegation
  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('hover-text')) {
        gsap.to(cursorRef.current, {
          scale: 5,
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('hover-text')) {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  // Track remove-cursor elements using event delegation
  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('remove-cursor')) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('remove-cursor')) {
        gsap.to(cursorRef.current, {
          opacity: 1,
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  // Handle mousemove for cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'back.out',
        overwrite: 'auto'
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="h-4 w-4 rounded-full fixed pointer-events-none z-50 mix-blend-difference flex items-center justify-center"
      style={{
        backgroundColor: 'var(--cursor, #ffffff)',
        transform: 'translate(-50%, -50%)',
        left: 0,
        top: 0
      }}
    >
    </div>
  );
};

export default CustomCursor;
