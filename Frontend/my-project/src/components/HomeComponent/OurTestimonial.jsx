import React from 'react';
import TestimonialUser from "../../assets/TestimonialUser.jpg"
import TestimonialBg from "../../assets/TestimonialBg.png"
const OurTestimonial = () => {
    return (
        <div  >
            <div className='relative w-full'>
                <img src={TestimonialBg} alt="" className='' />

                <div className='absolute w-full left-50 top-60 '>
                <div className=' flex flex-col text-center'>
                    <p className=' font-mono text-[25px] text-green-600 '>Tesimonial</p>
                    <p className='font-bold text-[45px] '>What Our Customer Saying</p>
                          <div  className='bg-slate-600 rounded-full   mx-auto justify-center'>
                          <img src={TestimonialUser}alt=" customer Image"  className='rounded-full '/>
                          </div>
                 
                   
                   
                    
                    {/* rating */}
                    {/* <Rating/> */}
                    <p>Simply dummy text Review of the cutomer</p>
                    <p className='font-bold text-blue-600'>Sara Taylor</p>
                    <div>. . .</div>
                </div>

                <div className=' flex  justify-center py-4  gap-7 mt-28'>
                    <div className='bg-slate-600 w-[150px] rounded-full py-4 px-4 text-center'>
                        <div className='font-extrabold text-[25px]'>100%</div>
                        <p>Organic</p>
                    </div>

                    <div className='bg-slate-600 w-[150px] rounded-full py-4 px-4 text-center'>
                        <div className='font-extrabold text-[25px]'>285</div>
                        <p>Active product</p>
                    </div>

                    <div className='bg-slate-600 w-[150px] rounded-full py-4 px-4 text-center'>
                        <div className='font-extrabold text-[25px]'> 300+</div>
                        <p>Organic Chart</p>
                    </div>

                    <div className='bg-slate-600 w-[150px] rounded-full py-4 px-4 text-center '>
                        <div className='font-extrabold text-[25px]'> 25+</div>
                        <p>Years Of Farming</p>
                    </div>
                </div>
                </div>
            </div>

          




        </div>
    );
}

export default OurTestimonial;
