import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const frame = useRef<number>();

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const element = target.closest(
        "button, a, h1, h2, h3, span, .cursor-hover"
      ) as HTMLElement | null;

      if (element) {
        setTargetRect(element.getBoundingClientRect());
      } else {
        setTargetRect(null);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <>
      {/* Point principal */}
      <div
        className="fixed z-[9999] pointer-events-none hidden md:block"
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%,-50%)",
        }}
      >
        {!targetRect && (
          <div className="w-6 h-6 rounded-full bg-blue-600 mix-blend-difference" />
        )}
      </div>

      {/* Rectangle premium */}
      {targetRect && (
        <div
          className="
            fixed
            pointer-events-none
            z-[9998]
            border
            border-blue-600
            rounded-xl
      
            transition-all
            duration-300
            ease-out
            hidden
            md:block
          "
          style={{
            left: targetRect.left - 12,
            top: targetRect.top - 8,
            width: targetRect.width + 24,
            height: targetRect.height + 16,
          }}
        />
      )}
    </>
  );
}