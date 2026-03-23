import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = countRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(node);
    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (percentage < 1) {
        window.requestAnimationFrame(animateCount);
      }
    };
    window.requestAnimationFrame(animateCount);
  }, [end, duration, isVisible]);

  // Format large numbers
  const formattedCount = count >= 1000000 
    ? (count / 1000000).toFixed(count % 1000000 === 0 ? 0 : 1) + 'M'
    : count >= 1000 
      ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'K'
      : count;

  return (
    <div ref={countRef} className="flex flex-col items-center text-center p-6">
      <span className="text-4xl md:text-5xl font-extrabold text-[#341100]">
        {formattedCount}{suffix}
      </span>
      {label && <span className="text-black font-semibold uppercase tracking-wider text-sm mt-2">{label}</span>}
    </div>
  );
};

export default AnimatedCounter;
