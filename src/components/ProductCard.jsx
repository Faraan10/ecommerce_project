import React, { useState } from "react";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

const ProductCard = ({
  item,
  title,
  desc,
  price,
  image,
  quantity,
  stock,
  addToCart,
}) => {
  // const [wishList, setWishList] = useState(false);

  return (
    <div className="card bg-[#2a2a2a] w-80 shadow-md hover:shadow-lg transition duration-300 rounded-lg">
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-gray-300 line-clamp-3">{desc}</p>
        {stock <= 5 ? (
          <div
            className="badge badge-soft badge-error mt-3 mb-3"
            style={{ fontWeight: "bold", fontSize: "12px" }}
          >
            ONLY {stock} LEFT
          </div>
        ) : stock <= 20 ? (
          <div
            className="badge badge-soft badge-warning mt-3 mb-3"
            style={{ fontWeight: "bold", fontSize: "12px" }}
          >
            FEW LEFT
          </div>
        ) : (
          <div
            className="badge badge-soft badge-accent mt-3 mb-3"
            style={{ fontWeight: "bold", fontSize: "12px" }}
          >
            IN STOCK
          </div>
        )}

        <div className="card-actions justify-between">
          <button className="btn btn-primary" onClick={() => addToCart(item)}>
            Add To Cart
          </button>
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
