import React from 'react';

const WorshipExpectations = () => {
  const expectations = [
    {
      title: "Warm Welcome",
      description: "Experience genuine hospitality from the moment you arrive. Our greeters and ushers are here to help you feel at home.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Engaging Worship",
      description: "Join us in heartfelt worship through contemporary and traditional songs that honor God and inspire your spirit.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      title: "Inspiring Message",
      description: "Receive practical, biblical teaching that speaks to your life and helps you grow in your relationship with God.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Meaningful Fellowship",
      description: "Connect with others who share your faith journey. Build relationships that extend beyond Sunday morning.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const firstVisitTips = [
    {
      tip: "Come as You Are",
      description: "No dress code required - wear what makes you comfortable"
    },
    {
      tip: "Arrive Early",
      description: "Come 10-15 minutes early to find parking and get settled"
    },
    {
      tip: "Bring Your Family",
      description: "Children are welcome in all services with age-appropriate programs"
    },
    {
      tip: "Ask Questions",
      description: "Our team is here to help and answer any questions you may have"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What to Expect Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What to Expect
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Expect a warm welcome, engaging worship, and an inspiring message. We look forward to meeting you!
          </p>
        </div>

        {/* Expectations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {expectations.map((expectation, index) => (
            <div 
              key={index}
              className="bg-[#FDEBDD] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full text-white mb-6">
                {expectation.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {expectation.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {expectation.description}
              </p>
            </div>
          ))}
        </div>

        {/* First Visit Tips */}
        <div className="bg-[#FDEBDD] rounded-2xl p-12" data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">First Time Visiting?</h3>
            <p className="text-xl text-gray-700">Here are some helpful tips to make your visit comfortable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {firstVisitTips.map((tip, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#fd8a77] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-2">{tip.tip}</h4>
                    <p className="text-gray-700">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-black mb-4">Have Questions?</h4>
            <p className="text-gray-700 mb-6">We're here to help make your first visit comfortable and welcoming.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group"
              >
                Contact Us
                <svg 
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/community"
                className="border-2 border-[#fd8a77] text-[#fd8a77] hover:bg-[#fd8a77] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipExpectations;
