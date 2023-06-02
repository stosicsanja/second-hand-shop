import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

const Product = () => {
  const location = useLocation();
  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div>
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          ></img>
        </div>

        <div className="w-3/5">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex mt-3">
              <p className="text-2xl font-medium">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base mt-9">
            <div className="flex">
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
              <MdOutlineStar></MdOutlineStar>
            </div>
            <p className="text-sm text-gray-500">(1 customer review)</p>
          </div>
          <p className="text-base text-gray-500 mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div
              className="w-52 mt-12 flex items-center justify-between text-gray-500 gap-4
            border p-3"
            >
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  className="border h-6 font-normal text-lg flex items-center justify-center px-2 
                  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>1</span>
                <button
                  className="border h-6 font-normal text-lg flex items-center justify-center px-2 
                  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>

            <button className="bg-black text-white mt-12 ml-8 py-3 px-6 active:bg-gray-800">
              Add to cart
            </button>
          </div>
          <p className="font-base text-gray-500 mt-5">
            Category:
            <span className="capitalize font-medium">{details.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
