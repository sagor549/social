import Link from "next/link";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo.png" 
                alt="AP Agency Logo"
                width={144}
                height={144}
                className="w-36 h-36 object-contain"
              />
              <h3 className="text-2xl font-bold">AP Agency</h3>
            </div>
            
            <p className="text-gray-300">
              We create high-performance ad strategies that capture attention, target the right audience, and turn clicks into customers.
            </p>
            
            
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-[#B9935B] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Packages', href: '#packages' },
                { name: 'Reviews', href: '#reviews' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-[#B9935B] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-[#B9935B] inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-[#B9935B] p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <a 
                    href="mailto:info@apagency.ca" 
                    className="text-gray-300 hover:text-[#B9935B] transition-colors"
                  >
                    info@apagency.ca
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-[#B9935B] p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <a 
                    href="tel:6474240504" 
                    className="text-gray-300 hover:text-[#B9935B] transition-colors"
                  >
                    (647) 424-0504
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="bg-[#B9935B] p-2 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">HQ Location</p>
                  <p className="text-gray-300">
                    10330 Yonge St, Richmond Hill,<br /> ON L4C 5N1, Canada
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-[#B9935B] inline-block">
              Working Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday-Friday</span>
                <span>9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span>12pm - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            
            <div className="mt-8 bg-[#222222] p-6 rounded-lg">
              <h5 className="font-semibold mb-3">Need immediate assistance?</h5>
              <Link 
                href="/contact" 
                className="inline-block bg-[#B9935B] text-white px-6 py-3 rounded-md hover:bg-[#a58252] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© {currentYear} AP Agency. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;