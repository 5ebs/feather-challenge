import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

export default function Page404() {
  return (
    <MainLayout>
      <h2>404</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </MainLayout>
  );
}
