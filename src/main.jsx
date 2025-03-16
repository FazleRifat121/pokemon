import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto p-4">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>
);
