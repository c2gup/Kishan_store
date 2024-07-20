import React from 'react';
import Banner from '../assets/Shop/Banner.png';
import Photo from '../assets/Shop/Photo (2).png';
import FooterBanner from './FooterBanner';



function Sope() {
  return (
    <div>
      <img src={Banner} alt="Banner" />

      <div className="mx-auto grid w-[85%] max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded-md border">
            <img
              src={Photo}
              alt="Product"
              className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-serif font-semibold text-[#274C5B]">
                Calabrese Broccoli
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur
              </p>

              <div className="flex flex-row gap-5 mt-2">
                <span className="text-sm font-sans font-medium">₹ 20</span>

                {/* <div className="flex">
                  <span className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500" />
                    ))}
                    <span className="ml-3 inline-block text-xs font-semibold">
                      4 Reviews
                    </span>
                  </span>
                </div> */}
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-[#274C5B] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3a758d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>


      <FooterBanner/>
   
    </div>
  );
}

export default Sope;

