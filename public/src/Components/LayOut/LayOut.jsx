import React from "react";
import NavBar from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default LayOut;
