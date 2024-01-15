import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Movie from "../pages/Movie";
import Dashboard from "../pages/Dashboard";
import Form from "../pages/Form";


export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Dashboard />
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

        <Route
          exact
          path="/create"
          element={
            <Layout>
              <Form />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
