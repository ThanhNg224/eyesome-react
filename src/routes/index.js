import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import RequiresAuth from "./RequiresAuth";
import { authRoutes, contentRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

import { ErrorPage, Home, Login } from "../pages";
import { useAuthContext } from "../contexts";
import AlreadyLoggedInRedirect from "./AlreadyLoggedInRedirect";


const Index = () => {
  const { token } = useAuthContext();
  const location = useLocation();

  return (
    <Routes>
  {authRoutes.map((route, idx) => (
    <Route
      key={idx}
      path={route.path}
      element={
        <AlreadyLoggedInRedirect>{route.element}</AlreadyLoggedInRedirect>
      }
    />
  ))}
  <Route element={<SharedLayout />}>
    <Route path="/" element={<Home />} index />
    <Route path="*" element={<ErrorPage />} />

    {contentRoutes.map((route, idx) => (
      <Route key={idx} path={route.path} element={route.element} />
    ))}

    <Route element={<RequiresAuth />}>
      {privateRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}
    </Route>
  </Route>
</Routes>
  );
};

export { Index };
