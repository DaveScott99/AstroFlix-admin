import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { router } from "./routes";
import { UtilityAreaProvider } from "./contexts/utility-area";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UtilityAreaProvider>
        <RouterProvider router={router} />
      </UtilityAreaProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
