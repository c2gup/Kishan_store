import React from 'react';
import ProductList from './ProductList';
const OurProduct = () => {
 
    return (
        <div className=' relative bg-slate-200 w-full h-[900px] text-center'>
            <div className='ml-16 font-serif text-blue-700 text-[40px] mx-auto justify-center  text-center'>
                Categories
            </div>
            <div className='font-serif text-black font-bold text-[40px] '>
                OUR PRODUCT
            </div>

            <ProductList/>
              
              
            <div className='absolute bottom-2 left-1/2'>
                    <button
                        type="button"
                        class="rounded-full bg-slate-800 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Learn More
                    </button>
             </div>
        </div>
 
    );
}

export default OurProduct;
