import React, { useState } from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ title, desc, price, image }) => {
  const [wishList, setWishList] = useState(false);

  return (
    <div className="card bg-[#2a2a2a] w-80 shadow-md hover:shadow-lg transition duration-300 rounded-lg">
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-gray-300">{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
          <button className="btn btn-primary">Buy Now ${price}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
