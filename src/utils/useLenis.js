import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function useLenis() {
  const lenisRef = useRef(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis; 

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
