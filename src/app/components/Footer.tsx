'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { HiOutlineArrowUp } from 'react-icons/hi';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.1
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com/manjeet0505' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://www.linkedin.com/in/manjeet-mishra-175705260/' },
  { name: 'Twitter', icon: FiTwitter, href: 'https://x.com/mishramanjeet26' },
  { name: 'Email', icon: FiMail, href: 'mailto:mishramanjeet26@gmail.com' }
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className="relative bg-[#0A192F] border-t border-[#233554] pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0A192F] border-2 border-[#64FFDA] text-[#64FFDA] p-3 rounded-full hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <HiOutlineArrowUp className="text-xl" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div variants={linkVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#CCD6F6] relative inline-block">
              About
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#64FFDA] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <p className="text-[#8892B0] leading-relaxed">
              A passionate full-stack developer dedicated to creating impactful web experiences. Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={linkVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#CCD6F6] relative inline-block">
              Quick Links
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#64FFDA] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300 flex items-center group"
                  >
                    <motion.span
                      className="inline-block w-2 h-[1px] bg-[#64FFDA] mr-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div variants={linkVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-[#CCD6F6] relative inline-block">
              Connect
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#64FFDA] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <social.icon className="text-2xl" />
                    <motion.span
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {social.name}
                    </motion.span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          variants={linkVariants}
          className="mt-16 pt-8 border-t border-[#233554] text-center"
        >
          <p className="text-[#8892B0] flex items-center justify-center gap-2">
            &copy; {currentYear} Manjeet Mishra
            <motion.span 
              className="text-[#64FFDA] inline-block"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &hearts;
            </motion.span>
            <span className="text-[#8892B0]">Built with Next.js</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 