import { useEffect, useRef } from "react";

/**
 * Hook that adds a "revealed" class to elements with reveal classes
 * when they enter the viewport. Supports staggered reveals.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Stagger items within the same group
            const stagger = parseInt(
              entry.target.getAttribute("data-stagger") || "0",
              10
            );
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, stagger * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
