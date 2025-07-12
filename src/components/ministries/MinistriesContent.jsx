import React from 'react';

const MinistriesContent = () => {
  const ministries = [
    {
      id: 1,
      title: "HOPE KIDS",
      subtitle: "Children's Ministry",
      description: "At Mysore Hope Center we want to see children come to meet Jesus and become more like HIM! Our goal is to help kids at MHC GROW in Jesus and learn the Bible from the beginning to end. It's God's great planbook for their life! We have THREE great age-appropriate classes are ready to help meet the needs of all our Hope Kids. We also have LOTS of other fun camps, seminars, and activities to help your child grow in Christ.",
      image: "/assets/home/community.jpeg",
      timings: "Every Sunday at 7 AM, 9 AM and 11 AM.",
      classes: [
        "Hope Begins: LKG-UKG",
        "Hope Grow: 1st standard - 5th standard",
        "Hope Digs Deep: 6th - 7th standard"
      ]
    },
    {
      id: 2,
      title: "GO DEEPER - TEENS",
      subtitle: "Teen Ministry",
      description: "Hope Teens is there to help your teen take ownership of their relationship with Christ. Learn how to go deeper into God's word and understand what it means to be an active member of the body Christ. Bible Quiz, and Summer Bible Crash Course are just a couple of the other great learning opportunities your teen can grow through!",
      image: "/assets/home/events.jpg",
      timings: "1st Sunday - SERVE, 2nd and 4th Sundays - 9 AM"
    },
    {
      id: 3,
      title: "WOMEN'S MINISTRY",
      subtitle: "Sisters in Faith",
      description: "Join the women of MHC as we intercede together before the Lord and grow in our purpose and mission as women, and serve the body and community in different capacities.",
      image: "/assets/ministries/women.jpeg",
      timings: "Esther Intercession Prayer: Tuesdays 10 AM - 12 PM\nMonthly Women's Meeting- Every Second Saturday 3-4:30 PM"
    },
    {
      id: 4,
      title: "MEN'S MINISTRY",
      subtitle: "Brothers in Christ",
      description: "Join the Men of MHC as we grow together to be strong, godly leaders in our families, workplace, and communities.",
      image: "/assets/ministries/men.jpg",
      timings: "Men's Monthly Gathering every second Saturday - 7 AM with breakfast"
    },
    {
      id: 5,
      title: "MHC Connexion (Young Adults)",
      subtitle: "Young Adults Ministry",
      description: "Connexion is here to serve young adults studying degree and onwards and help them navigate life together by keeping each other accountable in character and their walk with God. We're better together!",
      image: "/assets/ministries/youth.jpg",
      timings: "Thursday Care Cell At Hope Cafe- 6:30 PM onwards\n4th Saturday - Young Adults Service: 6:30 PM onwards"
    }
  ];

  return (
    <section id="ministries-content" className="py-20 bg-[#FDEBDD] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#231F20] mb-6">
            Our Ministry Programs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the various ways we serve our community and grow together in faith
          </p>
        </div>

        {/* Ministry Sections */}
        <div className="space-y-20">
          {ministries.map((ministry, index) => (
            <div 
              key={ministry.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src={ministry.image} 
                    alt={ministry.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-[#fd8a77] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {ministry.title}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-[#fd8a77] rounded-full mr-3"></div>
                    <span className="text-[#fd8a77] font-semibold text-lg uppercase tracking-wide">
                      {ministry.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#231F20] mb-6 leading-tight">
                    {ministry.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {ministry.description}
                </p>

                {/* Timings Section */}
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                    <svg className="w-5 h-5 text-[#fd8a77] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Timings:
                  </h4>
                  <div className="text-gray-700 leading-relaxed">
                    {ministry.timings.split('\n').map((timing, timingIndex) => (
                      <div key={timingIndex} className="mb-1">
                        {timing}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Classes Section (only for Hope Kids) */}
                {ministry.classes && (
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                      <svg className="w-5 h-5 text-[#fd8a77] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Age Groups:
                    </h4>
                    <div className="space-y-2">
                      {ministry.classes.map((classInfo, classIndex) => (
                        <div key={classIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-[#fd8a77] rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{classInfo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        {/* <div className="mt-20 text-center bg-white rounded-2xl shadow-lg p-12" data-aos="fade-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to Get Involved?
            </h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join one of our ministries and become part of a community that's making a difference. Whether you're looking to serve, learn, or grow, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center group"
              >
                Contact Us Today
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
                href="/worship"
                className="border-2 border-[#fd8a77] text-[#fd8a77] hover:bg-[#fd8a77] hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MinistriesContent;
