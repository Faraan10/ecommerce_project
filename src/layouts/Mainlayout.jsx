import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ cart, isDarkMode }) => {
  return (
    <>
      <Navbar cart={cart} isDarkMode={isDarkMode} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
