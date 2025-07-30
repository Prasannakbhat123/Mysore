import React from 'react';

const SupportContent = () => {
  return (
    <section id="support-content" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bible Verse Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed mb-6">
              "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver."
            </blockquote>
            <cite className="text-lg font-semibold text-[#fd8a77]">2 Corinthians 9:7</cite>
          </div>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Banking Details */}
          <div className="bg-[#FDEBDD] rounded-2xl p-8 flex flex-col" data-aos="fade-right">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bank Transfer</h2>
              <p className="text-gray-600">Support us through direct bank transfer</p>
            </div>
            
            <div className="space-y-6 flex-grow">
              <div className="bg-white rounded-xl p-6 shadow-sm flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Details</h3>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Account Name</span>
                    <span className="text-lg font-semibold text-gray-900">Mysore Hope Center</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Bank</span>
                    <span className="text-lg font-semibold text-gray-900">South Indian Bank, JL Puram Branch, Mysore</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">IFSC Code</span>
                    <span className="text-lg font-semibold text-[#fd8a77]">SIBL0000493</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500">Account Number</span>
                    <span className="text-lg font-semibold text-[#fd8a77]">0493053000009669</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="text-center flex flex-col" data-aos="fade-left">
            <div className="bg-[#FDEBDD] rounded-2xl p-8 flex flex-col flex-grow">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Payment</h2>
              <p className="text-gray-600 mb-8">Scan the QR code to make an instant donation</p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg flex-grow flex flex-col justify-center mx-auto max-w-sm">
                <div className="w-64 h-64 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  {/* Actual QR Code Image */}
                  <img 
                    src="/assets/home/qr-code.jpg" 
                    alt="QR Code for Payment - Mysore Hope Center" 
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder (hidden by default) */}
                  <div className="text-center hidden">
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-gray-400">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <p className="text-xs text-gray-500 font-medium">QR Code</p>
                        <p className="text-xs text-gray-400">for Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#fd8a77] text-white rounded-xl py-3 px-6 text-lg font-semibold hover:bg-[#fc7961] transition-colors duration-300 cursor-pointer">
                  Scan to Donate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-gradient-to-r from-[#fd8a77] to-[#fc7961] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Thank You</h3>
            <p className="text-lg font-medium">
              Thank you for your participation in the work of God's kingdom.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Contribution Matters</h3>
            <p className="text-gray-600 leading-relaxed">
              Every donation, no matter the size, helps us continue our mission of serving the community, 
              spreading God's love, and making a positive impact in the lives of those we serve. Your 
              generosity enables us to maintain our programs, support those in need, and grow our ministry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportContent;
