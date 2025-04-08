import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://ecommerce-backend-29gg.onrender.com/products")
      .then((response) => {
        setData(response.data);
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
          {data.map((item) => (
            <div key={item._id}>
              <h1>{item.title}</h1>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Products;
