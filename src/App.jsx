import React from "react";
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Body />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>{" "}
    </div>
  );
};

export default App;
