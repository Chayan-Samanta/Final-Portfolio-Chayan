import { FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon, LinkedinIcon, Mail, ExternalLink, Code2, Palette, Globe } from 'lucide-react';

// Add custom X icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Home: FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and AI-powered recommendations",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "MongoDB", "AI/ML"]
    },
    {
      title: "Smart City Dashboard",
      description: "IoT-based dashboard for monitoring and managing urban infrastructure",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
      tags: ["IoT", "React", "Python", "Data Visualization"]
    },
    {
      title: "AI Content Generator",
      description: "Advanced content generation platform using GPT-4 and custom fine-tuned models",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tags: ["AI/ML", "NLP", "React", "FastAPI"]
    }
  ];

  const skills = [
    "React", "Node.js", "Python", "AWS",
    "MongoDB", "Next.js", "TailwindCSS"
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      url: "https://github.com/chayansamanta",
      label: "GitHub",
      className: "hover:text-[#333] hover:bg-white"
    },
    {
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/chayan-samanta-b16800252/",
      label: "LinkedIn",
      className: "hover:text-white hover:bg-[#0A66C2]"
    },
    {
      icon: XIcon,
      url: "https://twitter.com/chayansamanta06",
      label: "X (Twitter)",
      className: "hover:text-white hover:bg-black"
    },
    {
      icon: Mail,
      url: "mailto:chayansamanta06@gmail.com",
      label: "Email",
      className: "hover:text-white hover:bg-[#EA4335]"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center px-4 py-20 min-h-screen"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-4xl font-bold font-syne md:text-7xl gradient-text">
            Chayan Samanta
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl text-neutral-400 text-balance">
            Full-Stack Developer & AI Enthusiast crafting digital experiences for the future
          </p>
          <div className="flex gap-6 justify-center mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target={link.icon !== Mail ? "_blank" : undefined}
                rel={link.icon !== Mail ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-3 rounded-full 
                  border border-neutral-800
                  transition-all duration-300
                  ${link.className}
                  hover:border-transparent
                  hover:shadow-lg
                  backdrop-blur-sm
                `}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          
          {/* CV Download Button / for now disabled */}
          {/* <motion.a
            href="/cv/Chayan Samanta CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex gap-2 items-center px-6 py-3 text-lg font-medium text-white bg-violet-600 rounded-full transition-colors duration-300 hover:bg-violet-700"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </motion.a> */}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="overflow-hidden px-4 py-20"
      >
        <div className="mx-auto mb-12 max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold font-syne md:text-5xl gradient-text">
            Skills & Expertise
          </h2>
        </div>
        <div className="skills-container">
          <div className="flex gap-4 skills-scroll">
            {skills.concat(skills, skills).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 px-4 py-2 rounded-full border card-gradient border-neutral-800"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold font-syne md:text-5xl gradient-text">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border card-gradient border-neutral-800 group"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/50 group-hover:opacity-100">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold font-syne">{project.title}</h3>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-neutral-900 text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="px-4 py-20 bg-neutral-900/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold font-syne md:text-5xl gradient-text">
            What I Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Web Development",
                description: "Building scalable web applications with modern technologies and best practices"
              },
              {
                icon: Globe,
                title: "AI Integration",
                description: "Implementing AI solutions to enhance digital products and user experiences"
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Creating intuitive and beautiful interfaces that users love to interact with"
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-xl border card-gradient border-neutral-800">
                <service.icon className="mb-4 w-12 h-12 gradient-text" />
                <h3 className="mb-2 text-xl font-bold font-syne">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;