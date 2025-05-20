import { useEffect, useState } from "react";
import axios from "axios";
import './styles/App.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import ErrorBoundary from "./pages/Error";
import useFetch from "./custom-hooks/useFetch";
import Products from "./pages/Products";

const url = "https://jsonplaceholder.typicode.com/posts/";



function App() {

  useEffect(() => {
    
  }, [url]);

  const { data: productsData } = useFetch(url);

  const router = createBrowserRouter([
      {
          path: "/",
          element: <AppLayout />,
          errorElement: <ErrorBoundary></ErrorBoundary>,
          children: [
              {
                  index: true,
                  element: <Navigate to="/home" />,
              },
              {
                  path: "/home",
                  element: <Home />,
              },
              {
                  path: "/products",
                  element: <Products />
              }
          ],
      },
  ]);


  return <RouterProvider router={router} />;
}


export default App
