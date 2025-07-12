import React from 'react';

const CommunityHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/home/hero-bg.jpg')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#fffbf8] opacity-85 mb-8 leading-tight">
            Our Community
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-xl md:text-2xl lg:text-3xl text-[#fffbf8] opacity-85 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Building connections, strengthening faith, and serving together
          </p>
        </div>

        {/* Join Us Button */}
        <div data-aos="fade-up" data-aos-delay="600">
          <a
            href="#community-mission"
            className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-12 py-5 rounded-full text-xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl inline-flex items-center group shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('community-mission')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Learn More
            <svg 
              className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
