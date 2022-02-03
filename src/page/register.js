import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from "react-router";
import ThemeContext from "../contexts/themeContext";
import ThemeButton from "../components/themeButton";
import { Validation } from "../helper/validations";

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles({
  field: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5
  },
  buttons: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 5
  }
})
const Register = () => {
  const classes = useStyles();
  const navigator = useNavigate();
  const themes = useContext(ThemeContext);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleBlur = () => {
    console.log("In signup ");
    console.log(Validation(values));
    setErrors(Validation(values));
  }

  const handleSubmit = (e) => {
    //e.preventDefault();

    if (!errors.email && !errors.password && !errors.firstName && !errors.lastName) {

      const details = values;
      let storedDetails = localStorage.getItem('userDetails');
      if (storedDetails == null) {
        storedDetails = []
        storedDetails.push(details);
        localStorage.setItem('userDetails', JSON.stringify(storedDetails))
      } else {
        let newDetail = JSON.parse(storedDetails)
        newDetail.push(details)
        localStorage.setItem("userDetails", JSON.stringify(newDetail))

      };
      const message = "Registered Successfully"
      navigator('/login', { state: message })
    }
  }

  const handleClose = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }
  const theme = createTheme();

  return(
    <>
    <div style={themes.theme}  >
      <ThemeProvider theme={theme}  >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={values.firstName}
                onBlur={handleBlur}
                onChange={(e) => {
                  setValues({
                    firstName: e.target.value,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password
                  })
                }}

              />
              {errors.firstName && <p>{errors.firstName}</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="LastName"
                label="Last Name"
                autoFocus
                autoComplete="lastname"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={(e) => {
                  setValues({
                    firstName: values.firstName,
                    lastName: e.target.value,
                    email: values.email,
                    password: values.password
                  })
                }}

              />
              {errors.lastName && <p>{errors.lastName}</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={values.email}
                onBlur={handleBlur}
                onChange={(e) => {
                  setValues({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: e.target.value,
                    password: values.password
                  })
                }}

              />
              {errors.email && <p>{errors.email}</p>}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={(e) => {
                  setValues({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: e.target.value,
                  })
                }}

              />
              {errors.password && <p>{errors.password}</p>}
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit} disabled={!values.firstName || !values.lastName || !values.email || !values.password}
                color="primary"
              >
                Register
              </Button>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Grid container>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>

  </>
  )

}
export default Register;