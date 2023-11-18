import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDom from 'react-dom/client';
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Component/Body";
import Cart from "./Component/Cart";
import Profile from "./Component/Classbased/Profile";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import RestaurantPage from "./Component/RestuarantPage";
import appStore from "./utils/appStore";
import userContext from "./utils/useContext";

const About = lazy(() => import("./Component/About"));

const AppLayout = () => {
  //authentication
  const [userData, setUserData] = useState("")
  useEffect(() => {
    const data = {
      name: "Pratts",
    }
    setUserData(data.name)
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ userName: userData, setUserData }}>
        <Header />
        <Outlet />
      </userContext.Provider>
      <Footer />
    </Provider>
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
        element: <Suspense fallback={<h1>ara hai arra hai</h1>}><About /></Suspense>,
        children: [{
          path: "profile",
          element: <Profile />
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


