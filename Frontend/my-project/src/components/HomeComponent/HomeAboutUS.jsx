import React from 'react';
import HomeAboutPic from "../../assets/HomeAboutPic.png"
const HomeAboutUS = () => {
    return (
        <div className='flex '>

            <div className=''>
                <img src={HomeAboutPic} alt="" />
            </div>


            <div>
                <div>
                    <p className=''>About Us</p>
                </div>
                <div>
                    <p className=''>we beleve in working acceredited Farmer</p>
                </div>
                <div>
                    Farmers are the backbone of our society. They are the ones who provide us all the food that we eat. As a result, the entire population of the country depends upon farmers.
                    Be it the smallest or the largest country. Because of them only we are able to live on the planet. Thus Farmers are the most important people in the world.
                    Though farmers have so much importance still they do not have proper living.
                </div>

                <div>
                    <img />
                    <div>
                        <p>
                            Organic Foods Only
                        </p>
                        <p>
                            Simpy dummy text for prinitng and typcasting
                        </p>
                    </div>

                </div>


                <div>
                    <img />
                    <div>
                        <p>
                            Quality Standard
                        </p>
                        <p>
                            Simpy dummy text for prinitng and typcasting
                        </p>
                    </div>

                </div>

                <div>
                    <button
                        type="button"
                        class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Shop Now
                    </button>
                </div>


            </div>






        </div>
    );
}

export default HomeAboutUS;
