import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Layout } from './components/layout';
import { Movie } from './pages/movie';
import { NotFoundPage } from './pages/not-found-page';
import { CreateMovie } from './pages/create-movie';
import { Media } from './pages/media';
import { ConfigMedia } from './pages/config-media';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout center colision_header><Home/></Layout>,
    errorElement: <NotFoundPage />
  },
  {
    path: "/movie",
    element: <Layout center colision_header><Movie /></Layout>,
    errorElement: <NotFoundPage />
  },
  {
    path: "/create/movie",
    element: <Layout center colision_header><CreateMovie /></Layout>,
    errorElement: <NotFoundPage />
  },
  {
    path: "/media/:title",
    element: <Layout><Media /></Layout>,
    errorElement: <NotFoundPage />
  },
  {
    path: "/media/config/:title",
    element: <Layout center colision_header><ConfigMedia /></Layout>,
    errorElement: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
