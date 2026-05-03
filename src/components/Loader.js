import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex justify-center items-center z-[10000]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-4 border-pink-500 border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.75s' }}></div>
      </div>
    </div>
  );
};

export default Loader;
