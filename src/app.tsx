import { RouterProvider } from "react-router-dom";
import { UtilityAreaProvider } from "./contexts/utility-area";
import { router } from "./routes";

export function App() {
  return (
    <UtilityAreaProvider>
      <RouterProvider router={router} />
    </UtilityAreaProvider>
  );
}
