import { useEffect } from "react";

function useRevealOnScroll(selector, threshold = 0.25, options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // reveal once
          }
        });
      },
      {
        threshold,
        rootMargin: options.rootMargin || "0px"
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
}


export default useRevealOnScroll;