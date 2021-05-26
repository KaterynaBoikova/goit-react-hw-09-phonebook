import React, { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import authOperations from "./Redux/Authentification/auth-operations";
import AppNav from "./Components/AppNav";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

const HomeView = lazy(() =>
  import("./Views/HomeView" /* webpackChunkName: "home" */)
);
const PhonebookView = lazy(() =>
  import("./Views/PhonebookView" /* webpackChunkName: "phonebook" */)
);
const RegisterView = lazy(() =>
  import("./Views/RegisterView" /* webpackChunkName: "register" */)
);
const LoginView = lazy(() =>
  import("./Views/LoginView" /* webpackChunkName: "login" */)
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <AppNav />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="teal"
            height={130}
            width={130}
            style={{
              textAlign: "center",
            }}
          />
        }
      >
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <PhonebookView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
