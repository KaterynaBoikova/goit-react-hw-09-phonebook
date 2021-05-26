import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import Layout from "../Components/Layout/Layout";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import styles from "../Styles/RegisterViewLoginView.module.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.userLogin({ email: email, password: password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={styles.textReg}>
            Login
          </Typography>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className={styles.form}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={styles.textfield}
                  required
                  id="outlined-required"
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={styles.textfield}
                  required
                  id="outlined-required"
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.btnMain}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
