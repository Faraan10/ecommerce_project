import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

const Products = ({ token, addToCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const productsWithQuantity = response.data.products.map((product) => ({
          ...product,
          quantity: 1,
        }));
        setData(productsWithQuantity);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full px-4 py-8 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full justify-items-center">
            {data.map((item) => (
              <ProductCard
                key={item.id}
                item={item} // this is the entire object to pass to cart
                title={item.title}
                desc={item.description}
                price={item.price}
                image={item.images[0]}
                quantity={item.quantity}
                stock={item.stock}
                token={token}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
