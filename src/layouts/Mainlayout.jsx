import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ cart }) => {
  return (
    <>
      <Navbar cart={cart} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
