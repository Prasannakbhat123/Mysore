import React from 'react';

const AboutAG = () => {
  const agStats = [
    {
      number: "900+",
      label: "Congregations in Karnataka",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "65 Million",
      label: "Believers Worldwide",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "50+ Years",
      label: "Legacy of Faith",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const partnerships = [
    {
      title: "Participation",
      description: "Active involvement in AG fellowship activities and conferences",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Prayers",
      description: "United in prayer for the advancement of God's Kingdom globally",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Financial Partnership",
      description: "Regular financial support to fulfill the vision God has given",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Assemblies of God Fellowship
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We are a part of the Assemblies of God fellowship (AG). The AG is a cooperative fellowship of churches and pastors who come together for the greater cause of the Gospel.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {agStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-[#FDEBDD] rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full text-white mb-6">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">{stat.number}</h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* AG Description */}
        <div className="bg-[#FDEBDD] rounded-2xl p-12 mb-16" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-black mb-6">Global Impact</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              The AG today represents more than 900 congregations in Karnataka and nearly 6.5 crores (65 million) of believers worldwide. We support AG through our participation, prayers, and partnering on a regular basis through our finances so the vision God has given will be fulfilled.
            </p>
          </div>
        </div>

        {/* Partnership Ways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
          <div className="md:col-span-3 text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">How We Partner</h3>
            <p className="text-xl text-gray-700">Our commitment to the Assemblies of God fellowship</p>
          </div>
          
          {partnerships.map((partnership, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#fd8a77] rounded-full text-white mb-6">
                {partnership.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-4">{partnership.title}</h4>
              <p className="text-gray-700 leading-relaxed">{partnership.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-[#FDEBDD] rounded-2xl shadow-lg p-12" data-aos="fade-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Join Our Legacy
            </h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Be part of a church with deep roots and a bright future. Experience the heritage of faith that spans generations while helping us advance God's Kingdom.
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
              <a
                href="/contact"
                className="border-2 border-[#fd8a77] text-[#fd8a77] hover:bg-[#fd8a77] hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAG;
