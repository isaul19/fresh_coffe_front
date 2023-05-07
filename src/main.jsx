import React from "react";
import ReactDOM from "react-dom/client";
import { QuioscoProvider } from "./context/QuiscoProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QuioscoProvider>
            <RouterProvider router={router} />
        </QuioscoProvider>
    </React.StrictMode>
);
