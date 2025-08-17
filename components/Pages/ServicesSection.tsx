"use client";
import { useRef, useId, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { animate, useMotionValue } from "framer-motion";
import Link from "next/link";

// ShadowOverlay Component
function ShadowOverlay({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const feColorMatrixRef = useRef<SVGFEColorMatrixElement>(null);
  const hueRotateMotionValue = useMotionValue(180);
  
  // Reduced noise opacity for brighter background
  const animationConfig = { scale: 20, speed: 30 };
  const noiseConfig = { opacity: 0.05, scale: 0.5 };
  
  const displacementScale = mapRange(animationConfig.scale, 1, 100, 20, 100);
  const animationDuration = mapRange(animationConfig.speed, 1, 100, 1000, 50);

  useEffect(() => {
    if (feColorMatrixRef.current) {
      const hueRotateAnimation = animate(hueRotateMotionValue, 360, {
        duration: animationDuration / 1000,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        onUpdate: (value) => {
          if (feColorMatrixRef.current) {
            feColorMatrixRef.current.setAttribute("values", String(value));
          }
        }
      });

      return () => hueRotateAnimation.stop();
    }
  }, [animationDuration, hueRotateMotionValue]);

  function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number
  ): number {
    return toLow + ((value - fromLow) * (toHigh - toLow)) / (fromHigh - fromLow);
  }

  return (
    <div className={className} style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: -displacementScale,
          filter: `url(#${id}) blur(4px)`
        }}
      >
        <svg style={{ position: "absolute" }}>
          <defs>
            <filter id={id}>
              <feTurbulence
                result="undulation"
                numOctaves="2"
                baseFrequency={`${mapRange(animationConfig.scale, 0, 100, 0.001, 0.0005)},${mapRange(animationConfig.scale, 0, 100, 0.004, 0.002)}`}
                seed="0"
                type="turbulence"
              />
              <feColorMatrix
                ref={feColorMatrixRef}
                in="undulation"
                type="hueRotate"
                values="180"
              />
              <feColorMatrix
                in="dist"
                result="circulation"
                type="matrix"
                values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="circulation"
                scale={displacementScale}
                result="dist"
              />
              <feDisplacementMap
                in="dist"
                in2="undulation"
                scale={displacementScale}
                result="output"
              />
            </filter>
          </defs>
        </svg>
        <div
          style={{
            maskImage: `url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png')`,
            maskSize: "cover",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            width: "100%",
            height: "100%"
          }}
        />
      </div>

      {/* Reduced noise opacity for brighter background */}
      {noiseConfig.opacity > 0 && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
            backgroundSize: noiseConfig.scale * 200,
            backgroundRepeat: "repeat",
            opacity: noiseConfig.opacity
          }}
        />
      )}
    </div>
  );
}

// ServicesSection Component
function ServicesSection() {
  const headerRef1 = useRef<HTMLHeadingElement>(null);
  const headerRef2 = useRef<HTMLHeadingElement>(null);
  const headerRef3 = useRef<HTMLHeadingElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featuresHeaderRef1 = useRef<HTMLHeadingElement>(null);
  const featuresHeaderRef2 = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations for services section
    [headerRef1.current, headerRef2.current, headerRef3.current].forEach((header) => {
      if (header) {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
          y: "100%",
          opacity: 0,
          duration: 1,
        });
      }
    });

    // Service items animation
    serviceRefs.current.forEach((service, index) => {
      if (service) {
        gsap.from(service, {
          scrollTrigger: {
            trigger: service,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
        });
      }
    });

    // Features header animation
    [featuresHeaderRef1.current, featuresHeaderRef2.current].forEach((header) => {
      if (header) {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
          y: "100%",
          opacity: 0,
          duration: 1,
        });
      }
    });

    // Feature items animation
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.from(feature, {
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
        });
      }
    });
  });

  return (
    <section
      id="services"
      className="min-h-screen py-24 px-4 lg:px-12 flex flex-col justify-center relative overflow-hidden"
    >
      <ShadowOverlay className="absolute inset-0 -z-10" />
      {/* Added subtle white overlay for brighter background */}
      <div className="absolute inset-0 bg-white bg-opacity-10 -z-10"></div>
      
      <div className="mx-auto relative z-10 w-full ">
        {/* Unified Header */}
        <div className="flex flex-col items-center text-center lg:text-left mb-16">
          <div className="mask overflow-hidden">
            <h2 ref={headerRef1} className="text-4xl lg:text-5xl uppercase" style={{ color: '#B9935B' }}>
              Everything You Need to Scale
            </h2>
          </div>
          <div className="mask overflow-hidden">
            <h2
              ref={headerRef2}
              className="text-4xl lg:text-5xl uppercase mt-0 md:mt-5"
              style={{ color: '#000000' }}
            >
              With Paid Social
            </h2>
          </div>
          <div className="mask overflow-hidden">
            <h2 
              ref={headerRef3} 
              className="text-4xl lg:text-5xl uppercase mt-2 md:mt-5"  
              style={{ color: '#B9935B' }}
            >
              Without Burning Your Budget?
            </h2>
          </div>
        </div>

        {/* Services List with improved alignment */}
        <div className="grid grid-cols-1 gap-10 mx-auto">
          {[
            {
              num: "01",
              title: "Campaign Setup & Strategy",
              desc: "Full funnel approach designed for maximum ROI. We build campaigns that convert from top to bottom with strategic audience segmentation and goal-based optimization.",
            },
            {
              num: "02",
              title: "Creative Production",
              desc: "Scroll-stopping short-form videos, high-converting ad graphics, and authentic UGC content. We create assets that perform across all social platforms.",
            },
            {
              num: "03",
              title: "Audience Targeting",
              desc: "Precision targeting to reach your ideal customers. We combine 1st-party data, lookalike audiences, and interest-based targeting to put your ads in front of high-intent users.",
            },
            {
              num: "04",
              title: "Ad Optimization & Scaling",
              desc: "Daily tweaks and adjustments to maximize performance. We scale winning campaigns while maintaining efficiency, increasing conversions while decreasing CPA.",
            },
            {
              num: "05",
              title: "Tracking & Reporting",
              desc: "Transparent, easy-to-understand results. We provide clear insights into campaign performance with actionable recommendations for continuous improvement.",
            },
          ].map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="relative"
            >
              <div 
                className={`flex items-start pb-8 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}
              >
                <div className={`flex items-start w-full lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Fixed spacing logic here */}
                  <div className={`text-[#B9935B] text-4xl ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`}>
                    {service.num}
                  </div>
                  <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-2xl font-bold mb-3 text-black"> { service.title}  </h3>
                    <p className="text-lg text-black opacity-80">{service.desc}</p>
                  </div>
                </div>
              </div>
              {/* Border positioned correctly for both left and right items */}
              <div 
                className={`absolute bottom-0 h-px bg-[#333333] ${index % 2 === 0 ? 'left-0' : 'lg:left-1/2'} w-full lg:w-1/2`}
              ></div>
            </div>
          ))}
        </div>

        {/* Features Section - Improved layout similar to services */}
        <div className="mt-24 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center lg:text-left mb-16">
            <div className="mask overflow-hidden">
              <h2 ref={featuresHeaderRef1} className="text-4xl lg:text-5xl uppercase" style={{ color: '#000000' }}>
                Get Ads That Match
              </h2>
            </div>
            <div className="mask overflow-hidden">
              <h2
                ref={featuresHeaderRef2}
                className="text-4xl lg:text-5xl uppercase mt-0 md:mt-5"
                style={{ color: '#B9935B' }}
              >
                Your Exact Goals
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {[
              {
                num: "01",
                title: "Budget-Friendly Plans",
                desc: "Start from under $500 and scale as you grow — we'll optimize every dollar for maximum results."
              },
              {
                num: "02",
                title: "Goal-Based Campaigns",
                desc: "Whether you want more sales, more leads, or brand awareness, we'll craft ads that hit the mark."
              },
              {
                num: "03",
                title: "Platform Expertise",
                desc: "Facebook, Instagram, TikTok, YouTube, Pinterest — or get an expert recommendation."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="relative"
              >
                <div 
                  className={`flex items-start pb-8 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}
                >
                  <div className={`flex items-start w-full lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Fixed spacing logic here */}
                    <div className={`text-[#B9935B] text-4xl ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`}>
                      {feature.num}
                    </div>
                    <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <h3 className="text-2xl font-bold mb-3 text-black">{feature.title}</h3>
                      <p className="text-lg text-black opacity-80">{feature.desc}</p>
                    </div>
                  </div>
                </div>
                {/* Border for features */}
                <div 
                  className={`absolute bottom-0 h-px bg-[#333333] ${index % 2 === 0 ? 'left-0' : 'lg:left-1/2'} w-full lg:w-1/2`}
                ></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <Link
              href="/contact"
              className="text-xs lg:text-sm tracking-wide uppercase px-6 py-3 transition-all hover:bg-[#B9935B] hover:text-white border border-[#B9935B]"
              style={{ 
                backgroundColor: 'transparent',
                color: '#B9935B'
              }}
            >
              Start Scaling Now
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mt-16 text-center">
            <div className="text-6xl lg:text-7xl leading-none" style={{ color: '#B9935B' }}>
              90%<span className="text-black text-lg lg:text-xl font-normal block mt-2">Higher Engagement Rate</span>
            </div>
            
            <div className="text-6xl lg:text-7xl leading-none" style={{ color: '#B9935B' }}>
              3.2X<span className="text-black text-lg lg:text-xl font-normal block mt-2">Better Conversion Rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;