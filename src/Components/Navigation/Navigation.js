import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../Redux/Authentification/auth-selectors";
import styles from "../../Styles/AppNav.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={styles.nav_link}
          activeClassName={styles.nav_link_active}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
