import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-purple-400/30 rounded-full pointer-events-none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        footerRef.current.appendChild(particle);

        gsap.to(particle, {
          y: -100,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          delay: Math.random() * 2,
          ease: "power1.out"
        });
      }

      // Footer fade in animation
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-16 bg-gradient-to-t from-purple-900/40 to-background border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-glow mb-2">VANI</h3>
            <p className="text-white/60 text-sm">Web Developer</p>
          </div>
          
          {/* Navigation */}
          <div className="text-center">
            <div className="flex justify-center gap-6">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white/70 hover:text-white transition-colors duration-300 capitalize text-sm hover:text-glow"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-110 hover:glow-effect"
              >
                <GithubLogo size={20} className="text-white/80 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-110 hover:glow-effect"
              >
                <LinkedinLogo size={20} className="text-white/80 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © 2025 Vani. All rights reserved. Made with ❤️ and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
