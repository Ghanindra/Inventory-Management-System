
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import React from 'react'

const Routes =  createBrowserRouter([
        {
          path: "/",
          element: <Product/>,
        },
      ]);

export default Routes