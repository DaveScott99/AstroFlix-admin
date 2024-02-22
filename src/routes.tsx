import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/app";
import { NotFoundPage } from "./pages/not-found-page";
import { Movie } from "./pages/movie";
import { CreateMovie } from "./pages/create-movie";
import { EditMedia } from "./pages/edit-media";
import { Create } from "./pages/create";
import { Submenu } from "./components/submenu";
import { Content } from "./components/content";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/dashboard",
        element: <Movie />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/create",
        element: <Create />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "movie",
                
            }
        ]
       
      },
      {
        path: "/media/:title/edit",
        element: <EditMedia />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);
