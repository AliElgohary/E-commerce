import React, { useContext, useEffect } from "react";
import LayOut from "./Components//LayOut/LayOut";
import Product from "./Components/Contact/Product/Product";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components//Home/Home";
import Brand from "./Components/Brand/Brand";
import Category from "./Components/Category/Category";
import Contact from "./Components//Contact/Contact";
import Setting from "./Components/Setting/Setting";
import NotFound from "./Components/NotFound/NotFound";
import Web from "./Components/Web/Web";
import Profile from "./Components/Profile/Profile";
import LogOutLayOut from "./Components/LogOutLayOut/LogOutLayOut";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import AppSetting from "./Components/App/App";
import { tokenContext } from "./Context/tokenContext";

const routers = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "brand", element: <Brand /> },
      { path: "category", element: <Category /> },
      { path: "contact", element: <Contact /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <Product /> },
      { path: "login", element: <Login /> },
      {
        path: "settings",
        element: <Setting />,
        children: [
          { path: "web", element: <Web /> },
          { path: "profile", element: <Profile /> },
          { path: "app", element: <AppSetting /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "auth",
    element: <LogOutLayOut />,
    children: [
      { path: "", element: <Login /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
function App() {
  let {setToken} = useContext(tokenContext)
  useEffect(() => {
    if(!localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  })
  return <RouterProvider router={routers}> </RouterProvider>;
}

export default App;
