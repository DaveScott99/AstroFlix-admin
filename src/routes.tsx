import {  createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/app";
import { NotFoundPage } from "./pages/not-found-page";
import { Movie } from "./pages/movie";
import { CreateMovie } from "./pages/create-movie";
import { EditMedia } from "./pages/edit-media";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/movie",
        element: <Movie />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/create/movie",
        element: <CreateMovie />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/media/:title/edit",
        element: <EditMedia />,
        errorElement: <NotFoundPage />,
      },
    ],
  },

]);
