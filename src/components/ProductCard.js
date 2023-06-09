import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/fleaSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  /* console.log(product); */
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  console.log(rootId);

  console.log(rootId);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        ></img>
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 20)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div
              className="flex gap-2
            transform group-hover:translate-x-24
            transition-transform duration-500"
            >
              <p>${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                )
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center
            gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0
            transition-transform cursor-pointer duration-500"
            >
              Add to cart
              {/*
              {" "}
               <span>
                <BsArrowRight></BsArrowRight>
              </span> */}
            </p>
          </div>
        </div>
        <p>{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
