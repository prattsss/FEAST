import React from "react";
import ReactDom from 'react-dom/client';
import Header from "./component/Header";
import Footer from "./component/Footer"
import Body from "./component/Body";
import Error from "./component/error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./component/contact";
import Cart from "./component/cart";
import About from "./component/about"
import RestaurantPage from "./component/restaurantpage";
import LoginForm from "./component/login";




const AppLayout = () => {
  return (
    <>
      <Header />
      <LoginForm/>
      <Outlet />
      <Footer />
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantPage/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  }
])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>)


