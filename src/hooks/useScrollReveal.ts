import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        const dir = element.getAttribute('data-reveal') || 'up';
        let fromVars: gsap.TweenVars = { autoAlpha: 0, y: 34, scale: 0.98 };

        switch (dir) {
          case 'left':
            fromVars = { autoAlpha: 0, x: -50, scale: 1 };
            break;
          case 'right':
            fromVars = { autoAlpha: 0, x: 50, scale: 1 };
            break;
          case 'scale':
            fromVars = { autoAlpha: 0, scale: 0.85, y: 0 };
            break;
          case 'flip':
            fromVars = { autoAlpha: 0, rotateY: 15, y: 20, scale: 0.95 };
            break;
          default:
            break;
        }

        gsap.fromTo(
          element,
          fromVars,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);
}
