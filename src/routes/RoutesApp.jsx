import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

import Hub from "../pages/Hub";

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
      </Routes>
    </BrowserRouter>
  );
}
