import React, { Component } from 'react';

const HomeOffer = () => {
    return (
        <div className='bg-slate-500'>
            
            <div>
                <p>Offer</p>
            </div>

            <div>
                <p>we offer Organic for you</p>
                <button
                        type="button"
                        class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        View all Our Product
                    </button>
            </div>

            <div>
             {/* <OfferComponent/> */}
            </div>

            
        </div>
    );
}

export default HomeOffer;
