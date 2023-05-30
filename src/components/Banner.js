import React, { useState } from "react";
import { banner_1, banner_3 } from "../assets";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className=" w-screen h-[650px]  relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400w] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={banner_1}
            alt="imgOne"
            loading="priority"
          ></img>

          <img
            className="w-screen h-full object-cover "
            src={banner_3}
            alt="imgTwo"
          ></img>

          <img
            className="w-screen h-full object-cover"
            src={banner_1}
            alt="imgThree"
          ></img>

          <img
            className="w-screen h-full object-cover"
            src={banner_3}
            alt="imgFour"
          ></img>
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44 ">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
          hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300"
          >
            <HiArrowLeft></HiArrowLeft>
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
          hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300"
          >
            <HiArrowRight></HiArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
