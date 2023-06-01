import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  /*console.log(data); */
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner></Banner>
      <Products products={products}></Products>
    </div>
  );
};

export default Home;
