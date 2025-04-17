"use client";
import { useEffect, useState } from "react";

export function useCountUp(target: number, duration: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const range = end - start;
    const increment = (end > start ? 1 : -1) * (range / duration);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.round(current));
      }
    }, 1);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}
