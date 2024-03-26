import { createBrowserRouter } from "react-router-dom";
import Register from "../signUp/register";
import Login from "../Login/Login";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import CheckUserRole from "../Middleware/CheckUserRole";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <CheckUserRole />,
      },
    ],
  },
]);

export default router;
