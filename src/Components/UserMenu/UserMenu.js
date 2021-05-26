import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "../../Redux/Authentification/auth-operations";
import authSelectors from "../../Redux/Authentification/auth-selectors";
import { Avatar, Button, CssBaseline, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "../../Styles/UserMenu.module.css";

export default function UserMenu() {
  const userMail = useSelector(authSelectors.getUserMail);
  const dispatch = useDispatch();

  return (
    <div className={styles.userDiv}>
      <CssBaseline />
      <Avatar className={styles.avatar}>
        <AccountCircleIcon />
      </Avatar>
      <Typography className={styles.userName}>{userMail}</Typography>
      <Button
        type="button"
        color="inherit"
        onClick={() => dispatch(authOperations.userLogout())}
      >
        Logout
      </Button>
    </div>
  );
}
