import React from 'react';

const CoreBeliefs = () => {
  const coreBeliefs = [
    {
      title: "The Bible",
      description: "We believe the Bible is God's inspired, infallible, and life-transforming Word.",
      scriptures: ["2 Timothy 3:16-17", "2 Peter 1:21", "1 Thessalonians 2:13"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "One True God",
      description: "There is one eternal God revealed as Father, Son, and Holy Spirit.",
      scriptures: ["Deuteronomy 6:4", "Matthew 28:19", "2 Corinthians 13:14"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Jesus Christ",
      description: "Jesus is the eternal Son of God — born of a virgin, sinless, miracle-working, crucified, risen, and exalted.",
      scriptures: ["Matthew 1:23", "Hebrews 7:26", "Acts 2:22", "1 Corinthians 15:3-4", "Philippians 2:9-11"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "The Fall of Man",
      description: "Man was created in God's image but fell into sin, becoming separated from God.",
      scriptures: ["Genesis 1:26-27", "Romans 5:12-19", "Ephesians 2:1-3"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Salvation of Man",
      description: "Salvation is a gift of grace, received through faith in Jesus Christ.",
      scriptures: ["John 3:16", "Ephesians 2:8-9", "Romans 10:13-15"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Ordinances of the Church",
      description: "We practice baptism by immersion and the Lord's Supper as acts of faith and obedience.",
      scriptures: ["Matthew 28:19", "Romans 6:4", "1 Corinthians 11:26"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Baptism in the Holy Spirit",
      description: "All believers should seek the baptism of the Holy Spirit for power and service.",
      scriptures: ["Acts 1:8", "John 14:16-17", "Ephesians 5:18"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    },
    {
      title: "Sanctification",
      description: "Believers are called to a life of holiness, set apart for God.",
      scriptures: ["Romans 12:1-2", "Hebrews 12:14", "1 Thessalonians 5:23"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section id="core-beliefs" className="py-20 bg-[#FDEBDD] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Core Beliefs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            These fundamental truths form the foundation of our faith and guide our ministry at Mysore Hope Center.
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreBeliefs.map((belief, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-[#fd8a77] rounded-full flex items-center justify-center text-white mr-6 flex-shrink-0">
                  {belief.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {belief.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {belief.description}
              </p>
              
              {/* Scripture References */}
              <div className="bg-[#FDEBDD] rounded-lg p-4">
                <h4 className="text-sm font-semibold text-black mb-2 uppercase tracking-wide">
                  Scripture References:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {belief.scriptures.map((scripture, scriptureIndex) => (
                    <span 
                      key={scriptureIndex}
                      className="inline-block bg-[#fd8a77] text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {scripture}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreBeliefs;
