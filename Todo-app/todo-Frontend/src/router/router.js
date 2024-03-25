import { createBrowserRouter } from "react-router-dom";
import Register from "../signUp/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>halo</div>,
    children: [
      {
        path: "/",
        element: <div>halo</div>,
      },
    ],
  },
]);

export default router;
