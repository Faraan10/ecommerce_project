import React from "react";

const ProductCard = ({ title, desc, price, image }) => {
  return (
    <>
      <div className="card bg-[#1f1f1f] w-90 shadow-sm">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now {price}$</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
