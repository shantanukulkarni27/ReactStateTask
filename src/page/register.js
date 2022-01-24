import {TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from "react-router";
import ThemeContext from "../contexts/themeContext";
import ThemeButton from "../components/themeButton";

const useStyles = makeStyles({
    field:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding:5 
    },
    buttons:{
      marginTop:15,
      display:'flex',
      justifyContent:'space-between',
      padding:5
    }
})
const Register=()=>{
    const classes = useStyles();
    const navigator = useNavigate();

    const themes=useContext(ThemeContext);
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(firstName, lastName, email, password);
      const details = {fName:firstName,lName:lastName,mail:email,pw:password}

      let storedDetails = localStorage.getItem('userDetails');
      if(storedDetails==null){
        storedDetails=[]
        storedDetails.push(details);
        localStorage.setItem('userDetails',JSON.stringify(storedDetails))
      }else{
        let newDetail = JSON.parse(storedDetails)
        newDetail.push(details)
        localStorage.setItem("userDetails",JSON.stringify(newDetail))
  
      };
      const message = "Registered Successfully"
      navigator('/login',{state:message})

      }
      // localStorage.setItem("userdetails",JSON.stringify(details));
 
    //   const message = "Registered Successfully"
    //   navigator('/login',{state:message})
    // };

    const handleClose=()=>{
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('')
    }
  
    return (
      <>
      <div className={classes.field} style={themes.theme} >
      <h1>Register</h1>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className={classes.buttons} >
          <Button  variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit}  variant="contained" color="primary"  >
            Signup
          </Button>
        </div>
        <ThemeButton/>
      </div>
      
      </>
    )
}
export default Register;