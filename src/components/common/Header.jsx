import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-[#FDEBDD] shadow-sm border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 mr-3 transition-transform duration-300 group-hover:scale-110">
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 33 33" 
                  preserveAspectRatio="xMidYMid meet"
                  className="text-black transition-colors duration-300 group-hover:text-gray-800"
                >
                  <path 
                    d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold text-black transition-colors duration-300 group-hover:text-gray-800">
                Mysore Hope Center
              </span>
            </div>
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
