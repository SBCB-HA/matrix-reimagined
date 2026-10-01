import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

// Start scroll effects after React has hydrated the route's content.
export function usePageReady() {
  const pathname = useLocation({ select: (location) => location.pathname });
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("matrix:page-ready"));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
}
