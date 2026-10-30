import { useEffect, useRef } from "react";

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export default function Cursor() {
  const spotA = useRef(null);
  const spotB = useRef(null);
  const grid = useRef(null);
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    // skip on touch screens and for people who prefer less motion
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const m = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const a = { x: m.x, y: m.y }; // main glow
    const b = { x: m.x, y: m.y }; // slow glow
    const r = { x: m.x, y: m.y, w: 32, h: 32, rad: 16, angle: 0, sx: 1, sy: 1 };
    let target = null;
    let targetRadius = 14;
    let card = null;
    let seen = false;
    let raf;

    const onMove = (e) => {
      m.x = e.clientX;
      m.y = e.clientY;
      if (!seen) {
        seen = true;
        [a, b, r].forEach((p) => {
          p.x = m.x;
          p.y = m.y;
        });
      }
      root.classList.add("cursor-ready");
      dot.current.style.transform = `translate(${m.x}px, ${m.y}px)`;

      // button or link under the mouse
      const t = e.target.closest("a, button");
      if (t !== target) {
        if (target) target.style.translate = "";
        target = t;
        if (t) {
          const rad = parseFloat(getComputedStyle(t).borderTopLeftRadius);
          targetRadius = (Number.isNaN(rad) ? 4 : rad) + 8;
        }
      }

      // 3D tilt on cards
      const c = e.target.closest(".card");
      if (card && card !== c) card.style.transform = "";
      card = c;
      if (c) {
        const bb = c.getBoundingClientRect();
        const px = (m.x - bb.left) / bb.width - 0.5;
        const py = (m.y - bb.top) / bb.height - 0.5;
        c.style.transform = `perspective(800px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) scale(1.03)`;
      }
    };

    const loop = () => {
      // glows follow at different speeds
      a.x += (m.x - a.x) * 0.12;
      a.y += (m.y - a.y) * 0.12;
      b.x += (m.x - b.x) * 0.05;
      b.y += (m.y - b.y) * 0.05;
      spotA.current.style.transform = `translate(${a.x}px, ${a.y}px) translate(-50%, -50%)`;
      spotB.current.style.transform = `translate(${b.x}px, ${b.y}px) translate(-50%, -50%)`;
      grid.current.style.setProperty("--mx", `${a.x}px`);
      grid.current.style.setProperty("--my", `${a.y}px`);

      // where the ring wants to go (medium size)
      let tx = m.x, ty = m.y, tw = 32, th = 32, trad = 16;
      if (target) {
        const bb = target.getBoundingClientRect();
        const cx = bb.left + bb.width / 2;
        const cy = bb.top + bb.height / 2;
        tx = cx;
        ty = cy;
        tw = bb.width + 16;
        th = bb.height + 16;
        trad = targetRadius;
        // magnetic pull on buttons
        if (target.matches(".btn, .theme-btn, .menu-btn")) {
          target.style.translate = `${clamp((m.x - cx) * 0.25, -12, 12)}px ${clamp((m.y - cy) * 0.25, -10, 10)}px`;
        }
      }

      // medium follow speed
      r.x += (tx - r.x) * 0.3;
      r.y += (ty - r.y) * 0.3;
      r.w += (tw - r.w) * 0.3;
      r.h += (th - r.h) * 0.3;
      r.rad += (trad - r.rad) * 0.3;

      // small stretch when moving fast
      let sx = 1, sy = 1;
      if (!target) {
        const dx = m.x - r.x;
        const dy = m.y - r.y;
        const speed = Math.hypot(dx, dy);
        if (speed > 2) r.angle = Math.atan2(dy, dx);
        const s = Math.min(speed / 220, 0.35);
        sx = 1 + s;
        sy = 1 - s * 0.4;
      } else {
        r.angle *= 0.7;
      }
      r.sx += (sx - r.sx) * 0.25;
      r.sy += (sy - r.sy) * 0.25;

      const el = ring.current;
      el.style.width = `${r.w}px`;
      el.style.height = `${r.h}px`;
      el.style.borderRadius = `${r.rad}px`;
      el.style.transform = `translate(${r.x}px, ${r.y}px) translate(-50%, -50%) rotate(${r.angle}rad) scale(${r.sx}, ${r.sy})`;

      raf = requestAnimationFrame(loop);
    };

    const down = () => root.classList.add("cursor-down");
    const up = () => root.classList.remove("cursor-down");
    const leave = () => {
      root.classList.remove("cursor-ready");
      if (card) card.style.transform = "";
      if (target) target.style.translate = "";
      card = null;
      target = null;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    root.addEventListener("mouseleave", leave);
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      root.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
      root.classList.remove("has-custom-cursor", "cursor-ready", "cursor-down");
    };
  }, []);

  return (
    <>
      <div ref={spotB} className="spot spot-b" />
      <div ref={spotA} className="spot spot-a" />
      <div ref={grid} className="reveal-grid" />
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}