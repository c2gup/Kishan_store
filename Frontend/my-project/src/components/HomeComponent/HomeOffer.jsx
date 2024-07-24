import React, { Component } from 'react';

const HomeOffer = () => {
    return (
        <div className=' relative bg-slate-500 w-full h-[1080px] '>

            <div className=' absolute top-20 ml-36 w-[80%] gap-10'>

                <p className=' font-mono'>Offer</p>
                <div className='flex justify-between '>
                    <p className='font-bold text-white text-[30px]'>we offer Organic for you</p>
                    <button
                        type="button"
                        class="rounded-full bg-yellow-300 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        View all Our Product
                    </button>
                </div>

                <div>
                    {/* <OfferComponent/> */}
                </div>
            </div>


        </div>
    );
}

export default HomeOffer;
