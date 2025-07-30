import React from 'react';

const SupportHero = () => {
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
            Support Our Mission
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-xl md:text-2xl lg:text-3xl text-[#fffbf8] opacity-85 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Join us in making a difference through your generous contributions
          </p>
        </div>

        {/* Call to Action Button */}
        <div data-aos="fade-up" data-aos-delay="600">
          <button 
            onClick={() => {
              document.getElementById('support-content').scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Learn How to Give
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
