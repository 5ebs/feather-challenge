import "./index.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/page404";
import CustomSpinner from "./components/common/CustomSpinner";

const HomePage = React.lazy(() => import("./pages/homePage"));
const LoginPage = React.lazy(() => import("./pages/loginPage"));
const RegisterPage = React.lazy(() => import("./pages/registerPage"));
const PoliciesPage = React.lazy(() => import("./pages/policiesPage"));

export const queryClient = new QueryClient();

function AppRouting() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='policies' element={<PoliciesPage />} />
      <Route path='*' element={<Page404 />}></Route>
    </Routes>
  );
}

const App = () => (
  <React.Suspense fallback={<CustomSpinner />}>
    <QueryClientProvider client={queryClient}>
      <AppRouting />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.Suspense>
);

export default App;
