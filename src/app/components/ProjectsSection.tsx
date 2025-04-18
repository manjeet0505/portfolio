'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ProjectImage from './ProjectImage';

interface ProjectsSectionProps {
  hideHeader?: boolean;
}

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and dark theme.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/manjeet0505/portfolio',
    live: 'https://manjeet-mishra.netlify.app',
    image: '/portfolio.png'
  },
  {
    title: 'Task Management App',
    description: 'A full-stack task management application with features like task creation, status updates, and priority management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/manjeet0505/task-management',
    live: 'https://task-management-manjeet.netlify.app',
    image: '/task-app.png'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that shows current weather and forecasts for multiple cities. Uses OpenWeather API for real-time data.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/manjeet0505/weather-dashboard',
    live: 'https://weather-manjeet.netlify.app',
    image: '/weather.png'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsSection({ hideHeader = false }: ProjectsSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="space-y-20"
      >
        {/* Section Header - Only show if hideHeader is false */}
        {!hideHeader && (
          <motion.div 
            className="text-center space-y-4"
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6]">
              Featured Projects
            </h2>
            <p className="text-xl text-[#8892B0] max-w-2xl mx-auto">
              Here are some of my recent works
            </p>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <motion.div 
                className="relative w-full lg:w-3/5 aspect-video rounded-lg overflow-hidden shadow-xl shadow-[#112240]/50 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-[#64FFDA]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <ProjectImage src="/2593068.webp" alt={project.title} />
              </motion.div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-4">
                <motion.h3 
                  className="text-2xl font-bold text-[#CCD6F6]"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.div 
                  className="bg-[#112240] p-6 rounded-lg shadow-xl relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[#8892B0]">{project.description}</p>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-[#64FFDA] text-sm font-mono"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className="text-2xl" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="text-2xl" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 