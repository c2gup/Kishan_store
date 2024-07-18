import React from 'react';
import TestimonialBg from "../../assets/TestimonialBg.png"
const OurTestimonial = () => {
    return (
        <div className='relative' >
            <img src={TestimonialBg} alt=""  className='py-4 px-4 \'/>
            <p>tesimonial</p>
            <p>What Our Customer Saying</p>
              <img src="" alt=" customer Image" />
              {/* rating */}
              {/* <Rating/> */}

              <p>Simply dummy text Review of the cutomer</p>
         <div className='flex flex-col'>
         <div className='rounded-md bg-yellow-300 h-[15px] w-[15px]'>
                   100%
                </div>

                <div className=''>
                    285
                </div>
                <div className=''>
                    300+
                </div>
                <div className=''>
                    25+
                </div>
         </div>
               
        </div>
    );
}

export default OurTestimonial;
