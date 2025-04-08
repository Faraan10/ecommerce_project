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

  console.log(data);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
              {data.map((item) => (
                <div key={item.id}>
                  <ProductCard
                    title={item.title}
                    desc={item.description}
                    price={item.price}
                    image={item.images[0]}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
