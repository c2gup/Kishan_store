import React from 'react';
import ProductList from './ProductList';
const OurProduct = () => {
 
    return (
        <div>
            <div>
                Categories
            </div>
            <div>
                OUR PRODUCT
            </div>

            <ProductList/>
              
              
            <div>
                    <button
                        type="button"
                        class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Learn More
                    </button>
                </div>
        </div>
 
    );
}

export default OurProduct;
