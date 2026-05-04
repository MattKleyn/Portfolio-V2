import { useEffect, useState } from "react";

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 600px)");
    const mqTablet = window.matchMedia("(max-width: 991px)");

    const update = () => {
      setBreakpoint({
        isMobile: mqMobile.matches,
        isTablet: mqTablet.matches && !mqMobile.matches,
      });
    };

    update();

    mqMobile.addEventListener("change", update);
    mqTablet.addEventListener("change", update);

    return () => {
      mqMobile.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);

  return breakpoint;
}

export default useBreakpoint;