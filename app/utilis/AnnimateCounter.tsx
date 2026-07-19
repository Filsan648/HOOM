import { useEffect, useState, useRef } from "react";

// 1. Définition des types pour les Props
interface AnimatedCounterProps {
  target: number;
  suffix: string;
}

function AnimatedCounter({ target, suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0);
  
  // 2. Typage du useRef pour cibler un élément HTMLSpanElement
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            const progressRatio = Math.min(progress / duration, 1);
            const easeOutRatio = 1 - Math.pow(1 - progressRatio, 3);
            
            setCount(Math.floor(easeOutRatio * target));

            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  // 3. Typage de l'argument de la fonction de formatage
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <span 
      ref={elementRef} 
      className="block text-2xl sm:text-3xl md:text-5xl lg:text-[4.2vw] font-medium tracking-tighter text-neutral-950 transition-transform duration-300 group-hover:translate-x-1"
    >
      {formatNumber(count)}{suffix}
    </span>
  );
}

export default AnimatedCounter;