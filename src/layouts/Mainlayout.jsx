import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ cart, isDarkMode }) => {
  return (
    <>
      <Navbar cart={cart} isDarkMode={isDarkMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
