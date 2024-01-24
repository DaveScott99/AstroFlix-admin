import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Movie from "../pages/Movie";
import Dashboard from "../pages/Dashboard";
import Serie from "../pages/Serie";
import User from "../pages/User";
import Genre from "../pages/Genre";
import CreateMovie from "../pages/CreateMovie";

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
          path="/serie"
          element={
            <Layout>
              <Serie />
            </Layout>
          }
        />

        <Route
          exact
          path="/users"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />

        <Route
          exact
          path="/genres"
          element={
            <Layout>
              <Genre />
            </Layout>
          }
        />

        <Route
          exact
          path="/create"
          element={
            <Layout>
              <CreateMovie />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
