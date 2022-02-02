import { useContext, useEffect, useState } from "react";
import { DashHead } from "../components/styled";
import ThemeButton from "../components/themeButton";
import ThemeContext, { themes } from "../contexts/themeContext";
import { Header } from "../module/index";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EmpModal from "../components/EmpModal";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Validation } from "../helper/validations";

const DisplayTable = () => {
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [id, setId] = useState()
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email:""
  })
  const [errors,setErrors]=useState({});

  const handleClickOpen = () => {
    setOpen(true);
    setId();
    setFirstName();
    setLastName();
    setEmail();
  };

  const handleEditOpen = (obj) => {
    setOpen(true);
    console.log("edie", obj)
    setId(obj.id);
    setFirstName(obj.firstName);
    setLastName(obj.lastName);
    setEmail(obj.email);

  };

  const handleClose = () => {
    setOpen(false);
    setFirstName('');
    setLastName('');
  };
  const getUsers = () => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        //   console.log("resp is",response)
        setResult(response.data);
        //   console.log("res is ",result)
      })
  }
  const handleDelete = (id) => {
    console.log("del id is", id)
    axios.delete(`http://localhost:3001/users/${id}`)
      .then(res => {
        console.log("delete responce is", res);
        result.filter(item => item.id !== id);
        getUsers();
      })
      .catch(err => {
        console.log("error is delete", err)
      })
  }

  const handleSubmit = async () => {
  
    setOpen(false);
    setSubmitted(true);
    if(!errors.email&& !errors.firstName && !errors.lastName ){
      let myIds = result.map((obj) => {
        return obj.id
  
      })
      // console.log("id is", id)
      let editable = myIds.includes(id);
      if (editable) {
        await axios.put(`http://localhost:3001/users/${id}`,
          {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email
          }
        )
          .then((response) => {
            console.log("resp is", response)
            console.log('resp', response.data)
            getUsers()
          })
          .catch((error) => {
            console.log("erroe", error);
          })
  
      } else {
        await axios.post('http://localhost:3001/users', {
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email
        })
          .then((response) => {
            console.log("resp is", response)
            console.log('resp', response.data)
            getUsers()
          })
          .catch((error) => {
            console.log("erroe", error);
          })
      }

    }else{
      console.log("enter values")
    }


  };
  const handleId = (e) => {
    setId(e.target.value);
    console.log("id is", id)
  }
  const handlefirstName = (e) => {
    setFirstName(e.target.value);
    setValues({
      firstName: e.target.value,
      lastName: values.lastName,
      email:values.email
    })

    console.log("first name is", firstName)
  }
  const handlelastName = (e) => {
    setLastName(e.target.value);
    console.log("lastName is", lastName);
    setValues({
      firstName: values.firstName,
      lastName: e.target.value,
      email:values.email
    })
    ;
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setValues({
      firstName: values.firstName,
      lastName: values.lastName,
      email:e.target.value
    })
  };
  const handleBlur=()=>{
    console.log("in blur")
    setErrors(Validation(values));
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">id</TableCell>
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">Lastname</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((obj, i) => (
              <TableRow
                key={i}>
                <TableCell align="right">{obj.id}</TableCell>
                <TableCell align="right">{obj.firstName}</TableCell>
                <TableCell align="right">{obj.lastName}</TableCell>
                <TableCell align="right">{obj.email}</TableCell>
                <TableCell align="right">
                  {/* <DeleteIcon onClick={handleDelete} /> */}
                  <button onClick={() => { handleDelete(obj.id) }} >Delete</button>
                  <button onClick={() => { handleEditOpen(obj) }} >Edit</button>
                  {/* <ModeEditIcon  /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button variant="outlined" onClick={handleEditOpen}>
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
              name="id"
              id="id"
              label="id"
              type="text"
              fullWidth
              variant="standard"
              value={id}
              onChange={handleId}
            />
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
              onBlur={handleBlur}
              onChange={handlefirstName}
            />
             {errors.firstName && <p>{errors.firstName}</p>}
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
              onBlur={handleBlur}
              onChange={handlelastName}
            />
             {errors.lastName && <p>{errors.lastName}</p>}
            <TextField
              label="Email"
              variant="filled"
              type="email"
              required
              value={email}
              onBlur={handleBlur}
              onChange={handleEmail}
            />
             {errors.email && <p>{errors.email}</p>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} disabled={!firstName || !lastName || !email} >Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )

}
export default DisplayTable;