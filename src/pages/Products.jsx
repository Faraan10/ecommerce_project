import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    axios
      .get("https://ecommerce-backend-29gg.onrender.com/products")
      .then((response) => setData(response.data))
      .catch((err) => err.response);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <h1>Products</h1>
    </>
  );
};

export default Products;
