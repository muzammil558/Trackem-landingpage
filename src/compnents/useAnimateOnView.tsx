import { useEffect, useState, useRef, RefObject } from "react";

function useAnimateOnView<T extends HTMLElement = HTMLElement>(): [
  RefObject<T>,
  boolean
] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null) as RefObject<T>;

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Check if element is in viewport
        const isVisible = rect.top < window.innerHeight;

        // Update state based on visibility
        setIsInView(isVisible);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array so it runs once on mount

  return [ref, isInView];
}

export default useAnimateOnView;
