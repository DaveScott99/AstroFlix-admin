import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Movie } from "./pages/movie";
import { NotFoundPage } from "./pages/not-found-page";
import { CreateMovie } from "./pages/create-movie";
import { Media } from "./pages/media";
import { ConfigMedia } from "./pages/config-media";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { GenreConfig } from "./components/edit-media/genre/genre-config";
import { Details } from "./components/edit-media/details/details";
import { Logo } from "./components/edit-media/art/logo";
import { EditMedia } from "./pages/edit-media";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout center colision_header colision_sidebar>
        <Home />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/movie",
    element: (
      <Layout center colision_header colision_sidebar>
        <Movie />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create/movie",
    element: (
      <Layout center colision_header colision_sidebar>
        <CreateMovie />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/media/:title/edit",
    element: (
      <Layout>
        <EditMedia />
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/media/config/:id/:title/details",
    element: (
      <Layout center colision_header colision_sidebar >
        <ConfigMedia>
          <Details />
        </ConfigMedia>
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/media/config/:id/:title/genre",
    element: (
      <Layout center colision_header colision_sidebar>
        <ConfigMedia>
          <GenreConfig />
        </ConfigMedia>
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/media/config/:id/:title/logo",
    element: (
      <Layout center colision_header colision_sidebar>
        <ConfigMedia>
          <Logo />
        </ConfigMedia>
      </Layout>
    ),
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
