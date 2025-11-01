import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pic from '../assets/pic1.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'GSAP', icon: '🚀' },
    { name: 'Node.js', icon: '🔧' },
    {name:'MongoDB',icon:'💻'}
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.skill-icon',
        { opacity: 0, y: 30, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            ref={imageRef}
            className="flex justify-center lg:justify-start self-start"
          >
            <div className="relative lg:translate-x-12">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full glass-card p-2 glow-effect hover:scale-105 transition-all duration-500">
                <img
  src={pic}
  alt="Vani - Web Developer"
  className="w-full h-full object-cover rounded-full brightness-100"
/>
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse-glow"></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              About Me
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              I'm a passionate web developer with expertise in creating immersive digital experiences.
              I specialize in modern web technologies and love bringing creative ideas to life through
              code. My goal is to build applications that not only look stunning but also provide
              exceptional user experiences.
            </p>

            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-icon glass-card p-4 rounded-xl text-center hover:glow-effect transition-all duration-300 hover:scale-110"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-sm text-white/90 font-medium">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
