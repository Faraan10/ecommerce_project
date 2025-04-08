import { useEffect, useState } from "react";

const Home = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("token");
    setToken(data);
  }, []);
  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
