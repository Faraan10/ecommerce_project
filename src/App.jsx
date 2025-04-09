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
} from "./pages/index";
import MainLayout from "./layouts/Mainlayout";
import Authlayout from "./layouts/AuthLayout";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  const [cart, setCart] = useState([]);
  const random = crypto.randomUUID();

  const [token, setToken] = useState("");

  useEffect(() => {
    localStorage.setItem("token", random);
    setToken(localStorage.getItem("token"));
  }, []);
  // console.log(token);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout cart={cart} />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products setCart={setCart} />} />
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
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
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
