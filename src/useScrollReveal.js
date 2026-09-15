import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it receives the class "revealed".
 * Optionally staggers children that have [data-reveal-child] with incremental delays.
 *
 * @param {{ threshold?: number, rootMargin?: string, stagger?: number }} opts
 * @returns {React.RefObject}
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  stagger = 90,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Pre-apply stagger delays to children so the CSS transition picks them up
    const children = el.querySelectorAll("[data-reveal-child]");
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * stagger}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, stagger]);

  return ref;
}
