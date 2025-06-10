'use client';

import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number; // duration in milliseconds
  className?: string;
}

export default function AnimatedCounter({ target, duration = 2000, className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        // Use easeOut curve for more natural animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(target * easeOut));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return (
    <span className={className}>
      {count.toLocaleString()}+
    </span>
  );
} 