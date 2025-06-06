import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  DashBoard,
  Register,
  Login,
  Products,
  SingleProduct,
  Cart,
  Contact,
  About,
  Profile,
  Settings,
  NotFound,
} from "./pages/index";
import MainLayout from "./layouts/Mainlayout";
import Authlayout from "./layouts/AuthLayout";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import toast from "react-hot-toast";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const random = crypto.randomUUID();

  const [token, setToken] = useState("");

  const addToCart = (product) => {
    console.log(product);

    const checkCart = cart.find((item) => item.id === product.id);

    if (checkCart) {
      if (checkCart.quantity < product.stock) {
        const updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCart(updatedCart);
        toast.success("Updated cart");
      } else {
        toast.error("Max stock reached");
      }
    } else {
      if (product.stock > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
        toast.success("Added to cart");
      } else {
        toast.error("Out of stock");
      }
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("token", random);
    setToken(localStorage.getItem("token"));
  }, []);
  // console.log(token);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout cart={cart} isDarkMode={isDarkMode} />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <Products
                  token={token}
                  cart={cart}
                  setCart={setCart}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/products/:id"
              element={<SingleProduct setCart={setCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/settings"
                element={
                  <Settings
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                  />
                }
              />
            </Route>
          </Route>

          <Route element={<Authlayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
