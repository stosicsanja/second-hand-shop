import React from "react";
import { logo } from "../assets";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className=" flex flex-col  gap-7">
          <img className="w-28 " src={logo} alt="logoImg"></img>
          <div className="flex gap-5 text-lg text-gray-400">
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer"></FaFacebookF>
            <FaInstagram className="hover:text-white duration-300 cursor-pointer"></FaInstagram>
            <FaTwitter className="hover:text-white duration-300 cursor-pointer"></FaTwitter>
            <FaYoutube className="hover:text-white duration-300 cursor-pointer"></FaYoutube>
            <ImGithub className="hover:text-white duration-300 cursor-pointer"></ImGithub>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Adress</p>
            <p>Mobile</p>
            <p>Phone</p>
            <p>E-mail</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill></BsPersonFill>
              </span>
              my account
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal></BsPaypal>
              </span>
              checkout
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome></FaHome>
              </span>
              order tracking
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn></MdLocationOn>
              </span>
              help & support
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="
            E-mail"
            type="text"
          ></input>
          <button
            className="text-sm border text-white border-t-0 hover:bg-gray-700
            active:bg-white
            active:text-black"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
