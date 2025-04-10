import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="bg-[#1a1a1a] text-white min-h-screen">
        {/* Hero Section */}
        <div className="hero min-h-[80vh] bg-base-200 bg-opacity-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.pinimg.com/originals/c4/b5/48/c4b5488b6a2e32b69c4d46a3abd38d36.jpg
"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Sneakers"
            />
            <div>
              <h1 className="text-5xl font-bold">Step into Style</h1>
              <p className="py-6 text-gray-300">
                Discover the best in footwear. Designed for comfort, built for
                confidence.
              </p>
              <Link to="/products">
                <button className="btn btn-primary">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <section className="py-10 px-5 md:px-20">
          <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Dummy Cards */}
            <div className="card bg-neutral shadow-lg">
              <figure className="w-full h-72 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="https://www.si.com/.image/c_fill,w_1200,ar_4:3,f_auto,q_auto,g_auto/MjAxOTI5OTExNjkzMjg4OTY3/nike-sneakers.jpg"
                  alt="shoe"
                  className="h-full object-contain p-2"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">Sneaker Model</h2>
                <p className="text-sm text-gray-300">
                  Premium build, modern design.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral shadow-lg">
              <figure className="w-full h-72 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/b571b57606e94127bf77663c1fb009a9_9366/ID8468_HM1.jpg"
                  alt="shoe"
                  className="h-full object-contain p-2"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sneaker Model</h2>
                <p className="text-sm text-gray-300">
                  Premium build, modern design.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral shadow-lg">
              <figure className="w-full h-72 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/0c8255fa-2f08-4d21-acb0-4e8d9e33ba67/the-best-shoes-for-standing-all-day.jpg"
                  alt="shoe"
                  className="h-full object-contain p-2"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sneaker Model</h2>
                <p className="text-sm text-gray-300">
                  Premium build, modern design.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
