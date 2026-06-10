import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [hoverType, setHoverType] = useState<"none" | "magnetic" | "text">("none");
  const [elementRect, setElementRect] = useState<DOMRect | null>(null);

  // Valeurs de mouvement brutes (sans re-render)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuration de l'inertie (Le fameux effet fluide Awwwards)
  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Tailles dynamiques du curseur qui vont s'animer de manière fluide
  const cursorWidth = useSpring(24, springConfig);
  const cursorHeight = useSpring(24, springConfig);
  const cursorBorderRadius = useSpring(9999, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (hoverType === "magnetic" && elementRect) {
        // Effet d'aimant : Le curseur est attiré vers le centre de l'élément, mais suit légèrement la souris
        const elementCenterX = elementRect.left + elementRect.width / 2;
        const elementCenterY = elementRect.top + elementRect.height / 2;
        
        mouseX.set(elementCenterX + (e.clientX - elementCenterX) * 0.2);
        mouseY.set(elementCenterY + (e.clientY - elementCenterY) * 0.2);
      } else {
        // Mode par défaut : Suit la souris
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Détection des types d'éléments
      const interactiveEl = target.closest("button, a, .cursor-magnetic") as HTMLElement | null;
      const textEl = target.closest("h1, h2, h3, p, .cursor-text") as HTMLElement | null;

      if (interactiveEl) {
        const rect = interactiveEl.getBoundingClientRect();
        setElementRect(rect);
        setHoverType("magnetic");

        // Le curseur prend la forme et la taille du bouton survolé (avec une marge)
        cursorWidth.set(rect.width + 16);
        cursorHeight.set(rect.height + 12);
        cursorBorderRadius.set(8); // Devient un rectangle arrondi
      } else if (textEl && !interactiveEl) {
        setHoverType("text");
        cursorWidth.set(80);
        cursorHeight.set(80);
        cursorBorderRadius.set(9999); // Grand cercle
      } else {
        setHoverType("none");
        setElementRect(null);
        cursorWidth.set(24);
        cursorHeight.set(24);
        cursorBorderRadius.set(9999); // Petit cercle par défaut
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [hoverType, elementRect]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference border border-white"
      style={{
        x: cursorX,
        y: cursorY,
        width: cursorWidth,
        height: cursorHeight,
        borderRadius: cursorBorderRadius,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        // Changement de style en fonction du contexte
        backgroundColor: hoverType === "text" ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        borderColor: hoverType === "text" ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)",
      }}
      transition={{ duration: 0.2 }}
    />
  );
}