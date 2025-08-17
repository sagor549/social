"use client";

import { useState, useEffect } from 'react';

export default function AdStrategyForm() {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    budget: '',
    platforms: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    website: ''
  });

  useEffect(() => {
    const isSubmitted = localStorage.getItem('formSubmitted');
    const wasSkipped = localStorage.getItem('formSkipped');
    if (!isSubmitted && !wasSkipped) {
      setShowForm(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('formSubmitted', 'true');
    setShowForm(false);
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    if (
      (currentStep === 1 && formData.goal.includes('expert')) ||
      (currentStep === 2 && formData.budget.includes('expert')) ||
      (currentStep === 3 && formData.platforms.includes('expert'))
    ) {
      setCurrentStep(4);
    } else {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSkip = () => {
    localStorage.setItem('formSkipped', 'true');
    setShowForm(false);
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Skip Button */}
        <button 
          onClick={handleSkip}
          className="absolute top-4 right-4 text-xs uppercase tracking-wider text-gray-500 hover:text-[#B9935B] transition-colors"
        >
          Skip for now
        </button>
        
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2 text-[#B9935B]">
            Build Your Free Custom Ad Strategy
          </h2>
          <p className="text-gray-600 mb-6">Get a personalized plan in 4 simple steps</p>

          {/* Step Indicators */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-200 -z-10 mx-[16px]"></div>
            {[1, 2, 3, 4].map(step => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${currentStep >= step ? 'bg-[#B9935B] text-white' : 'bg-gray-200'}`}>
                  {step}
                </div>
                <span className="text-xs mt-1 text-gray-600">Step {step}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Goal */}
          {currentStep === 1 && (
            <div className="mb-6">
              <label className="block text-lg font-medium mb-4 text-gray-800">
               What&apos;s your main goal with ads right now?
              </label>
              <div className="space-y-3">
                {[
                  'Boost online sales (eCommerce)',
                  'Increase in-store visits (local business)',
                  'Generate more qualified leads',
                  'Build brand awareness & followers',
                  'Retarget people who’ve visited my site',
                  'I’d like to discuss my goals with an expert',
                  'Not sure yet — I just want to explore options'
                ].map(option => (
                  <div key={option} className="flex items-start">
                    <input
                      type="radio"
                      id={option}
                      name="goal"
                      value={option}
                      checked={formData.goal === option}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                      required
                    />
                    <label htmlFor={option} className="text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {currentStep === 2 && (
            <div className="mb-6">
              <label className="block text-lg font-medium mb-4 text-gray-800">
               What&apos;s your current monthly ad budget?
              </label>
              <div className="space-y-3">
                {[
                  'Under $500 (just testing)',
                  '$500 – $1,000',
                  '$1,000 – $2,500',
                  '$2,500 – $5,000',
                  '$5,000 – $10,000',
                  '$10,000+ (ready to scale)',
                  'I’d like to discuss budget with an expert',
                  'I haven’t set a budget yet'
                ].map(option => (
                  <div key={option} className="flex items-start">
                    <input
                      type="radio"
                      id={option}
                      name="budget"
                      value={option}
                      checked={formData.budget === option}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                      required
                    />
                    <label htmlFor={option} className="text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Platforms */}
          {currentStep === 3 && (
            <div className="mb-6">
              <label className="block text-lg font-medium mb-4 text-gray-800">
                Which platform(s) are you most interested in?
              </label>
              <div className="space-y-3">
                {[
                  'Facebook & Instagram',
                  'TikTok',
                  'YouTube Ads',
                  'Pinterest',
                  'Multiple platforms (full funnel)',
                  'I’d like an expert recommendation',
                  'Not sure — I need guidance'
                ].map(option => (
                  <div key={option} className="flex items-start">
                    <input
                      type="radio"
                      id={option}
                      name="platforms"
                      value={option}
                      checked={formData.platforms === option}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                      required
                    />
                    <label htmlFor={option} className="text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Personal Info */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Name <span className="text-[#B9935B]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
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
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700">
                  Phone (optional but encouraged)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 text-gray-700">
                  Company/Brand Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block mb-2 text-gray-700">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#B9935B] focus:border-transparent"
                  placeholder="https://"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-md transition-colors ${
                currentStep === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-[#B9935B] hover:text-[#A07E4F]'
              }`}
            >
              &larr; Back
            </button>
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-[#B9935B] text-white rounded-md hover:bg-[#A07E4F] transition-colors"
              >
                Continue &rarr;
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-[#B9935B] text-white rounded-md hover:bg-[#A07E4F] transition-colors"
              >
                Get My Strategy
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}