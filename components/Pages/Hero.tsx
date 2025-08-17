"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/images/heroo.png"
          alt="Digital Marketing Background"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Mobile Background */}
      <div className="md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/images/heromob.png"
          alt="Digital Marketing Background Mobile"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
      </div>
      
      <div className="h-[100dvh] relative z-10 flex flex-col">
        {/* Content Container */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-end">
              {/* Text Content - Right-aligned with centered text */}
              <div className="w-full md:w-1/2 lg:w-[45%] text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#B9935B] to-transparent rounded-full"></div>
                  
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Stop Wasting Money on <span className="text-[#B9935B]">Ineffective Ads</span>
                  </motion.h1>
                  
                  <motion.div 
                    className="w-24 h-1 bg-[#B9935B] mx-auto my-6 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "6rem" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  
                  <motion.p 
                    className="text-lg lg:text-xl text-white/90 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Convert ad spend into measurable profit with our data-driven strategies. 
                    Pay only for results that grow your business.
                  </motion.p>
                  
                  <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <Link href="/contact" 
                      className="inline-flex items-center justify-center bg-gradient-to-r from-[#B9935B] to-[#9c7a4d] hover:from-[#a58251] hover:to-[#8a6b43] text-white px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 group"
                    >
                      Book Your Free Strategy Call
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-12 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    
                    <p className="text-white/80 mt-4 text-md">Trusted by 500+ businesses worldwide</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <motion.div 
          className="flex justify-center w-full py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <p className="text-white uppercase text-sm font-semibold tracking-widest mb-2">
                Scroll to Discover
              </p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;