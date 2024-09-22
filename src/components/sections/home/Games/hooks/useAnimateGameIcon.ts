import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const useAnimateGameIcon = () => {
  useGSAP(() => {
    const gameTile = '[data-gsap="game-tile"]';
    const gameTileElements = document.querySelectorAll(gameTile);

    for (const element of gameTileElements) {
      const timeline = gsap.timeline({ paused: true });
      const icon = element.querySelector('[data-gsap="game-icon"]');

      timeline.to(icon, {
        y: '-=8',
        duration: 0.4,
        repeat: -1,
        yoyo: true,
      });

      element?.addEventListener('mouseenter', function () {
        timeline.play();
      });

      element?.addEventListener('mouseleave', function () {
        timeline.pause();
        gsap.to(icon, {
          y: 0,
          duration: 0.3,
          onComplete: () => {
            timeline.seek(0);
          },
        });
      });
    }
  }, []);
};

export default useAnimateGameIcon;
