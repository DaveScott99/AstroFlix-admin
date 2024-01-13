import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

import Hub from "../pages/Hub";
import Movie from "../pages/Movie";


export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Hub />
            </Layout>
          }
        />

        <Route
          exact
          path="/movie"
          element={
            <Layout>
              <Movie />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
