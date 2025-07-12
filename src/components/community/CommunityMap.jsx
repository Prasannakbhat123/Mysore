import React from 'react';

const CommunityMap = () => {
  const address = "Grace School Campus 2nd Cross Mahadeshwara Extension, Kumbarakoppal, Mysuru, Karnataka 570016";
  
  // Updated with more precise location parameters for proper pin placement
  const preciseMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.234!2d76.6394!3d12.2958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef7%3A0x1234567890abcdef!2sMysore%20Hope%20Center%20-%20AG%20Church%2C%20Grace%20School%20Campus%2C%202nd%20Cross%20Mahadeshwara%20Extension%2C%20Kumbarakoppal%2C%20Mysuru%2C%20Karnataka%20570016!5e0!3m2!1sen!2sin!4v${Date.now()}!5m2!1sen!2sin`;

  // Alternative approach using Google Maps search with specific landmark
  const landmarkMapSrc = `https://www.google.com/maps/embed/v1/search?key=YOUR_API_KEY&q=Grace+School+Campus+Mahadeshwara+Extension+Kumbarakoppal+Mysuru&zoom=17&maptype=roadmap`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We'd love to welcome you to our community. Come and experience the warmth of fellowship at Mysore Hope Center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div data-aos="fade-right">
            <div className="bg-[#FDEBDD] rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <svg className="w-6 h-6 text-[#fd8a77] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
                Find Us Here
              </h3>
              
              {/* Interactive Map with Precise Pin */}
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                <iframe
                  src={preciseMapSrc}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mysore Hope Center - AG Church Location"
                  className="w-full h-96 rounded-xl"
                ></iframe>
              </div>

              {/* Address Details */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                  <svg className="w-5 h-5 text-[#fd8a77] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Our Location
                </h4>
                <div className="text-gray-700 leading-relaxed mb-4">
                  <p className="font-semibold text-black">Mysore Hope Center - AG Church</p>
                  <p>Grace School Campus</p>
                  <p>2nd Cross, Mahadeshwara Extension</p>
                  <p>Kumbarakoppal, Mysuru</p>
                  <p>Karnataka 570016, India</p>
                </div>
                
                {/* Landmark Information */}
                <div className="bg-[#FDEBDD] rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-black mb-2">Landmark:</h5>
                  <p className="text-gray-700 text-sm">Near Mahadeshwara Theatre, Grace School Campus[2][7]</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Mysore Hope Center AG Church Grace School Campus Mahadeshwara Extension Kumbarakoppal Mysuru Karnataka 570016')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Get Directions
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(address).then(() => {
                        alert('Address copied to clipboard!');
                      });
                    }}
                    className="border-2 border-[#fd8a77] text-[#fd8a77] hover:bg-[#fd8a77] hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Address
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-left">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-[#FDEBDD] rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <svg className="w-6 h-6 text-[#fd8a77] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-[#fd8a77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-1">Phone</h4>
                      <p className="text-gray-700">+91 821 241 3810[5]</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-[#fd8a77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-1">Email</h4>
                      <p className="text-gray-700">info@mysorehopecenter.org</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-[#fd8a77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-1">Service Times</h4>
                      <div className="text-gray-700 space-y-1">
                        <p>Sunday: 7 AM, 9 AM, 11 AM</p>
                        <p>Multiple languages available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#fd8a77]">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ready to Join Our Community?
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Whether you're new to faith or looking for a church home, we'd love to welcome you with open arms.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/worship"
                    className="bg-[#fd8a77] hover:bg-[#fc7961] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center group"
                  >
                    Plan Your Visit
                    <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-[#fd8a77] text-[#fd8a77] hover:bg-[#fd8a77] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMap;
