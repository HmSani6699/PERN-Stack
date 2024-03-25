import { createBrowserRouter } from "react-router-dom";
import Register from "../signUp/register";
import Login from "../Login/Login";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/userDashboard",
        element: <div>Hallo user Dashboard</div>,
      },
    ],
  },
]);

export default router;
