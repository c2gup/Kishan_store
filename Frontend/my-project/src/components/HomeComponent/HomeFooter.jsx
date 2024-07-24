import React from 'react';
import Logoorganic from "../../assets/Logoorganic.png"

const HomeFooter = () => {
    return (

        <div className='flex justify-evenly mt-9 w-[80%] mx-auto  mb-28'>
            <div className='flex flex-col'>
                <p className='font-bold text-[30px] gap-12'>Contact us</p>
                <div className='gap-2'>
                    <p className='text-bold text-[20px] w-2'> Email</p>
                    <p className=''>needhelp@gmail.com</p>
                </div>

                <div className='gap-5'>
                    <p className='text-bold text-[20px] w-2'>Phone</p>
                    <p className=''>666 777 888</p>
                </div>

                <div className='gap-2'>
                    <p className='text-bold text-[20px] w-10'>Address</p>
                    <p>10/11 nayi sadak parathe bali gali</p>
                </div>

            </div>


            <div className=' flex flex-col  items-center'>
                <div className='flex gap-2'>
                    <img src={Logoorganic} alt="" className='w-fit' />
                    <p className='font-bold text-[30px]'>Organick</p>
                </div>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic facilis, ipsa Dolores quasi ex numquam.</p>

                <div className="py-10 px-10 flex gap-11 ">
                    <div className=''>
                        <i class="fa-brands fa-facebook "></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-discord"></i>
                    </div>
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                    </div>


                </div>

            </div>

            <div className='flex flex-col'>
                <p className='font-bold text-[30px]'>Utility Pass</p>
                <p>Style Guide</p>
                <p>404 not found</p>
                <p>Password Protected</p>
                <p>Licence</p>
                <p>Changelog</p>

            </div>

        </div>

    );
}

export default HomeFooter;
