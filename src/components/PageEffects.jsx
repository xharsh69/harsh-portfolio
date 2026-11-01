import { useEffect } from "react";

// marks each full-screen page as "in view" so its content can slide up
export default function PageEffects() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const pages = document.querySelectorAll(".hero, .section");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("in-view", e.isIntersecting)
        ),
      { threshold: 0.2 }
    );

    pages.forEach((p) => io.observe(p));
    root.classList.add("reveal-ready");

    return () => {
      io.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}