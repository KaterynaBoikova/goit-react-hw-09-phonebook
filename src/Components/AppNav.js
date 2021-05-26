import React from "react";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./Navigation/AuthMenu";
import { useSelector } from "react-redux";
import authSelectors from "../Redux/Authentification/auth-selectors";
import styles from "../Styles/AppNav.module.css";
import Layout from "./Layout/Layout";

export default function AppNav() {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Layout sectionCN={styles.sectionNav}>
      <header className={styles.header}>
        <Navigation />
        {isUserLoggedIn ? <UserMenu /> : <AuthMenu />}
      </header>
    </Layout>
  );
}
