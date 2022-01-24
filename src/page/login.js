import {TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState,useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useLocation, useNavigate } from "react-router";
import ThemeContext from "../contexts/themeContext";
import ThemeButton from "../components/themeButton";
const useStyles = makeStyles({
    field:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding:5      
    }
})
const Login=()=>{
    const [email,setEmail] =useState("");
    const classes = useStyles();
    const navigator = useNavigate();
    const loc = useLocation();
    // const name = loc.state.fName;
    // console.log("loca is",name)
    const message = loc.state;

    //Trial
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = "jwt"
        localStorage.setItem("userToken",token);
        
         
        if(token){
        navigator('/welcome',{state:email})
        }else{
          navigator('/')

        }
      };
  
      const handleClose=()=>{
        navigator('/')
      }

      const themes = useContext(ThemeContext)
     
      console.log("theme is",themes)

      // const [theme,setTheme]=useState(themes.dark);

      // const toggleTheme=()=>{
      //   theme==themes.dark?setTheme(themes.light):setTheme(themes.dark);
      // }

    return(
        <>
   <div className={classes.field} style={themes.theme} >
     <h1>{message}</h1>
  
        <TextField
          label="Email"
          variant="filled"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}  >
            LogIn
          </Button>
          <ThemeButton/>
          {/* <button onClick={toggleTheme} >change theme</button> */}
        </div>
      </div>
        </>
    )
}

export default Login;