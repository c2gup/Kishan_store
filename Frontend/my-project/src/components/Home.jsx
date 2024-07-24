import React from 'react';
import HomeBanner from "../assets/HomeBanner.jpg";
import Image from "../assets/Image.png";
// import IconBtn from './Common/IconBtn';
import { useNavigate } from 'react-router-dom';
import HomeOfferBanner from "../assets/HomeOfferBanner.png"
import HomeAboutUS from './HomeComponent/HomeAboutUS';
import OurProduct from './HomeComponent/OurProduct';
import OurTestimonial from "./HomeComponent/OurTestimonial"
import HomeOffer from './HomeComponent/HomeOffer';
import HomeEcoFriendly from './HomeComponent/HomeEcoFriendly';
import Gallery from "../assets/Gallery.png"
import News from './News';
import HomeFooter from './HomeComponent/HomeFooter';
const Home = () => {
  const navigate = useNavigate()
  const ExploreNow = () => {
    // navogate to a link
    navigate("/about");
  }


  return (
    <div className=' '>

      {/*  1st section */}
      <div className=''>

       <div className='relative w-full '>
          <img src={Image} className=' ' />

          <div className='absolute w-full left-60 top-80 h-[50%]'>
          <p className='font-serif text-2xl'>100% Natural Food</p>
          <p className='font-bold text-[40px]'>Choose The Best
            <br/>healthier way of life</p>
          {/* <h1 className='text-black bg-red-700 text-5xl' >Hello Frome anupam side , Only for check talwind </h1> */}
          <button
            type="button"
            class="rounded-2xl bg-yellow-400 py-6 px-6  text-lg text-white  hover:bg-red-700  "
          > Explore Now</button>
        </div>
        
        </div>
       </div>

    


      {/* 2nd section */}
      <div className='w-[1080px] items-center justify-center mx-auto py-10 '>
        <img src={HomeOfferBanner} className=' flex   w-[1080px]  items-center justify-center ' />
      </div>

      {/*  about page for home */}
      <div>
        <HomeAboutUS />
      </div>


      {/* our product */}
      <div className='flex justify-center items-center'><OurProduct /> </div>

      {/* our testimonial  */}
      <div>
        <OurTestimonial />
      </div>

      <div>
        <HomeOffer />
      </div>

      <div>
        <HomeEcoFriendly />
      </div>

      <div>
        <img src={Gallery} alt=""  className='w-100vw '/>
      </div>

      <div>
        <News/>
      </div>
      <div>
        <HomeFooter/>
      </div>

    </div>
  );
}

export default Home;
