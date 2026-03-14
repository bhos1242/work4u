"use client";

import { useEffect } from "react";

/**
 * Adds the `.is-visible` class to elements with `.fade-up`, `.fade-in`,
 * `.scale-in`, or `.stagger-children` when they scroll into view.
 * Respects prefers-reduced-motion via CSS.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selector =
      ".fade-up, .fade-in, .scale-in, .stagger-children";
    const elements = document.querySelectorAll(selector);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
