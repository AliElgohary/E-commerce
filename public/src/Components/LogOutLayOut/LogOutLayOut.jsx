import React from "react";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import AuthNav from "../AuthNavBar/AuthNav";

const LogOutLayOut = () => {
  return (
    <>
      <AuthNav />
      <Outlet />
      <Footer />
    </>
  );
};
export default LogOutLayOut;
