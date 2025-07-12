import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "When are your services?",
      answer: "Join us every Sunday for our main service, and be sure to check the Services section for other gatherings throughout the week."
    },
    {
      question: "How do I get involved?",
      answer: "From volunteering to joining a small group, there are many ways to connect. Contact us to learn more!"
    },
    {
      question: "What can I expect on my first visit?",
      answer: "Expect a warm welcome, engaging worship, and an inspiring message. We look forward to meeting you!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fd8a77] rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-[#fd8a77] font-semibold text-lg uppercase tracking-wide mb-4">
            Discover Our Community
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to your questions about our church, beliefs, and how you can be a part of our family.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#FDEBDD] rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#fd8a77]/5 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-black pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 bg-[#fd8a77] rounded-full flex items-center justify-center transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-[#fd8a77]/20 mb-4"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
