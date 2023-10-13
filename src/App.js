/** @format */

import React from "react";
import {Navigate, RouterProvider, createBrowserRouter, createHashRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Categories from "./components/Categories/Categories";
import NotFound from "./components/NotFound/NotFound";
import Brands from "./components/Brands/Brands";
import CounterContextProvider from "./Context/CounterContext";
import UserContextProvider from "./Context/userContext";
import ProtectedRout from "./components/protectedRout/protectedRout";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from "./Context/cartContext";
import CardContextProvider from "./Context/CardContext";
import {Toaster} from "react-hot-toast";
import Addresss from "./components/addresss/addresss";
import Orders from "./components/Orders/Orders";


// createBrowserRouter

let routers = createHashRouter([
  {
    path: "",
    element: <Layout />,

    children: [
      {
        index: true,
        element: (
          <ProtectedRout>
            <Home />
          </ProtectedRout>
        ),
      },
      {
        path: "Products",
        element: (
          <ProtectedRout>
            <Products />
          </ProtectedRout>
        ),
      },
      { path: "addresss",element: (<ProtectedRout><Addresss /></ProtectedRout>),},
      { path: "allOrder",element: (<ProtectedRout><Orders /></ProtectedRout>),},
      {
        path: "cart",
        element: (
          <ProtectedRout>
            <Cart />
          </ProtectedRout>
        ),
      },
      {
        path: "Categories",
        element: (
          <ProtectedRout>
            <Categories />
          </ProtectedRout>
        ),
      },

      {
        path: "Brands",
        element: (
          <ProtectedRout>
            <Brands />
          </ProtectedRout>
        ),
      },
      {
        path: "Profile",
        element: (
          <ProtectedRout>
            <Profile />
          </ProtectedRout>
        ),
      },
      {
        path: "ProductDetails/:id",
        element: (
          <ProtectedRout>
            <ProductDetails />
          </ProtectedRout>
        ),
      },
      {path: "Login", element: <Login />},
      {path: "address", element: <address />},
      {path: "Register", element: <Register />},
      {path: "*", element: <NotFound />},
    ],
  },
]);

export default function App(props) {
  return (
    <>
      <CardContextProvider>
        <CartContextProvider>
          <UserContextProvider>
            <CounterContextProvider>
              <RouterProvider router={routers}></RouterProvider>
              <Toaster />
            </CounterContextProvider>
          </UserContextProvider>
        </CartContextProvider>
      </CardContextProvider>
    </>
  );
}
