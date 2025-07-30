import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollingText from './ScrollingText';

const Welcome = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <section className="py-20 bg-[#FDEBDD] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #fd8a77 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-32 h-32 mb-8 transition-transform duration-500 hover:scale-110">
            <img 
              src="/assets/home/logo.png" 
              alt="Mysore Hope Center Logo" 
              className="w-full h-full object-contain hover:opacity-80 transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Scrolling Text */}
        <div className="mb-16" data-aos="fade-up">
          <ScrollingText />
        </div>

        {/* Service Cards Grid - Fixed Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Worship Card */}
          <div 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 flex flex-col h-full"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/assets/home/worship.webp" 
                alt="Worship" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#fd8a77] rounded-full mr-3"></div>
                <span className="text-sm font-medium text-[#fd8a77] uppercase tracking-wide">Worship</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#fd8a77] transition-colors duration-300">
                Join our Sunday Service
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Experience a heartfelt service that brings us closer together in faith and community.
              </p>
              <button
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full group-hover:shadow-xl mt-auto cursor-pointer"
                onClick={() => handleNavigation('/worship')}
              >
                Join us
              </button>
            </div>
          </div>

          {/* Events Card */}
          <div 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 flex flex-col h-full"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/assets/home/events.jpg" 
                alt="Events" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#fd8a77] rounded-full mr-3"></div>
                <span className="text-sm font-medium text-[#fd8a77] uppercase tracking-wide">Events</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#fd8a77] transition-colors duration-300">
                Ministries
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Stay updated with our latest gatherings and activities throughout the community.
              </p>
              <button
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full group-hover:shadow-xl mt-auto cursor-pointer"
                onClick={() => handleNavigation('/ministries')}
              >
                See more
              </button>
            </div>
          </div>

          {/* Community Card */}
          <div 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 flex flex-col h-full"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/assets/home/community.jpeg" 
                alt="Community" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#fd8a77] rounded-full mr-3"></div>
                <span className="text-sm font-medium text-[#fd8a77] uppercase tracking-wide">Community</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#fd8a77] transition-colors duration-300">
                Connect with Us
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Be part of a supportive and inclusive community that grows together.
              </p>
              <button
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full group-hover:shadow-xl mt-auto cursor-pointer"
                onClick={() => handleNavigation('/community')}
              >
                Get involved
              </button>
            </div>
          </div>

          {/* Support Card */}
          <div 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 flex flex-col h-full"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src="/assets/home/support.avif" 
                alt="Support" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-[#fd8a77] rounded-full mr-3"></div>
                <span className="text-sm font-medium text-[#fd8a77] uppercase tracking-wide">Support</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#fd8a77] transition-colors duration-300">
                How You Can Help
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Learn about meaningful ways to contribute and make a lasting difference.
              </p>
              <button
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full group-hover:shadow-xl mt-auto cursor-pointer"
                onClick={() => handleNavigation('/support')}
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
