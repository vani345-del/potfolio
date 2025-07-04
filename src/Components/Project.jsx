import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'phosphor-react';
import project_1 from '../assets/project-1.png';
import project_2 from '../assets/project-2.png';
import project_3 from '../assets/project-3.png';
import project_4 from '../assets/project-4.png';
// Example image, replace with actual paths

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const projects = [
    {
      id: 1,
      title:"VR Clothing House",
      description: "Immersive VR experience showcasing futuristic clothing designs",
      image: project_1,
      tech: ["React", "Node.js"],
      link: ""
    },
    {
      id: 2,
      title: "Chemeleon",
      description: "Interactive website with dynamic color themes and animations",
      image: project_2,
      tech: ["React", "CSS3", "Node.js"],
      link: "https://chameleon-jxif.vercel.app/"
    },
    {
      id: 3,
      title: "Painter website",
      description:"Elegant portfolio website for a painter with smooth animations",
      image: project_3,
      tech: ["React", "Tailwind CSS","Node.js"],
      link: "https://painter-website-ebon.vercel.app/"
    },
    {
      id: 4,
      title: "Suby Family Restaurant",
      description: "Responsive restaurant website with a modern design and smooth transitions",
      image: project_4,
      tech: ["React", "Tailwind CSS", "Node.js"],
      link: "https://client-side-frontend.vercel.app/"
    },
   
  ];

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

      // Cards stagger animation
      gsap.fromTo('.project-card',
        { 
          opacity: 0, 
          y: 60,
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 80%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-purple-900/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow"
        >
          Featured Projects
        </h2>
        
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card glass-card rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-glow transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform">
                 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
