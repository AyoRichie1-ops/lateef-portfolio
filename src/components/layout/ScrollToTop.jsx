import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Force the scroll to the top left
    window.scrollTo(0, 0);

    // 2. Disable the browser's "helpful" memory for this session
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]); // This triggers every time the page changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;