"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef,useId, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";




function AboutSection() {
  const headerRef1 = useRef(null);
  const headerRef2 = useRef(null);
  const headerRef3 = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const headers = [
      { ref: headerRef1, end: "top 80%" },
      { ref: headerRef2, end: "top 70%" },
      { ref: headerRef3, end: "top 60%" },
    ];

    headers.forEach(header => {
      gsap.from(header.ref.current, {
        scrollTrigger: {
          trigger: header.ref.current,
          start: "top 100%",
          end: header.end,
          scrub: true,
        },
        y: "100%",
      });
    });

    // Content fade-in
    gsap.from(".bio", {
      scrollTrigger: {
        trigger: ".bio",
        start: "top 80%",
        end: "top 70%",
      },
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });

    // Stats animations
    gsap.from([stat1Ref.current, stat2Ref.current], {
      scrollTrigger: {
        trigger: stat1Ref.current,
        start: "top 90%",
        end: "top 70%",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      stagger: 0.3
    });
  });

  return (
    <section
      id="about"
      className="min-h-[100dvh] text-black flex flex-col justify-center px-4 pt-24 md:px-16 relative overflow-hidden"
    >
      
      {/* Added subtle white overlay for brighter background */}
      <div className="absolute inset-0 bg-white bg-opacity-10 -z-10"></div>
      {/* Animated Headers */}
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start gap-5">
        <div className="mask overflow-hidden">
          <h2 ref={headerRef1} className="text-4xl lg:text-5xl uppercase" style={{ color: 'black' }}>
           Stop wasting money on underperforming ads.
          </h2>
        </div>
        <div className=" overflow-hidden">
          <h2
            ref={headerRef2}
            className="text-4xl lg:text-5xl  mt-0 md:mt-5"
            style={{ color: '#B9935B' }}
          ><span className="text-black">We </span>
           Create And Refine <span className="text-black mt-2 block lg:inline">Ad Campaigns That Capture Attention,</span><span>  Target The Right Audience</span>
          </h2>
        </div>
        <div className="mask overflow-hidden">
          <h2 
            ref={headerRef3} 
            className="text-4xl lg:text-5xl uppercase mt-2 text-black md:mt-5"  
          >
           and turn clicks <span style={{ color: '#B9935B' }}>into customers.</span>
          </h2>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-16 mt-8 lg:mt-12 items-center justify-center">
        <div className="relative w-full max-w-2xl h-60 lg:h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Landing page optimization"
            fill
            className="object-center object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex flex-col gap-4">
           <p className="text-lg md:text-4xl bio text-black text-center lg:text-left">
  <span style={{ color: '#B9935B' }}>Your ad spend is going to waste</span> on campaigns that don’t convert. 
  We build <span style={{ color: '#B9935B' }}>high-performance ad strategies</span> that capture attention, 
  target the right audience, and turn clicks into customers through data-driven optimization and testing. 
  <span style={{ color: '#B9935B' }}>Stop losing money</span> on ads that fail to deliver.
</p>


            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="text-xs lg:text-sm tracking-wide uppercase px-6 py-3 bio transition-all hover:bg-[#B9935B] hover:text-black border border-[#B9935B]"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#B9935B'
                }}
              >
               Fix Your Campaigns
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 mt-12 lg:mt-16 text-center">
        <div ref={stat1Ref} className="text-6xl lg:text-7xl leading-none" style={{ color: '#B9935B' }}>
          50%<span className="text-black text-lg lg:text-xl font-normal block mt-2">lower cost per lead through precise targeting</span>
        </div>
        
        <div ref={stat2Ref} className="text-6xl lg:text-7xl leading-none" style={{ color: '#B9935B' }}>
          45X<span className="text-black text-lg lg:text-xl font-normal block mt-2">higher ROAS with optimized ad campaigns</span>
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16" style={{ color: '#B9935B' }}>
          Our Advertising Process
        </h2>
        
        {/* Process Step 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20">
          <div className="relative w-full max-w-2xl h-60 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Strategy meeting"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#B9935B' }}>Free Strategy Call</h3>
            <p className="text-lg lg:text-2xl text-black">
              We understand your brand, audience, and goals to create a tailored advertising strategy that aligns with your objectives.
            </p>
          </div>
        </div>
        
        {/* Process Step 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 mb-20">
          <div className="relative w-full max-w-2xl h-60 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Optimization process"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#B9935B' }}>Optimize & Scale</h3>
            <p className="text-lg lg:text-2xl text-black">
              We refine campaigns daily to maximize ROI, starting from under $500 and scaling as you grow.
            </p>
          </div>
        </div>
        
        {/* Process Step 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="relative w-full max-w-2xl h-60 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Launch and testing"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#B9935B' }}>Launch & Test</h3>
            <p className="text-lg lg:text-2xl text-black">
              Ads go live within 7 days, with continuous testing across platforms like Facebook, Instagram, TikTok, and YouTube.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <Link
          href="/contact"
          className="inline-block text-sm lg:text-base tracking-wide uppercase px-8 py-4 transition-all bg-[#B9935B] text-black hover:bg-[#A07E4F]"
        >
          Start Your Advertising Success
        </Link>
      </div>
    </section>
  );
}

export default AboutSection;