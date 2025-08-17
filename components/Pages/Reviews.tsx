"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconQuote } from "@tabler/icons-react";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  designation: string;
  image: string;
};

function Reviews() {
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Working with this team transformed our conversion rates. The Ad they created increased our leads by 45% in just 30 days.",
      name: "Sarah Johnson",
      designation: "Marketing Director, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      id: 2,
      quote: "The social ads campaign generated 28 qualified leads in the first month, far exceeding our expectations. Worth every penny!",
      name: "Michael Chen",
      designation: "CEO, GrowthLabs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      id: 3,
      quote: "After struggling with ineffective ads, their team turned our campaigns around. We're now getting 3x ROI on our ad spend.",
      name: "Jessica Williams",
      designation: "Founder, Bloom Cosmetics",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      id: 4,
      quote: "Their conversion-focused approach delivered results immediately. The landing page has a 22% conversion rate - our highest ever.",
      name: "David Rodriguez",
      designation: "E-commerce Manager, StyleHub",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80"
    }
  ];

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      duration: 1
    });

    // Stats animation
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 90%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      id="reviews"
      className="px-4 py-24 lg:px-12 overflow-hidden bg-gradient-to-br from-[#fdf9f4] to-[#f9f1e8]"
      ref={containerRef}
    >
      {/* Static Header */}
      <div className="text-center mb-16">
        <h2
          ref={headerRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight"
        >
          What Our <span className="text-[#B9935B]">Clients</span> Say
        </h2>
        <div className="w-24 h-1 bg-[#B9935B] mx-auto mt-6 rounded-full" />
      </div>
      
      {/* Testimonials Carousel */}
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#B9935B]" />
              <IconQuote className="absolute top-8 right-8 text-[#f9f1e8] w-24 h-24 -z-0" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Customer Image */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#B9935B] rounded-full blur-lg opacity-30 animate-pulse" />
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-lg relative"
                    />
                  </div>
                  
                  {/* Navigation dots - mobile only */}
                  <div className="flex gap-2 mt-6 md:hidden">
                    {testimonials.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => {
                          setActiveTestimonial(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-3 h-3 rounded-full ${
                          index === activeTestimonial 
                            ? 'bg-[#B9935B] scale-125' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="md:col-span-2">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-6 h-6 text-[#B9935B] mr-1" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-800 mb-8 italic relative pl-6 border-l-2 border-[#B9935B]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonials[activeTestimonial].quote}"
                  </motion.p>
                  
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-black">{testimonials[activeTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[activeTestimonial].designation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8 px-4">
            <button
              onClick={() => {
                handlePrev();
                setIsAutoPlaying(false);
              }}
              className="group/button flex h-16 w-16 items-center justify-center rounded-full bg-[#B9935B] text-white shadow-lg hover:bg-[#a58252] transition-colors"
            >
              <IconArrowLeft className="h-8 w-8 transition-transform duration-300 group-hover/button:-translate-x-1" />
            </button>
            <button
              onClick={() => {
                handleNext();
                setIsAutoPlaying(false);
              }}
              className="group/button flex h-16 w-16 items-center justify-center rounded-full bg-[#B9935B] text-white shadow-lg hover:bg-[#a58252] transition-colors"
            >
              <IconArrowRight className="h-8 w-8 transition-transform duration-300 group-hover/button:translate-x-1" />
            </button>
          </div>
          
          {/* Navigation dots - desktop */}
          <div className="hidden md:flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setActiveTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === activeTestimonial 
                    ? 'bg-[#B9935B] scale-125' 
                    : 'bg-gray-300 hover:bg-[#d8b986]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-24 stats-section">
        <motion.div 
          className="stat-item text-center p-6 bg-white rounded-2xl shadow-md border-t-4 border-[#B9935B]"
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <p className="text-4xl md:text-5xl font-bold text-[#B9935B]">45%</p>
          <p className="mt-2 text-gray-700 font-medium">Average Conversion Lift</p>
        </motion.div>
        <motion.div 
          className="stat-item text-center p-6 bg-white rounded-2xl shadow-md border-t-4 border-[#B9935B]"
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <p className="text-4xl md:text-5xl font-bold text-[#B9935B]">3.2x</p>
          <p className="mt-2 text-gray-700 font-medium">Average ROI Increase</p>
        </motion.div>
        <motion.div 
          className="stat-item text-center p-6 bg-white rounded-2xl shadow-md border-t-4 border-[#B9935B]"
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <p className="text-4xl md:text-5xl font-bold text-[#B9935B]">500+</p>
          <p className="mt-2 text-gray-700 font-medium">Projects Completed</p>
        </motion.div>
        <motion.div 
          className="stat-item text-center p-6 bg-white rounded-2xl shadow-md border-t-4 border-[#B9935B]"
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <p className="text-4xl md:text-5xl font-bold text-[#B9935B]">98%</p>
          <p className="mt-2 text-gray-700 font-medium">Client Retention Rate</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;