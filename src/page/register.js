import {TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from "react-router";
import ThemeContext from "../contexts/themeContext";
import ThemeButton from "../components/themeButton";
import { Validation } from "../helper/validations";

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
    const [errors,setErrors]=useState({firstName:'',
    lastName:'',
    email:'',
    password:''});
    const [values,setValues]=useState({
      firstName:'',
      lastName:'',
      email:'',
      password:''
    })

    const handleBlur=()=>{
      console.log("In signup ");
      console.log(Validation(values));
      setErrors(Validation(values));
    }
  
    const handleSubmit = (e) => {
      //e.preventDefault();
  
     if(!errors.email&&!errors.password&&!errors.firstName&&!errors.lastName){

      const details = values;
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
      }

    const handleClose=()=>{
       setValues({
         firstName:'',
         lastName:'',
         email:'',
         password:''
       })
    }
  
    return (
      <>
      <div className={classes.field} style={themes.theme} >
      <h1>Register</h1>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={values.firstName}
          onBlur={handleBlur}
          onChange={(e)=>{
            setValues({
              firstName: e.target.value,
              lastName:values.lastName,
              email:values.email,
              password: values.password
            })}}
        />
          {errors.firstName && <p>{errors.firstName}</p>}
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={values.lastName}
          onBlur={handleBlur}
          onChange={(e)=>{
            setValues({
              firstName: values.firstName,
              lastName:e.target.value,
              email:values.email,
              password: values.password
            })}}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={values.email}
          onBlur={handleBlur}
          onChange={(e)=>{
            setValues({
              firstName:values.firstName,
              lastName:values.lastName,
              email: e.target.value,
              password: values.password
            })}}
        />
          {errors.email && <p>{errors.email}</p>}
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={values.password}
          onBlur={handleBlur}
          onChange={(e)=>{
            setValues({
              firstName: values.firstName,
              lastName:values.lastName,
              email:values.email,
              password: e.target.value,
            })}}
        />
        {errors.password && <p>{errors.password}</p>}
        <div className={classes.buttons} >
          <Button  variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} disabled={!values.firstName || !values.lastName || !values.email || !values.password }  variant="contained" color="primary"  >
            Signup
          </Button>
        </div>
        <ThemeButton/>
      </div>
      
      </>
    )
}
export default Register;