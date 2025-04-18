'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiNextdotjs, SiExpress, SiPrisma } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, description }) => {
  return (
    <motion.div
      className="relative bg-[#112240] rounded-lg p-6 hover:bg-[#1A2F4E] transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start space-x-4">
        <div className="text-4xl text-[#64FFDA] transform group-hover:rotate-12 transition-transform duration-300">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#CCD6F6] mb-2">{name}</h3>
          <p className="text-[#8892B0] text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const skills: SkillCardProps[] = [
  {
    icon: <FaReact />,
    name: "React.js",
    description: "Building modern and responsive user interfaces with React ecosystem"
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    description: "Server-side rendering and static site generation with Next.js"
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    description: "Type-safe development with TypeScript for scalable applications"
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    description: "Backend development with Node.js and Express.js"
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    description: "Database design and management with MongoDB"
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript"
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development"
  },
  // {
  //   icon: <TbBrandThreejs />,
  //   name: "Three.js",
  //   description: "3D graphics and animations for web applications",
  //   proficiency: 70
  // },
  {
    icon: <FaGitAlt />,
    name: "Git",
    description: "Version control and collaboration with Git"
  },
  {
    icon: <FaDocker />,
    name: "Docker",
    description: "Containerization and deployment with Docker"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-10 md:py-20 bg-[#0A192F]" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6] mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto rounded-full" />
          <p className="mt-6 text-[#8892B0] max-w-2xl mx-auto">
            Here&apos;s what I&apos;ve been working with recently. I&apos;m always eager to learn and adapt to new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#8892B0] text-sm">
            &quot;The only way to do great work is to love what you do.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 