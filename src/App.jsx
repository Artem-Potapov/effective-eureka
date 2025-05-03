import { useEffect, useState } from "react";
import axios from "axios";
import './styles/App.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Home";
import { useRoute } from "@react-navigation/native";
import { useNavigate } from "react-router";

const url = "https://jsonplaceholder.typicode.com/posts/";



function App() {

  useEffect(() => {
    
  }, [url]);

  const router = createBrowserRouter([
      {
          path: "/",
          element: <AppLayout />,
          errorElement: <div>Error</div>,
          children: [
              {
                  index: true,
                  element: <Navigate to="/home" />,
              },
              {
                  path: "/home",
                  element: <Home />,
              },
          ],
      },
  ]);


  return <RouterProvider router={router} />;
}


export default App
