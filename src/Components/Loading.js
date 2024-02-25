import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen top-0 left-0 z-10">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      <h1 className='font-bold text-2xl'>Loading....</h1>
    </div>
  );
};

export default LoadingAnimation;
