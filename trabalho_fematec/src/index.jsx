import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from "./screens/Home"
import {RouterProvider, createBrowserRouter, } from 'react-router-dom';
import Calculator from './screens/Calculator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/calculator",
    element: <Calculator />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);


