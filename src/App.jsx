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
} from "./pages/index";
import MainLayout from "./layouts/Mainlayout";
import Authlayout from "./layouts/AuthLayout";
import { useEffect } from "react";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  const random = crypto.randomUUID();

  useEffect(() => {
    localStorage.setItem("token", random);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
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
