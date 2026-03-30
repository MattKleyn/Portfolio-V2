import { useEffect, useRef, useState } from "react";

function useNavController({threshold = 90} = {}) {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [isAtTop, setIsAtTop] = useState(true);
    const [isPastThreshold, setIsPastThreshold] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const lastScrollYRef = useRef(window.scrollY);
    const tickingRef = useRef(false);

    useEffect(() => {
        function onScroll() {
            const currentY = window.scrollY;

            if (!tickingRef.current) {
                window.requestAnimationFrame(() => {
                    const lastY = lastScrollYRef.current;

                    if (currentY > lastY) {
                        setScrollDirection("down");
                    } else if (currentY < lastY) {
                        setScrollDirection("up");
                    }

                    setIsAtTop(currentY <= 0);

                    setIsPastThreshold(currentY > threshold);

                    lastScrollYRef.current = currentY;
                    tickingRef.current = false;
                });

                tickingRef.current = true;
            };
        }
        
        window.addEventListener("scroll", onScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [threshold]);

    function openMenu() {
        setIsMenuOpen(true);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") {
            setIsMenuOpen(false);
            }
        }

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    return {
        scrollDirection,
        isAtTop,
        isPastThreshold,
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
    };
}

export default useNavController;