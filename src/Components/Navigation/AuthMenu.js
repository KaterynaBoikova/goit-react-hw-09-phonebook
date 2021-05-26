import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../Styles/AppNav.module.css'

const Navigation = () => (
    <div>
        <NavLink to="/register"
                 exact
                 className={styles.nav_link}
                 activeClassName={styles.nav_link_active}>Register</NavLink>
        <NavLink to="/login"
                 className={styles.nav_link}
                 activeClassName={styles.nav_link_active}>Login</NavLink>
    </div>
);

export default Navigation;