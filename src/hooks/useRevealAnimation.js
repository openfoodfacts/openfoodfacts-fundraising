import { useEffect } from 'react';

const useRevealAnimation = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));

    // Immediately reveal elements already in the viewport
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('visible');
      }
    });

    // Observe remaining hidden elements for scroll-triggered reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
};

export default useRevealAnimation;
