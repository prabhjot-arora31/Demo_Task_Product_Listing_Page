import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="h-[340px] w-[250px] hover:scale-105 sm:h-[290px] hover:shadow-gray-700 shadow-md shadow-light-400 transition-all cursor-pointer flex flex-col justify-center items-center p-6  gap-3 rounded-xl  lg:w-[215px] lg:h-[320px] sm:w-[240px] sm:h-[285px] md:h-[320px] ">
      <h2 className="text-center text-lg font-bold">{product.name}</h2>
      <img
        src={product.image}
        className="w-[170px] h-[180px] max-h[160px] relative h-full w-full bg-center bg-cover"
      />
      <div className="flex justify-between w-full mb-5">
        <p className="font-semibold m-0"> ${product.price}</p>
        <p className="bg-yellow-100 py-1 px-3 rounded text-[14px]">
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
