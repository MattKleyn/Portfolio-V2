import { useEffect } from "react";

function useRevealOnLoad(selector, delay = 0) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    setTimeout(() => {
      elements.forEach(el => el.classList.add("is-visible"));
    }, delay);
  }, [selector, delay]);
}

export default useRevealOnLoad;
