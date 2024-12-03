import React from 'react';
import EcoFriendly from "../../assets/EcoFriendly.png"

const HomeEcoFriendly = () => {
    return (
        <div className=' relative flex  bg-white w-full  mb-16'>
            <div className=' '>
                <img src={EcoFriendly} alt="" />
            </div>
            
            <div className=' absolute rounded-lg bg-white left-1/2 top-80 w-1/2 py-4 px-4 text-wrap'>
                <p className='font-mono text-green-500'>Eco Friendly</p>
                <h1 className='text-[40px] font-bold'>Econis is friendly organic store</h1>
                
                <div>
                    <h1 className='font-semibold text-green-500'>Start wiht our company first</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, modi animi voluptatum veniam inventore excepturi et, beatae nostrum rem illo mollitia, commodi eos iure dolore consequatur vitae quibusdam suscipit.</p>
                </div>

                <div>
                    <h1 className='font-semibold text-green-500'>learn how to grow ourself</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, modi animi voluptatum veniam inventore excepturi et, beatae nostrum rem illo mollitia, commodi eos iure dolore consequatur vitae quibusdam suscipit.</p>
                </div>

                <div>
                    <h1 className='font-semibold text-green-500'>farming strategies for today</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias, modi animi voluptatum veniam inventore excepturi et, beatae nostrum rem illo mollitia, commodi eos iure dolore consequatur vitae quibusdam suscipit.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeEcoFriendly;
