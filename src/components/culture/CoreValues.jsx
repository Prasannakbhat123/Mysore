import React from 'react';

const CoreValues = () => {
  const coreValues = [
    {
      title: "Spirit-Filled",
      description: "We are empowered and guided by the Holy Spirit in all aspects of our ministry and daily lives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
    {
      title: "Bible-Based",
      description: "Scripture is our foundation and guide for faith, doctrine, and practical living.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Prayer-Powered",
      description: "Prayer is the driving force behind our ministry, decisions, and community life.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Christ-Centered",
      description: "Jesus Christ is at the heart of everything we do, say, and believe.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Strong Character",
      description: "We are committed to integrity, honesty, and moral excellence in all our relationships.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Compassionate Heart",
      description: "We show Christ's love through genuine care, empathy, and service to others.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Heart for Evangelism",
      description: "We are passionate about sharing the Gospel and making disciples of all nations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Meaningful Relationships",
      description: "We prioritize authentic connections and deep fellowship within our community.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Servant Leadership",
      description: "We believe in leading through servanthood, following the example of Jesus.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Prayer and Praise
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We are a Spirit-filled, Bible-based, and prayer-powered community that is centered on Christ.
            </p>
            <div className="bg-[#FDEBDD] rounded-2xl shadow-lg p-8 border-l-4 border-[#fd8a77]">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our values are rooted in strong character, compassion, and a heart for evangelism. We prioritize meaningful relationships and believe in leading through servanthood, following the example of Jesus.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              className="bg-[#FDEBDD] rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full text-white mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#FDEBDD] rounded-2xl shadow-lg p-12" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 33 33" 
                preserveAspectRatio="xMidYMid meet"
                className="text-[#fd8a77]"
              >
                <path 
                  d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Join Our Community
            </h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Experience a community where these values come alive through genuine relationships, spiritual growth, and purposeful service. Come and be part of our family in Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/worship"
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center group"
              >
                Visit Us
                <svg 
                  className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                onClick={() => {
                  window.location.href = '/community#get-in-touch';
                }}
                className="border-2 border-[#fd8a77] text-[#fd8a77] hover:bg-[#fd8a77] hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
