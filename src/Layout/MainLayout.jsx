import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Component/header/Navbar/Navbar";

const MainLayout = () => {
 return (
  <div>
   <Navbar></Navbar>
   <Outlet></Outlet>
  </div>
 );
};

export default MainLayout;