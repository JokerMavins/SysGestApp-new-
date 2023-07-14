import './App.css';
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoute } from "./routes/publicRoute";
import { privateRoute } from './routes/privateRoute';

const router = createBrowserRouter([
  ...publicRoute,
  ...privateRoute
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
