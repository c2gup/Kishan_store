import React from 'react';
import GreenNewsPic from "../assets/GreenNewsPic.png"
import Newsletter from "../assets/Newsletter.png"
import RedNewsPic from "../assets/RedNewsPic.png"
import Vector from "../assets/Vector.png"

const News = () => {
    return (
        <div className='w-full'>



            <div className='mt-10  w-[80%] mx-auto'>
                <div className=' gap-4 text-green-500 font-mono text-[20px]'>News</div>

                <div className='flex justify-between'>
                    <div className='mt-4 font-bold text-[20px]'>
                        Discover Weekly content about organic
                        food & more
                    </div>
                    <button
                        type="button"
                        class="rounded-2xl bg-yellow-400 py-4 px-6  text-lg text-white  hover:bg-red-700  "
                    > More News</button>
                </div>
            </div>



            <div className=' relative flex  mt-10 gap-10 mx-auto justify-center  '>
                <div className=' flex flex-col w-[30%] '>
                    <img src={GreenNewsPic} alt="" className='rounded-2xl' />
                    <div className='absolute bg-white w-[26%]  mx-auto bottom-12 ml-8 rounded-2xl py-3 px-3'>
                        <div className='flex gap-3 '>
                            <img src={Vector} alt="" className='' />
                            <p>By Rachi Card</p>
                        </div>

                        <p className='font-bold'>The Benefi Of vitamin D & How To get it</p>
                        <p>Lorem ipsumtempore et autem accusantium, vel sapiente! pa possimus voluptas hic eius? erunt.</p>
                        <button
                            type="button"
                            class="rounded-2xl bg-yellow-400 py-2 px-2  text-lg text-white  hover:bg-red-700  "
                        > Read More</button>
                    </div>
                </div>

                <div className='flex flex-col w-[30%] '>
                    <img src={RedNewsPic} alt="" className='rounded-2xl' />
                    <div className='absolute bg-white w-[26%]  mx-auto bottom-12 ml-8 rounded-2xl py-3 px-3'>
                        <div className='flex gap-3 '>
                            <img src={Vector} alt="" />
                            <p>By Rachi Card</p>
                        </div>

                        <p className='font-bold'>Our Favourite Summertime Tommeto</p>
                        <p>Lorem ipsumtempore et autem accusantium, vel sapiente! pa possimus voluptas hic eius? erunt.</p>
                        <button
                            type="button"
                            class="rounded-2xl bg-yellow-400 py-2 px-2  text-lg text-white  hover:bg-red-700  "
                        > Read More</button>
                    </div>
                </div>
            </div>



            <div className=' relative mt-10  w-[80%] mx-auto'>
                <img src={Newsletter} alt="" className=' ' />

                <div className=' absolute w-full top-1/2 flex justify-between '>
                    <p className='ml-4 text-[30px] font-bold text-white'>Subscriber to Our NewsLetter</p>

                    <div className=''>
                        <input type="text" placeholder='Enter your emails' className='rounded-md py-2 text-center'></input>
                        <button
                            type="button"
                            class="rounded-2xl bg-yellow-400 py-2 px-6  ml-4 mr-4 text-lg text-white  hover:bg-red-700  "
                        > Subscribe</button>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default News;
