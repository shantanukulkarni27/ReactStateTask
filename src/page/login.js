import { useLocation, useNavigate } from "react-router";
import React, { useState, useContext } from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import ThemeContext from "../contexts/themeContext";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Validation } from "../helper/validations";
const useStyles = makeStyles({
  field: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',    
  },
  Typo:{
    padding:5
  },
  textField:{
    marginBottom:10
  },
  buttons:{
    display:'block',
    color:'#4A8596',
    minWidth:50
  },


})
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [errors,setErrors]=useState({});
  const classes = useStyles();
  const navigator = useNavigate();
  const loc = useLocation();
  const message = loc.state;

  const handleBlur=()=>{

    setErrors(Validation(values));
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (!errors.email&& !errors.password) {
      const token = "jwt"
      localStorage.setItem("userToken", token);

      if (token) {
        navigator('/welcome', { state: values.email })
      } else {
        navigator('/')
      }

    } else {
      console.log("error")
    }
    
  };

  const handleClose = () => {
    navigator('/')
  }

  const themes = useContext(ThemeContext)

  const onEmailChange = (e) => {

    setValues({
      email: e.target.value,
      password: values.password
    })
  }
  const onPasswordChange = (e) => {
    setValues({
      email: values.email,
      password: e.target.value
    })
  }



const theme = createTheme();
  // return (
  //   <>
  //       <div className={classes.field} >
  //     <Box style={themes.theme} sx={{
  //         boxShadow: 4,
  //         width: '20rem',
  //         height: '30rem',
  //         bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  //         color: (theme) =>theme.palette.mode === 'dark' ? 'black.300' : 'black.800',
  //         p: 1,
  //         m: 1,
  //         borderRadius: 5,
  //       }} >
  
  //       <h1>Login</h1>
  //       <h1>{message}</h1>
  //       <Typography className={classes.Typo} >Email Address</Typography>
  //       <TextField
  //         label="Email"
  //         id="xyzemail"
  //         variant="filled"
  //         type="email"
  //         name="email"
  //         className={classes.textField}
  //         value={values.email}
  //         onBlur={handleBlur}
  //         onChange={onEmailChange}
  //         required
  //       />
  //       {errors.email && <p>{errors.email}</p>}
  //       <Typography className={classes.Typo} >Password</Typography>
  //       <TextField
  //         label="Password"
  //         variant="filled"
  //         type="password"
  //         name='password'
  //         value={values.password}
  //         onBlur={handleBlur}
  //         onChange={onPasswordChange}
  //         required
  //       />
  //       {errors.password && <p>{errors.password}</p>}
  //       <div>
  //         <Button type="submit" variant="contained" className={classes.buttons} color="primary" onClick={handleSubmit} disabled={!values.email || !values.password}  >
  //           LogIn
  //         </Button>
  //         <Typography className={classes.Typo} >OR</Typography>
  //         <Button variant="contained" className={classes.buttons} onClick={handleClose}>
  //           Cancel
  //         </Button>
  //         {/* <ThemeButton /> */}
  //       </div>
  //     </Box>
  //     </div>
  //   </>
  // )


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
            Sign in
          </Typography>
          <Box  noValidate sx={{ mt: 1 }}>
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
              onChange={onEmailChange}
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
              onChange={onPasswordChange}
              autoComplete="current-password"
            />
            {errors.password && <p>{errors.password}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit} disabled={!values.email || !values.password} 
            >
              Log In
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

export default Login;