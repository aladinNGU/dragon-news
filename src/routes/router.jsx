import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h3>This is authentication page</h3>,
  },
  {
    path: "/news",
    element: <h3>This is news page</h3>,
  },
  {
    path: "/*",
    element: <h3>Error: 404</h3>,
  },
]);

export default router;
