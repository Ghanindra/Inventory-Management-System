// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Shop/>,
//     },
//   ]);
//   export default router;
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