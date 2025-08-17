"use client";
import { useState } from 'react';

// Define the form data type
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  goal: string;
  budget: string;
  platforms: string[]; // Correctly typed as string array
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    goal: '',
    budget: '',
    platforms: [] // Initialize as empty string array
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentValues = [...prev.platforms];
      if (checked) {
        return { ...prev, platforms: [...currentValues, value] };
      } else {
        return { ...prev, platforms: currentValues.filter(item => item !== value) };
      }
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      message: '',
      goal: '',
      budget: '',
      platforms: []
    });
  };

  return (
    <section className="py-24 px-4 md:px-16 bg-white text-black contact" id='contact'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-[#B9935B] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-[#B9935B]">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Your Name <span className="text-[#B9935B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email <span className="text-[#B9935B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                />
              </div>
              
              {/* Strategy Questions */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xl font-medium mb-4 text-[#B9935B]">
                  Advertising Strategy Questions
                </h4>
                
                <div className="mb-6">
                  <label className="block text-lg font-medium mb-4 text-gray-800">
                    What's your main goal with ads right now?
                  </label>
                  <div className="space-y-3">
                    {[
                      'Boost online sales (eCommerce)',
                      'Increase in-store visits (local business)',
                      'Generate more qualified leads',
                      'Build brand awareness & followers',
                      'Retarget people who visited my site',
                      'Discuss goals with an expert'
                    ].map(option => (
                      <div key={option} className="flex items-start">
                        <input
                          type="radio"
                          id={`goal-${option}`}
                          name="goal"
                          value={option}
                          checked={formData.goal === option}
                          onChange={handleRadioChange}
                          className="mt-1 mr-3"
                        />
                        <label htmlFor={`goal-${option}`} className="text-gray-700">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-lg font-medium mb-4 text-gray-800">
                    What's your current monthly ad budget?
                  </label>
                  <div className="space-y-3">
                    {[
                      'Under $500',
                      '$500 - $1,000',
                      '$1,000 - $2,500',
                      '$2,500 - $5,000',
                      '$5,000 - $10,000',
                      '$10,000+',
                      'Not sure yet'
                    ].map(option => (
                      <div key={option} className="flex items-start">
                        <input
                          type="radio"
                          id={`budget-${option}`}
                          name="budget"
                          value={option}
                          checked={formData.budget === option}
                          onChange={handleRadioChange}
                          className="mt-1 mr-3"
                        />
                        <label htmlFor={`budget-${option}`} className="text-gray-700">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-lg font-medium mb-4 text-gray-800">
                    Which platforms are you interested in?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Facebook & Instagram',
                      'TikTok',
                      'YouTube',
                      'Google Ads',
                      'LinkedIn',
                      'Twitter',
                      'Pinterest',
                      'Programmatic'
                    ].map(option => (
                      <div key={option} className="flex items-start">
                        <input
                          type="checkbox"
                          id={`platform-${option}`}
                          name="platforms"
                          value={option}
                          checked={formData.platforms.includes(option)}
                          onChange={handleCheckboxChange}
                          className="mt-1 mr-3"
                        />
                        <label htmlFor={`platform-${option}`} className="text-gray-700">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Message <span className="text-[#B9935B]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                  required
                  placeholder="Tell us about your advertising needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-8 py-3 bg-[#B9935B] text-white rounded-md hover:bg-[#A07E4F] transition-colors"
              >
                Get Your Strategy
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-[#B9935B]">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#B9935B] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Email Us</h4>
                  <a href="mailto:info@apagency.ca" className="text-lg text-gray-600 hover:text-[#B9935B] transition-colors">
                    info@apagency.ca
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#B9935B] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Call Us</h4>
                  <a href="tel:6474240504" className="text-lg text-gray-600 hover:text-[#B9935B] transition-colors">
                    (647) 424-0504
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#B9935B] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">HQ Location</h4>
                  <p className="text-lg text-gray-600">
                    10330 Yonge St, Richmond Hill, ON L4C 5N1, Canada
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#B9935B] p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Working Hours</h4>
                  <p className="text-lg text-gray-600">
                    Monday-Friday: 9am - 7pm<br />
                    Saturday: 12pm - 4pm
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className="mt-12 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.1331787625924!2d-79.44073852358554!3d43.83050503809834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b9e7c0b3f8d%3A0x5d5a7a9a1a0a0a0a!2s10330%20Yonge%20St%2C%20Richmond%20Hill%2C%20ON%20L4C%205N1%2C%20Canada!5e0!3m2!1sen!2sus!4v1657656789012!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ap Agency Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Ap Agency. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}