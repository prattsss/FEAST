import React from "react";
import ReactDom from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import Body from "./Component/Body";
import Cart from "./Component/Cart";
import Profile from "./Component/Classbased/Profile";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import RestaurantPage from "./Component/RestuarantPage";




const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <LoginForm/> */}
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
        element: <RestaurantPage />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{
          path:"profile",
          element: <Profile/>
        }]
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

const root = ReactDom.createRoot(document.getElementById("head-root"))
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>)


