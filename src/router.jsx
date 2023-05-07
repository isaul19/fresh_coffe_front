import { createBrowserRouter } from "react-router-dom";

import Layout from "./layouts/Layout";
import LayoutAuth from "./layouts/LayoutAuth";

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        element: <LayoutAuth />,
        children: [
            {
                path: "auth/login",
                element: <Login />,
            },
            {
                path: "auth/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
