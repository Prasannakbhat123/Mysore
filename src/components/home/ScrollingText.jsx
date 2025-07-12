import React from 'react';

const ScrollingText = () => {
  const welcomeMessages = [
    "ಮೈಸೂರು ಹೋಪ್ ಸೆಂಟರ್‌ಗೆ ಸುಸ್ವಾಗತ!",
    "मैसूर होप सेंटर में आपका स्वागत है!",
    "మైసూర్ హోప్ సెంటర్ కు స్వాగతం!",
    "மைசூர் நம்பிக்கை மையத்திற்கு வருக!",
    "Welcome to Mysore Hope Center!"
  ];

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="flex animate-scroll-fast">
        {/* First set of messages */}
        <div className="flex items-center space-x-20 whitespace-nowrap">
          {welcomeMessages.map((message, index) => (
            <div key={index} className="flex items-center">
              <span className="text-black font-bold text-3xl md:text-4xl lg:text-5xl px-8">
                {message}
              </span>
              <div className="w-4 h-4 bg-[#fd8a77] rounded-full mx-10 animate-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-20 whitespace-nowrap">
          {welcomeMessages.map((message, index) => (
            <div key={`duplicate-${index}`} className="flex items-center">
              <span className="text-black font-bold text-3xl md:text-4xl lg:text-5xl px-8">
                {message}
              </span>
              <div className="w-4 h-4 bg-[#fd8a77] rounded-full mx-10 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
