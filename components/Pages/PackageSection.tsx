"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Check } from 'lucide-react';

function PackageSection() {
  const headerRef1 = useRef(null);
  const headerRef2 = useRef(null);
  const guaranteeRef = useRef(null);
 
  const priceRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animations
    const headers = [
      { ref: headerRef1, end: "top 80%" },
      { ref: headerRef2, end: "top 70%" },
      { ref: guaranteeRef, end: "top 60%" }
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
    gsap.from(".feature-item", {
      scrollTrigger: {
        trigger: ".feature-item",
        start: "top 80%",
        end: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
    });

    // Price animation
    gsap.from(priceRef.current, {
      scrollTrigger: {
        trigger: priceRef.current,
        start: "top 90%",
        end: "top 70%",
        scrub: true,
      },
      y: 100,
      opacity: 0,
      duration: 1
    });

    // Button animation
    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 90%",
        end: "top 70%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.5
    });

   
  });

  const features = [
    "Campaign strategy & buildout on Meta or TikTok (or both)",
    "30-day ad campaign management",
    "Audience research & targeting setup",
    "3–5 ad creatives (image or short-form video)",
    "Daily monitoring, bid & budget optimizations",
    "Weekly performance reports + final summary deck"
  ];

  return (
    <section
      id="packages"
      className="min-h-[100dvh] flex flex-col justify-center px-4 py-24 lg:px-12 relative overflow-hidden bg-white"
    >
      {/* Centered Headers */}
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="mask overflow-hidden">
          <h2 ref={headerRef1} className="text-4xl lg:text-6xl uppercase" style={{ color: '#000000' }}>
            Social Lead Engine
          </h2>
        </div>
        <div className="mask overflow-hidden">
          <h2
            ref={headerRef2}
            className="text-4xl lg:text-6xl uppercase mt-0 md:mt-5"
            style={{ color: '#B9935B' }}
          >
            Your Paid Traffic Workhorse
          </h2>
        </div>
      </div>
      
      <p className="text-xl lg:text-2xl mt-4 max-w-3xl text-black">
        We build, run, and scale your social ads to generate real, trackable leads.
      </p>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          {/* Image Container */}
          <div className="relative w-full h-80 lg:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Social Media Analytics"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
          
          <div>
            <h3 className="text-2xl lg:text-5xl mb-4 mt-0 md:mt-5" style={{ color: '#B9935B' }}>Who it&#39;s for:</h3>
            <ul className="space-y-5 text-lg lg:text-xl text-black">
              <li className="flex items-start gap-3">
                <span className="text-[#B9935B]">•</span>
                <span>Brands that don't want to learn Meta or TikTok Ads from scratch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B9935B]">•</span>
                <span>Founders who want booked calls and form fills—not likes and emojis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B9935B]">•</span>
                <span>Anyone who's been burned by an agency that "just boosted posts"</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 lg:w-1/3 ml-0 md:ml-32">
          <div>
            <h3 className="text-2xl lg:text-5xl mb-4" style={{ color: '#B9935B' }}>What You Get:</h3>
            <div className="space-y-3 text-xl">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item flex items-start gap-3 p-3 rounded-lg"
                >
                  <Check className="flex-shrink-0 mt-1" style={{ color: '#B9935B' }} size={20} />
                  <span className="text-black">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div ref={priceRef} className="text-5xl lg:text-6xl mb-2" style={{ color: '#B9935B' }}>
              $1,500
            </div>
            <p className="text-black mb-6">Flat Rate (plus ad spend you control)</p>
            
            <Link
              href="/contact"
              ref={buttonRef}
              className="text-sm lg:text-base tracking-wide uppercase px-6 py-3 w-full max-w-xs text-center transition-all border border-[#B9935B]"
              style={{ 
                backgroundColor: 'transparent',
                color: '#B9935B',
                fontWeight: 600
              }}
            >
              Launch Your Campaign
            </Link>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="mt-12 lg:mt-16">
        <div className="mask overflow-hidden">
          <Link href="/contact" 
            ref={guaranteeRef} 
            className="text-3xl lg:text-4xl uppercase text-center"
            style={{ color: '#B9935B' }}
          >
            Performance Guarantee
          </Link>
        </div>
        
        <div className="text-center mt-6 max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl text-black">
            If we don't generate at least 10 qualified leads by day 30, we'll extend the campaign for up to 2 weeks at no extra charge—with new creative, new targeting, and continued optimization—until we hit that threshold.
          </p>
        </div>
      </div>

     
    </section>
  );
}

export default PackageSection;