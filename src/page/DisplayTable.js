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



const DisplayTable = () => {
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [id, setId] = useState()

  const handleClickOpen = () => {
    setOpen(true);
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
  const handleSubmit = async () => {
    setOpen(false);
    setSubmitted(true);
    await axios.post('http://localhost:3001/users', {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email
    })
      .then((response) => {
        console.log("resp is", response)
        setResult(response.data);
        getUsers()
      })
      .catch((error) => {
        console.log("erroe", error);
      })
  };
  const handleId = (e) => {
    setId(e.target.value);
    console.log("id is", id)
  }
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
  useEffect(() => {
    getUsers();

  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">Lastname</TableCell>
              <TableCell align="right">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result && result.map((obj, i) => (
              <TableRow
                key={i}>
                <TableCell align="right">{i}</TableCell>
                <TableCell align="right">{obj.firstName}</TableCell>
                <TableCell align="right">{obj.lastName}</TableCell>
                <TableCell align="right">{obj.email}</TableCell>
                <Grid item xs={8}>
                  <DeleteIcon />
                  <ModeEditIcon />
                </Grid>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </>
  )
}
export default DisplayTable;