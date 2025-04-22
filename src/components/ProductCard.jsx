import React, { useState } from "react";
import { Heart } from "lucide-react";

const ProductCard = ({
  item,
  title,
  desc,
  price,
  image,
  quantity, // quantity still not used
  stock,
  addToCart,
}) => {
  // const [wishList, setWishList] = useState(false);

  return (
    <div className="card bg-base-300 w-80 shadow-md hover:shadow-lg transition duration-300 rounded-lg">
      <figure className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base-content">{title}</h2>
        <p className="text-base-content line-clamp-3">{desc}</p>
        <div className="card-actions justify-between">
          <div>
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
          </div>
          <p className="text-base-content mt-3 mb-3">$ {price}</p>
        </div>

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
