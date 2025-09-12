import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User_Login from "../Pages/User_Login";
import User_Registration from "../Pages/User_Registration";
import Home_page from "../pages/Home_page";
import Detail_page from "../pages/Detail_page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_page />,
  },
  {
    path: "/login",
    element: <User_Login />,
  },
  {
    path: "/register",
    element: <User_Registration />,
  },
  {
    path: "/details",
    element: <Detail_page />,
  },
]);
