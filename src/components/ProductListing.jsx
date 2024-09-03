import React, { useState } from "react";
import { Products } from "../data/products";
import ProductCard from "./ProductCard";
const ProductListing = () => {
  const [products, setProducts] = useState(Products);
  const [allProducts, setAllProducts] = useState(Products);
  const [searchedTerm, setSearchedTerm] = useState("");
  const modifiedProductListing = (data) => {
    if (data == searchedTerm.toLowerCase() && data.length > 0)
      setProducts(
        allProducts.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(searchedTerm.toLowerCase().trim());
        })
      );
    else
      setProducts(
        allProducts.filter((product) => {
          return product.category.toLowerCase() === data.toLowerCase().trim();
        })
      );
  };
  return (
    <>
      <h2 className="mb-5 text-[20px] font-bold">Welcome to eShop</h2>
      <div className="flex justify-center mb-10 text-[16.4px] flex-wrap gap-2">
        <input
          placeholder="Search...."
          className="rounded border-2 px-1 outline-black border-gray-400"
          onChange={(e) => {
            setSearchedTerm(e.target.value);
            setProducts(
              allProducts.filter((product) =>
                product.name.toLowerCase().includes(e.target.value)
              )
            );
            // modifiedProductListing(e.target.value.toLowerCase().trim());
          }}
        />
      </div>
      <div className="mt-10 mb-10 flex justify-center w-full flex-col items-center gap-3">
        <p>Select Category</p>
        <select
          className="w-[140px] p-2"
          onChange={(e) => {
            if (e.target.value != "all") modifiedProductListing(e.target.value);
            else setProducts(allProducts);
          }}
        >
          <option value="all">All</option>
          <option value="footwear">Footwear</option>
          <option value="electronics">Electronics</option>
          <option value="wearables">Wearables</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center ">
        {products &&
          products.map((product, id) => {
            return <ProductCard key={id} product={product} />;
          })}
      </div>
    </>
  );
};

export default ProductListing;
