'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sliderRef);

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const languageInsights = [
    {
      language: "JavaScript/TypeScript",
      description: "Modern ES6+ features, async programming, and type safety with TypeScript. Experienced in building scalable applications with clean architecture.",
      stats: {
        experience: "1+ years",
        projects: "3+",
        expertise: "Intermediate"
      },
      libraries: ["React", "Node.js", "Express", "Next.js"]
    },
    {
      language: "Python",
      description: "Data analysis, automation, and backend development. Strong focus on Django and FastAPI for building robust APIs and web applications.",
      stats: {
        experience: "1+ years",
        projects: "3+",
        expertise: "Intermediate"
      },
      libraries: ["Django", "FastAPI", "Pandas", "NumPy"]
    },
    {
      language: "Database Technologies",
      description: "Expertise in both SQL and NoSQL databases. Proficient in designing efficient schemas and optimizing queries for performance.",
      stats: {
        experience: "1+ years",
        projects: "3+",
        expertise: "Intermediate"
      },
      libraries: ["MongoDB", "PostgreSQL", "Redis", "MySQL"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % languageInsights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + languageInsights.length) % languageInsights.length);
  };

  return (
    <main className="min-h-screen bg-[#0A192F] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection onScrollClick={scrollToSkills} />
      <div ref={skillsRef}>
        <SkillsSection />
      </div>

      <ProjectsSection />

      {/* Language Insights Slider */}
      <section ref={sliderRef} className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6] mb-4">
              Language Insights
            </h2>
            <div className="w-24 h-1 bg-[#64FFDA] mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8"
            >
              {/* Navigation Buttons (Mobile: Bottom, Desktop: Sides) */}
              <button
                onClick={prevSlide}
                className="p-3 text-[#64FFDA] hover:bg-[#64FFDA]/10 rounded-full transition-colors duration-300 md:hidden order-3"
              >
                <FiArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={prevSlide}
                className="p-3 text-[#64FFDA] hover:bg-[#64FFDA]/10 rounded-full transition-colors duration-300 hidden md:block"
              >
                <FiArrowLeft className="w-6 h-6" />
              </button>

              {/* Slide Content (Mobile: order-2) */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-[#112240]/80 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-[#233554]/50 order-2 w-full"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#64FFDA] mb-4">
                  {languageInsights[currentSlide].language}
                </h3>
                <p className="text-sm md:text-base text-[#8892B0] mb-6">
                  {languageInsights[currentSlide].description}
                </p>

                {/* Stats Grid (Responsive columns) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {Object.entries(languageInsights[currentSlide].stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm md:text-base text-[#64FFDA] font-mono">{value}</div>
                      <div className="text-xs md:text-sm text-[#8892B0] capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Libraries/Frameworks */}
                <div className="flex flex-wrap gap-2">
                  {languageInsights[currentSlide].libraries.map((lib) => (
                    <span
                      key={lib}
                      className="px-3 py-1 bg-[#233554]/50 text-[#64FFDA] rounded-full text-xs md:text-sm"
                    >
                      {lib}
                    </span>
                  ))}
                </div>
              </motion.div>

              <button
                onClick={nextSlide}
                className="p-3 text-[#64FFDA] hover:bg-[#64FFDA]/10 rounded-full transition-colors duration-300 md:hidden order-3"
              >
                <FiArrowRight className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 text-[#64FFDA] hover:bg-[#64FFDA]/10 rounded-full transition-colors duration-300 hidden md:block"
              >
                <FiArrowRight className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 md:mt-8 gap-2">
              {languageInsights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-[#64FFDA] w-8'
                      : 'bg-[#233554] hover:bg-[#64FFDA]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
