import React from "react";
import FooterBanner from "./FooterBanner";
import team1 from "../assets/ourteam/Image (1).png";
import team2 from "../assets/ourteam/Image (2).png";
import team3 from "../assets/ourteam/Image.png";

function Our_Team() {
  return (
    <div>
      <div className="mt-10">
        {/* Heading */}
        <div className="flex flex-wrap gap-4 flex-col">
          <h2 className="text-center font-bold text-[#274C5B] font-sans text-4xl">
            Our Organic Experts
          </h2>

          {/* Paragraph */}
          <div className="m-auto flex flex-col text-[#525C60] font-sans text-center justify-center items-center w-full max-w-[800px] px-4">
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>

        {/* Photos */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
          {[team1, team2, team3].map((imageSrc, index) => (
            <div
              key={index}
              className="relative h-[400px] w-[90%] sm:w-[45%] md:w-[30%] lg:w-[300px] rounded-md"
            >
              <img
                src={imageSrc}
                alt={`Expert ${index + 1}`}
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">Delba</h1>
                <p className="mt-2 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  View Profile &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterBanner />
    </div>
  );
}

export default Our_Team;
