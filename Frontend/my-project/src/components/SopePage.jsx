import React from 'react'
import Banner from '../assets/ShopePage/Banner.png'
import proct from '../assets/ShopePage/Image.png'
import Photo from '../assets/ShopePage/Photo (2).png'

import { Star } from 'lucide-react'
import FooterBanner from './FooterBanner'


function SopePage() {
  return (
    <>
    
    <div>

    <div>
        <img src={Banner} alt="Banner" />
    </div>

      {/* Shope Now */}

 


    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={proct}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500"> Pistachios</h2>
            <h1 className="my-4 text-3xl font-semibold text-[#274C5B]">Health Pistachios</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur rem amet repudiandae
              neque adipisci eum enim, natus illo inventore totam?
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
             
              <div className="ml-auto flex items-center">
                
                <div className="relative">
                 
                  
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">₹47,199</span>
              <button
                type="button"
                className="rounded-md bg-[#274C5B] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3a758d]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  

      <div>
    


    <section className="py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl  text-center">
          
          <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
          Welcome  to the <span className="border-b-8 border-yellow-300">world</span>  of natural and organic.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
          Welcome to the world of natural and organic. Here you can discover the bounty of nature.
          </p>

          <div className='gap-2 flex justify-center' >
          <button
            type="button"
            className="mt-8 rounded-md bg-[#274C5B] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Product Description
          </button>
          <button
            type="button"
            className="mt-8 rounded-md bg-[#95e6ac] px-3 py-2 text-sm font-semibold text-[#274C5B] shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Additional Info
          </button>
          </div>
        </div>
      </div>
    </section>
 

      </div>


{/* Card  */}
     <div>
   


    <div className="mx-auto grid w-[85%] max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-md border">
          <img
            src={Photo}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex text-[#274C5B]  font-serif items-center text-lg font-semibold">Calabrese Broccoli
</h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur 
            </p>
            
            
            
            <div className=' flex gap-5 mt-2 flex-row' >
                  
            <span className='text-sm font-sans font-medium' >₹
            20</span>

                  <div className="flex ">

                  
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span>
              </span>
            </div>
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
  
     </div>

    </div>
    
    {/*  */}
    <FooterBanner/>
  
    </>
  )
}

export default SopePage
