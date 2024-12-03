import React from 'react';
import HomeAboutPic from "../../assets/HomeAboutPic.png"
const HomeAboutUS = () => {
    return (
        <div className='flex max-w-[1080px] items-center justify-center mx-auto'>

            <div className=''>
                <img src={HomeAboutPic} alt="" />
            </div>


            <div className='max-w-[50%]'>
                <div>
                    <p className='font-sans text-cyan-500'>About Us</p>
                </div>
                <div>
                    <p className='text-blue-900 font-bold text-[40px]'>we beleve in working Acceredited Farmer</p>
                </div>
                <div>
                    Farmers are the backbone of our society. They are the ones who provide us all the food that we eat. As a result, the entire population of the country depends upon farmers.
                    Be it the smallest or the largest country. Because of them only we are able to live on the planet. Thus Farmers are the most important people in the world.
                    Though farmers have so much importance still they do not have proper living.
                </div>

                <div>
                    <img />
                    <div >
                        <p className='font-bold text-blue-900'>
                            Organic Foods Only
                        </p>
                        <p>
                            Simpy dummy text for prinitng and typcasting
                        </p>
                    </div>

                </div>


                <div>
                    <img />
                    <div className=''>
                        <p className='font-bold text-blue-900'>
                            Quality Standard
                        </p>
                        <p>
                            Simpy dummy text for prinitng and typcasting
                        </p>
                    </div>

                </div>

                <div className='py-6'>
                    <button
                        type="button"
                        class="rounded-full bg-slate-800 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Shop Now
                    </button>
                </div>


            </div>






        </div>
    );
}

export default HomeAboutUS;
