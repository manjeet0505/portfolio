'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/manjeet0505'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/manjeet-mishra-175705260/'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#0A192F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-[#0A192F] bg-opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 50%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              radial-gradient(circle at 85% 30%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              linear-gradient(0deg, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.95) 100%),
              repeating-linear-gradient(
                -45deg,
                rgba(100, 255, 218, 0.05) 0px,
                rgba(100, 255, 218, 0.05) 1px,
                transparent 1px,
                transparent 12px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 24px 24px'
          }}
        />
      </div>

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-[#64FFDA] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-[#64FFDA]/20 rounded-lg transform rotate-6 group-hover:rotate-4 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#64FFDA]/20 rounded-lg transform -rotate-6 group-hover:-rotate-4 transition-transform duration-300" />
              
              {/* Main Image Container */}
              <div className="relative rounded-lg overflow-hidden border-2 border-[#64FFDA]">
                <Image
                  src="/manjeet.jpg"
                  alt="Manjeet Mishra"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-[#64FFDA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#64FFDA] opacity-50" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#64FFDA] opacity-50" />
            </div>

            {/* Social Links & Resume */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <Link
                href="/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] rounded-lg hover:bg-[#64FFDA]/10 transition-colors duration-300 group"
              >
                <HiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
                <span>Download Resume</span>
              </Link>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg border border-[#233554]/50">
              <div className="prose prose-invert max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#8892B0] text-lg leading-relaxed"
                >
                  I&apos;m a passionate full-stack developer with a keen interest in building impactful web applications.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-[#8892B0] text-lg leading-relaxed mt-4"
                >
                  My journey in web development started back in college when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[#8892B0] text-lg leading-relaxed mt-4"
                >
                  Fast-forward to today, and I've had the privilege of working at various companies, startups, and organizations. My main focus these days is building accessible, inclusive products and digital experiences.
                </motion.p>
              </div>
            </div>

            <div className="bg-[#112240]/80 backdrop-blur-sm p-8 rounded-lg border border-[#233554]/50">
              <h2 className="text-2xl font-semibold text-[#CCD6F6] mb-4">Skills & Technologies</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> JavaScript (ES6+)
                  </li>
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> React
                  </li>
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> Node.js
                  </li>
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> TypeScript
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> Next.js
                  </li>
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> Tailwind CSS
                  </li>
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> MongoDB
                  </li>
                  <li className="text-[#8892B0] flex items-center">
                    <span className="text-[#64FFDA] mr-2">▹</span> PostgreSQL
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage; 