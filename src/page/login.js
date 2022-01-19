import {TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useLocation, useNavigate } from "react-router";

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
    const [email,setEmail] =useState();
    const classes = useStyles();
    const navigator = useNavigate();
    const loc = useLocation();
    // const name = loc.state.fName;
    // console.log("loca is",name)
    const message = loc.state;

    const token = localStorage.getItem("userToken")
    console.log("token is",token)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(token){
        navigator('/welcome',{state:email})
        }else{
          navigator('/')

        }
      };
  
      const handleClose=()=>{
       
      }
    return(
        <>
   <form className={classes.field} onSubmit={handleSubmit}>
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
          <Button type="submit" variant="contained" color="primary"  >
            LogIn
          </Button>
        </div>
      </form>
        </>
    )
}

export default Login;