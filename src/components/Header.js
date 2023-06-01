import React from "react";
import { logo_sanja, shopping_bag, user_logo } from "../assets";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-12" src={logo_sanja} alt="logo"></img>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-6" src={shopping_bag} alt="shopping-bag"></img>
            <span className="absolute w-6 top-1.5 left-0 text-sm flex items-center justify-center font-semibold ">
              0
            </span>
          </div>
          <img className="w-8 h-8" src={user_logo} alt="profile"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
