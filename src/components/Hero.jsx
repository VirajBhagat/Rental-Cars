import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/backgroundImage.jpeg)] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl wxl:text-7xl font-semibold mx-auto leading-[1.2]">
          Buy or Rent Your <br />
          <span className="text-orange-200">Perfect Car Today</span>
        </h1>

        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-2-xl m-auto max-sm:text-xs text-gray-300">
          Explore a wide range of verified cars for rent or purchase. Easy
          booking, transparent pricing, and trusted dealers—all in one place.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => {
            navigate("/cars");
          }}
          className="text-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer"
        >
          Explore Cars
        </button>
      </div>
    </div>
  );
};

export default Hero;
