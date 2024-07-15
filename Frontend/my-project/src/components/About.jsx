import React from "react";
import Banner from "../assets/About/Banner.png";
import photo1 from "../assets/About/photo (1).png";
import photo2 from "../assets/About/Photo.jpg";
import icons1 from "../assets/About/Icon.svg";
import FooterBanner from "./FooterBanner";
import Footer from "./Footer";





function About() {
  return (
    <div className=" ">
      {/* Banner  */}

      <div>
        <img src={Banner} alt="Banner" />
      </div>

      {/* hero secton1 */}

      <div className="relative w-full mt-10 bg-[#FFFFFF]">
        <div className="mx-auto   max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="relative   lg:col-span-5 lg:-mr-8 xl:col-span-6 flex items-center justify-start">
            <img
              className="object-cover"
              style={{ width: "550px", height: "407px" }} // Inline style for width and height
              src={photo1}
              alt=""
            />
          </div>

          <div className="flex flex-col  justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full p-1">
              <div className="rounded-full p-1 px-2">
                <p className=" font-serif ... text-[#7EB693] text-4xl">
                  About Us
                </p>
              </div>
            </div>
            <h1 className="mt-8 text-3xl font-bold  Roboto ... tracking-tight text-[#274C5B] md:text-4xl lg:text-6xl">
              We do Creative Things for Success
            </h1>
            <p className="mt-8 text-lg font-Open San ... text-gray-700">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <p className="mt-8 text-lg text-gray-700">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <button
                  type="button"
                  className="rounded-md bg-[#274C5B] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Explore More
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* hero secton2 */}
      <div className="relative   w-full  bg-[#F9F8F8]">
        <div className="mx-auto   flex-row... max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col  justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full p-1">
              <div className="rounded-full p-1 px-2">
                <p className=" font-serif ... text-[#7EB693] text-4xl">
                  Why Choose us?
                </p>
              </div>
            </div>
            <div className="w-[42rem]">
              <h1 className="mt-8  text-3xl font-bold  Roboto ... tracking-tight text-[#274C5B] md:text-4xl lg:text-6xl">
                We do not buy from the open market & traders.
              </h1>
            </div>
            <p className="mt-8 text-lg font-Open San ... text-gray-700">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>

            <div className="w-[270px]">
              <div className="bg-[#ECECEC] rounded-full p-4 ">
                <h6 className="font-semibold h-4 text-[#274C5B] inline-block ">
                  {" "}
                  100% Natural Product
                </h6>
              </div>

              <div className="w-[340px] mt-2 ml-16">
                <p className="text-base text-[#525C60] flex flex-wrap">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="w-[270px]">
              <div className="bg-[#ECECEC] rounded-full p-4 ">
                <h6 className="font-semibold h-4 text-[#274C5B] inline-block ">
                  {" "}
                  Increases resistance
                </h6>
              </div>

              <div className="w-[340px] mt-2 ml-16">
                <p className="text-base text-[#525C60] flex flex-wrap">
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </p>
              </div>
            </div>
          </div>

          <div className=" relative mx-auto mt-28 lg:col-span-5 lg:-mr-8 xl:col-span-6 flex justify-center items-center">
            <img
              className="object-cover rounded-2xl "
              style={{ width: "520px", height: "490px" }} // Inline style for width and height
              src={photo2}
              alt=""
            />
          </div>
        </div>
      </div>


{/* card icon wala hai ji */}
      <div className=" bg-[#F9F8F8] ">


          <div className=" flex flex-row gap-4 items-center justify-center  ">

        


    <div className="w-[200px] h-[250px] bg-[#FFFFFF]  flex flex-col items-center justify-center rounded-md border">
      <img
        src={icons1}
        alt="icon"
        className="h-[50] w-[46] t bg-[#F9F8F8] rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center ">
        <h1 className="text-lg font-semibold">About Macbook</h1>
        <p className="mt-3 m-auto flex flex-col items-center justify-center text-sm text-gray-600 text-center">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
</p>

      
      </div>
    </div>
  
    <div className="w-[200px] h-[250px] bg-[#FFFFFF]  flex flex-col items-center justify-center rounded-md border">
      <img
        src={icons1}
        alt="icon"
        className="h-[50] w-[46] t bg-[#F9F8F8] rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center ">
        <h1 className="text-lg font-semibold">About Macbook</h1>
        <p className="mt-3 m-auto flex flex-col items-center justify-center text-sm text-gray-600 text-center">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
</p>

      
      </div>
    </div>
    <div className="w-[200px] h-[250px] bg-[#FFFFFF]  flex flex-col items-center justify-center rounded-md border">
      <img
        src={icons1}
        alt="icon"
        className="h-[50] w-[46] t bg-[#F9F8F8] rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center ">
        <h1 className="text-lg font-semibold">About Macbook</h1>
        <p className="mt-3 m-auto flex flex-col items-center justify-center text-sm text-gray-600 text-center">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
</p>

      
      </div>
    </div>
    <div className="w-[200px] h-[250px] bg-[#FFFFFF]  flex flex-col items-center justify-center rounded-md border">
      <img
        src={icons1}
        alt="icon"
        className="h-[50] w-[46] t bg-[#F9F8F8] rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center ">
        <h1 className="text-lg font-semibold">About Macbook</h1>
        <p className="mt-3 m-auto flex flex-col items-center justify-center text-sm text-gray-600 text-center">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
</p>

      
      </div>
    </div>

   
  

          
          </div>


      </div>
    
    {/* Card section Photo walla  */}

    <div className="mt-10">
       {/* Headding */}

       <div className="flex flex-wrap gap-4 flex-col " >
        <p></p>
        <h2 className=" text-center font-bold text-[#274C5B] font-sans ... text-4xl" >Our Organic Experts</h2>

        {/* paragraph */}
        <div className=" m-auto flex flex-col  text-[#525C60] font-sans ... h-[60px]  text-center justify-center items-center w-[800px]" >
          <p> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
       </div>

       {/* Photo  */}

       <div className="mt-10 flex gap-4 justify-center items-center" >
       


  
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Delba</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Delba</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Delba</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
  


       </div>
    </div>

    {/* Banner Footer */}
  <FooterBanner/>
  <Footer/>

   
      
    </div>

   
  );
}

export default About;
