import React from 'react';

const EschatologyBeliefs = () => {
  const eschatologyBeliefs = [
    {
      title: "The Resurrection",
      description: "There will be a bodily resurrection of the saved and the lost.",
      scriptures: ["1 Corinthians 15", "Romans 8:23", "Revelation 20:12-15"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "The Church & Its Mission",
      description: "The Church exists to evangelize, disciple, worship, and show God's love to the world.",
      scriptures: ["Matthew 28:19-20", "Acts 1:8", "Ephesians 4:11-16"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "The Ministry",
      description: "We are called to worship, preach the gospel, build the Church, and serve with compassion.",
      scriptures: ["John 4:23-24", "Ephesians 4:11-16", "Galatians 6:10"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Divine Healing",
      description: "Healing is part of Christ's atonement and available for all believers.",
      scriptures: ["Isaiah 53:4-5", "Matthew 8:16-17", "James 5:14-16"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "The Blessed Hope",
      description: "We await Christ's return and the resurrection of believers.",
      scriptures: ["1 Thessalonians 4:16-17", "Titus 2:13"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Millennial Reign of Christ",
      description: "Christ will return to reign on earth for 1,000 years, bringing peace and restoration.",
      scriptures: ["Revelation 20:1-6", "Zechariah 14:5", "Isaiah 11:6-9"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Final Judgment",
      description: "There will be a final judgment for all; the wicked will face eternal separation from God.",
      scriptures: ["Revelation 20:11-15", "Matthew 25:46"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "New Heavens & New Earth",
      description: "God will create a new heaven and earth filled with righteousness.",
      scriptures: ["2 Peter 3:13", "Revelation 21–22"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            Future Hope & Ministry
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our beliefs about the future, the Church's mission, and God's eternal plan for humanity.
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {eschatologyBeliefs.map((belief, index) => (
            <div 
              key={index}
              className="bg-[#FDEBDD] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
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
              <div className="bg-white rounded-lg p-4">
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

        {/* Statement of Faith Summary */}
        <div className="bg-[#FDEBDD] rounded-2xl shadow-lg p-12" data-aos="fade-up">
          <div className="text-center max-w-4xl mx-auto">
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
              Grounded in Scripture
            </h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              These beliefs form the biblical foundation of our faith at Mysore Hope Center. They guide our worship, ministry, and daily lives as we seek to honor God and serve our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/worship"
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center group"
              >
                Join Our Worship
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
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EschatologyBeliefs;
