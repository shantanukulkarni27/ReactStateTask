import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useLocation, useNavigate } from "react-router";
import ThemeContext from "../contexts/themeContext";
import ThemeButton from "../components/themeButton";
import { Validation } from "../helper/validations";
const useStyles = makeStyles({
  field: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5
  }
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
    console.log("in blur")
    setErrors(Validation(values));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email&& !errors.password) {
      console.log("in if",errors.email)
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
  return (
    <>
      <div className={classes.field} style={themes.theme} >
        <h1>{message}</h1>
        <TextField
          label="Email"
          id="xyzemail"
          variant="filled"
          type="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={onEmailChange}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <TextField
          label="Password"
          variant="filled"
          type="password"
          name='password'
          value={values.password}
          onBlur={handleBlur}
          onChange={onPasswordChange}
          required
        />
        {errors.password && <p>{errors.password}</p>}
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}  >
            LogIn
          </Button>
          <ThemeButton />
        </div>
      </div>
    </>
  )
}

export default Login;