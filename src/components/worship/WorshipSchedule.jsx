import React from 'react';

const WorshipSchedule = () => {
  const sundayServices = [
    {
      language: "Kannada",
      times: ["7 AM", "11 AM"],
      description: "Worship service in Kannada language"
    },
    {
      language: "Hindi",
      times: ["7 AM"],
      description: "Worship service conducted in Hindi"
    },
    {
      language: "English",
      times: ["9 AM"],
      description: "Contemporary worship service in English"
    },
    {
      language: "Tamil",
      times: ["9 AM"],
      description: "Worship service in Tamil language"
    },
    {
      language: "Telugu",
      times: ["11 AM"],
      description: "Worship service conducted in Telugu"
    }
  ];

  const weeklyServices = [
    {
      day: "Second Sunday",
      event: "Prayer and Praise",
      time: "5:30 PM to 7 PM",
      description: "A special evening of prayer and worship",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      day: "Every Wednesday",
      event: "Prayer and Praise",
      time: "6 PM",
      description: "Midweek prayer and worship gathering",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section id="worship-schedule" className="py-20 bg-[#FDEBDD] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Sunday Worship Gatherings
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We gather every week to worship, pray, and grow together. Find a service that fits you.
          </p>
        </div>

        {/* Sunday Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sundayServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#fd8a77] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black">{service.language}</h3>
                </div>
                
                <div className="mb-4">
                  {service.times.map((time, timeIndex) => (
                    <span 
                      key={timeIndex}
                      className="inline-block bg-[#fd8a77] text-white px-4 py-2 rounded-full text-lg font-semibold mr-2 mb-2"
                    >
                      {time}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="w-full cursor-pointer bg-[#FDEBDD] hover:bg-[#fd8a77] hover:text-white text-black font-medium py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Join This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Services */}
        <div className="bg-white rounded-2xl shadow-lg p-12" data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Prayer and Praise</h3>
            <p className="text-xl text-gray-700">Additional worship opportunities throughout the week</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weeklyServices.map((service, index) => (
              <div 
                key={index}
                className="bg-[#FDEBDD] rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#fd8a77] rounded-full flex items-center justify-center text-white mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black">{service.event}</h4>
                    <p className="text-[#fd8a77] font-semibold">{service.day}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-[#fd8a77] text-white px-4 py-2 rounded-full text-lg font-semibold">
                    {service.time}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorshipSchedule;
