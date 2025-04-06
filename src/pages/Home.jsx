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
      <h1>Home</h1>

      {token ? (
        <button
          onClick={removeToken}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Remove
        </button>
      ) : (
        <h1>no token</h1>
      )}
    </>
  );
};

export default Home;
