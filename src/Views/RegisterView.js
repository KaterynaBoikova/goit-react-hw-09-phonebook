import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import Layout from "../Components/Layout/Layout";
import {
  TextField,
  Avatar,
  Typography,
  Grid,
  Container,
  CssBaseline,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "../Styles/RegisterViewLoginView.module.css";

export default function RegisterView() {
  const [newUser, setNewUser] = useState({ email: "", password: "", name: "" });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      authOperations.userRegister({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      })
    );
    setNewUser({ email: "", password: "", name: "" });
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
            Register
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
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  value={newUser.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={styles.textfield}
                  required
                  id="outlined-required"
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
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
                  value={newUser.password}
                  onChange={handleChange}
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
              Register
            </Button>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
