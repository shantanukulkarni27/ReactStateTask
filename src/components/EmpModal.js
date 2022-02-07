import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextareaAutosize } from '@mui/base';
import { useState,useEffect} from 'react';
import axios from 'axios';

function EmpModal() {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  // const [myText,setText] = useState('');
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFirstName('');
    setLastName('');
 
  };
  const handleSubmit = async() => {
    setOpen(false);
    setSubmitted(true);
    try {
      console.log("in try",firstName,lastName,email)
    await axios.post("http://localhost:3001/users",
        {
          firstName:firstName,
          lastName:lastName,
          email:email
        }
        )
        // .then((response) => {
        //       console.log("resp is",response)
        //     // setResult(response.data);
        //     //   console.log("res is ",result)

        // })
        // .catch((error)=>{
        //   console.log("erroe",error);
        // })
      }catch(error){
        console.log("there ia error")
      }
    
  };
  const handlefirstName = (e) => {
    setFirstName(e.target.value)
    console.log("first name is", firstName)
  }
  const handlelastName = (e) => {
    setLastName(e.target.value);
    console.log("lastName is", lastName);
    ;
  }


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Employee Details
        </Button>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>Employee details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the following details
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="fName"
              id="fName"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              value={firstName}
              onChange={handlefirstName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="lName"
              name="lName"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              value={lastName}
              onChange={handlelastName}
            />
                   <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={handleEmail}
        />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      {/* {isSubmitted &&
        <div>
          <h1>first name is {firstName}</h1>
          <h1>Last name is {lastName}</h1>
          <h1>Email is {email}</h1>
        </div>} */}
    </>
  )
}

export default EmpModal;