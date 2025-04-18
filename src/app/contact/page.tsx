'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Navbar from '../components/Navbar';

interface Status {
  type: 'success' | 'error' | null;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<Status>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#0A192F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[#0A192F] bg-opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              radial-gradient(circle at 15% 85%, rgba(100, 255, 218, 0.08) 0%, transparent 25%),
              linear-gradient(0deg, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.95) 100%),
              repeating-linear-gradient(
                45deg,
                rgba(100, 255, 218, 0.05) 0px,
                rgba(100, 255, 218, 0.05) 1px,
                transparent 1px,
                transparent 15px
              )
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 30px 30px'
          }}
        />
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-[#64FFDA] mx-auto rounded-full" />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[#8892B0] max-w-2xl mx-auto"
            >
              Feel free to reach out to me for any questions or opportunities!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#64FFDA] transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <FiMail className="text-2xl text-[#64FFDA]" />
                  </div>
                  <div>
                    <h3 className="text-[#CCD6F6] font-semibold">Email</h3>
                    <a 
                      href="mailto:mishramanjeet26@gmail.com" 
                      className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                    >
                      mishramanjeet26@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#64FFDA] transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <FiPhone className="text-2xl text-[#64FFDA]" />
                  </div>
                  <div>
                    <h3 className="text-[#CCD6F6] font-semibold">Phone</h3>
                    <a 
                      href="tel:+919540932794" 
                      className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                    >
                      +91 9540932794
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#64FFDA] transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <FiMapPin className="text-2xl text-[#64FFDA]" />
                  </div>
                  <div>
                    <h3 className="text-[#CCD6F6] font-semibold">Location</h3>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Gurugram,Haryana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300"
                    >
                      Gurugram,Haryana
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#CCD6F6] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg focus:outline-none focus:border-[#64FFDA] text-[#CCD6F6]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#CCD6F6] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg focus:outline-none focus:border-[#64FFDA] text-[#CCD6F6]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#CCD6F6] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg focus:outline-none focus:border-[#64FFDA] text-[#CCD6F6]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#CCD6F6] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#112240] border border-[#233554] rounded-lg focus:outline-none focus:border-[#64FFDA] text-[#CCD6F6] resize-none"
                  />
                </div>

                {status.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-[#64FFDA] text-[#0A192F] rounded-lg font-semibold hover:bg-[#64FFDA]/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 