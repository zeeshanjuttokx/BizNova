import React, { useState, useEffect } from 'react';

interface ReadingProgressBarProps {
  /** Optional override to force visibility on all screens or keep hidden on small screens */
  hideOnMobile?: boolean;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  hideOnMobile = true,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalScrollableDistance = scrollHeight - clientHeight;

      if (totalScrollableDistance <= 0) {
        setScrollProgress(0);
        setIsVisible(false);
        return;
      }

      const progress = Math.min(
        100,
        Math.max(0, (scrollTop / totalScrollableDistance) * 100)
      );

      setScrollProgress(progress);
      // Subtle entrance once user begins scrolling (or keep visible)
      setIsVisible(scrollTop > 5);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Calculate on mount and window resize
    updateScrollProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return (
    <div
      id="reading-progress-container"
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`fixed top-0 left-0 right-0 z-[60] h-[2.5px] w-full pointer-events-none transition-opacity duration-300 ${
        hideOnMobile ? 'hidden sm:block' : 'block'
      } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Subtle track background */}
      <div className="w-full h-full bg-slate-900/40 backdrop-blur-xs">
        {/* Progress Bar with glowing gradient */}
        <div
          id="reading-progress-bar"
          className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-sky-300 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(56,189,248,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};
