import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const splineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Headline
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
    );

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.8'
    );

    // CTA button
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Spline (full‑width background)
    tl.fromTo(
      splineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' },
      '-=1'
    );

    // Floating orbs loop
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.2,
      });
    });

    return () => tl.kill();
  }, []);

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center cosmic-gradient overflow-hidden"
    >
      {/* ----------  FULL‑WIDTH SPLINE  ---------- */}
      <div
        ref={splineRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <iframe
          src="https://my.spline.design/dotwaves-yYFJ871SeetsbFN5s7kcWBdd/"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* ----------  FLOATING ORBS  ---------- */}
      <div className="floating-orb absolute w-32 h-32 top-20 left-10 animate-float"></div>
      <div
        className="floating-orb absolute w-24 h-24 top-40 right-20 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="floating-orb absolute w-16 h-16 bottom-32 left-1/4 animate-float"
        style={{ animationDelay: '4s' }}
      ></div>
      <div
        className="floating-orb absolute w-20 h-20 bottom-20 right-1/3 animate-float"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* ----------  CENTERED CONTENT  ---------- */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="text-glow bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vani
          </span>
          <br />
          <span className="text-white/90">Web Developer</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white mb-8 leading-relaxed"
        >
          Crafting digital experiences that inspire and engage through innovative
          design and cutting‑edge technology.
        </p>

        <button
          ref={ctaRef}
          onClick={handleHireMe}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 glow-effect hover:scale-105 active:scale-95"
        >
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Hero;

