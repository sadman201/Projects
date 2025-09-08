import { createBrowserRouter } from "react-router";
import App from "../App";
import Contact from "../components/Contact";
import Home from "../components/home/Home";
import About from "../components/about";
import Shop from "../components/shop/Shop";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
