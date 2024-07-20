import React from 'react';
import Banner_footer from "../assets/About/Background.png";

function FooterBanner() {
  return (
    <div className="mt-10 mb-10 flex w-full justify-center items-center">
      <div 
        className="h-[220px] w-[85%] flex justify-evenly space-x-2 p-4 rounded-lg bg-cover bg-center" 
        style={{ backgroundImage: `url(${Banner_footer})` }}
      >
        <div className='flex flex-col md:flex-row m-auto w-full md:w-[85%] justify-between items-center'>
          <div className='text-2xl md:text-4xl w-full md:w-[30%] font-sans font-bold text-white mb-4 md:mb-0'>
            <p>Subscribe to our Newsletter</p>
          </div>

          <div className='flex flex-col md:flex-row gap-2 w-full md:w-auto'>
            <input
              className="w-full md:w-auto rounded-md border border-gray-300 bg-white bg-opacity-75 px-3 py-2 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            />
            <button
              type="button"
              className="w-full md:w-auto rounded-md bg-[#274C5B] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;

