import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, InstagramLogo, Phone, EnvelopeSimple } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      // Contact Info animation
      gsap.fromTo('.contact-info-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
          }
        }
      );

      // Social icons animation
      gsap.fromTo('.social-icon',
        { opacity: 0, scale: 0, rotation: 180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.social-icons',
            start: "top 80%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-purple-900/30">
      <div className="max-w-3xl mx-auto px-6 text-white">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow"
        >
          Get In Touch
        </h2>
        
        <p className="text-lg text-center text-white/80 mb-10">
          Interested in a modern, high-quality website or digital solution? <br />
          Reach out to me for web development, collaboration, or any project inquiries. I’m always excited to help bring your ideas to life!
        </p>

        <div className="glass-card p-8 rounded-2xl space-y-6" ref={contactInfoRef}>
          

          <div className="contact-info-item flex items-center gap-4">
            <EnvelopeSimple size={24} className="text-purple-400" />
            <span className="text-lg">vanibodasingu@gmail.com</span>
          </div>

          <div className="contact-info-item flex items-center gap-4">
            <InstagramLogo size={24} className="text-purple-400" />
            <a href="https://www.instagram.com/freelance_webdeveloperr/" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
             freelance_webdeveloperr
            </a>
          </div>
        </div>

        <div className="glass-card p-6 mt-12 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-glow">Connect With Me</h3>
          <div className="social-icons flex gap-4">
            <a 
              href="#" 
              className="social-icon flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-110"
            >
              <GithubLogo size={24} className="text-white/80 hover:text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vani-bodasingu-b8201826a/" 
              className="social-icon flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300 hover:scale-110"
            >
              <LinkedinLogo size={24} className="text-white/80 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
