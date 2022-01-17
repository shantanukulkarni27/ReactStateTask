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
import { useState, useRef } from 'react';

function MyModal() {
  const [open, setOpen] = React.useState(false);
  const [myName, setMyName] = useState();
  const [lastName, setLastName] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('');
  const [myText,setText] = useState('');

  // const [users,setUsers] =useState(
  //     {
  //         fName: "",
  //         lName:"",
  //         role:"",
  //     }
  // )

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setMyName('');
    setLastName('');
    setRole('')
    setSubmitted(false);
  };
  const handleSubmit = () => {
    setOpen(false);
    displaydata();
    setSubmitted(true);
  };
  const handlefirstName = (e) => {
    setMyName(e.target.value)
    console.log("first name is", myName)
  }
  const handlelastName = (e) => {
    setLastName(e.target.value);
    console.log("lastName is", lastName);
    ;
  }
  const handleText =(e)=>{
    setText(e.target.value);
    console.log("text is",myText)
  }

  const handleChange = (e, value) => {
    setRole(e.target.value);
    // setUsers({
    //     ...users,
    //     fName:e.target.value,
    //     lName:e.target.value,
    //     role:e.target.value,
    // })

    // console.log("vals is",users)
  };
  const displaydata = () => {
    return (
      <>
        <div>
          <h1>first name is {myName}</h1>
          <h1>Last name is {lastName}</h1>
          <h1>Role is {role}</h1>
        </div>
      </>
    )
  }
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
              onChange={handlelastName}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={role}
                  onChange={handleChange}
                  label="Role"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Trainee">Trainee</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Expert">Expert</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Enter text"
              style={{ width: 300, height: 70, marginTop: 10 }}
              onChange ={handleText}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      {isSubmitted &&
        <div>
          <h1>first name is {myName}</h1>
          <h1>Last name is {lastName}</h1>
          <h1>Role is {role}</h1>
          <h1>Description {myText}</h1>
        </div>}
    </>
  )
}

export default MyModal;