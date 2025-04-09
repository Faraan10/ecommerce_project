import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
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
                title={item.title}
                desc={item.description}
                price={item.price}
                image={item.images[0]}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
