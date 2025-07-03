import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo entrance
    tl.fromTo(logoRef.current, 
      { 
        opacity: 0, 
        scale: 0.5,
        filter: 'blur(20px)'
      },
      { 
        opacity: 1, 
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power2.out"
      }
    );

    // Animate progress bar
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    }, "-=0.5");

    // Exit animation
    tl.to([logoRef.current, progressBarRef.current], {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.in"
    }, "+=0.3");

    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={logoRef} className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-glow mb-4">
          VANI
        </h1>
        <p className="text-lg text-white/60 tracking-widest">
          WEB DEVELOPER
        </p>
      </div>
      
      <div className="progress-container">
        <div ref={progressBarRef} className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;
