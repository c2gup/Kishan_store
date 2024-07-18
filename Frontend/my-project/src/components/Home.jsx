import React from 'react';
import HomeBanner from "../assets/HomeBanner.jpg";
// import IconBtn from './Common/IconBtn';
import { useNavigate } from 'react-router-dom';
import HomeOfferBanner from "../assets/HomeOfferBanner.png"
 import HomeAboutUS from './HomeComponent/HomeAboutUS';
import OurProduct from './HomeComponent/OurProduct';
 import OurTestimonial from "./HomeComponent/OurTestimonial"
 import HomeOffer from './HomeComponent/HomeOffer';
 import HomeEcoFriendly from './HomeComponent/HomeEcoFriendly';
 import Gallery from "../assets/Gallery.png"
const Home = () => {
  const navigate = useNavigate()
  const ExploreNow = () => {
    // navogate to a link
    navigate("/about");
  }


  return (
    <div className=''>
      <div>
        <img src={HomeBanner} className=' ' />
      </div>

      <h1 className='text-black bg-red-700 text-5xl' >Hello Frome anupam side , Only for check talwind </h1>

    
      {/* <IconBtn
        text="Explore "
        onClick={ExploreNow}
        customClasses={"w-full rounded-md bg-yellow-400"}
      /> */}



      <button
     type="button"
    class="rounded-l-md bg-yellow-400 py-6 px-6  text-lg text-white  hover:bg-red-700"
    > Explore Now</button>

       <div>
        <img src={HomeOfferBanner} className='' />
      </div>
    
     {/*  about page for home */}
     <div>
          <HomeAboutUS/>
     </div>


      {/* our product */}
      <div className='flex justify-center items-center'><OurProduct/> </div>
           
           {/* our testimonial  */}
           <div>
           <OurTestimonial/>
           </div>

           <div>
            <HomeOffer/>
           </div>

           <div>
            <HomeEcoFriendly/>
           </div>

           <div>
            <img src={Gallery} alt="" />
           </div>
        
    </div>
  );
}

export default Home;
