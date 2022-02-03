import { useEffect, useState } from "react";
import axios from "axios";
import { Validation } from "../helper/validations";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const DisplayTable = () => {
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setId] = useState('');
  const [values, setValues] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleEditOpen = (obj) => {
    setOpen(true);
    setId(obj.id);
    setFirstName(obj.firstName);
    setLastName(obj.lastName);
    setEmail(obj.email);
  };

  const handleClose = () => {
    setOpen(false);
    setId();
    setFirstName("");
    setLastName("");
    setEmail();
  };
  const getUsers = () => {
    axios.get("http://localhost:3001/users").then((response) => {
      //   console.log("resp is",response)
      setResult(response.data);
      //   console.log("res is ",result)
    });
  };
  const handleDelete = (id) => {
    // console.log("del id is", id);
    axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((res) => {
        // console.log("delete responce is", res);
        result.filter((item) => item.id !== id);
        getUsers();
      })
      .catch((err) => {
        // console.log("error is delete", err);
      });
  };

  const handleSubmit = async () => {
    setOpen(false);
    setSubmitted(true);
    console.log("eorros",errors.email)
    if (!errors.email && !errors.firstName && !errors.lastName) {
      let myIds = result.map((obj) => {
        return obj.id;
      });
      // console.log("id is", id)
      let editable = myIds.includes(id);
      if (editable) {
        await axios
          .put(`http://localhost:3001/users/${id}`, {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
          })
          .then((response) => {
            // console.log("resp is", response);
            // console.log("resp", response.data);
            getUsers();
          })
          .catch((error) => {
            console.log("error", error);
          });
      } else {
        await axios
          .post("http://localhost:3001/users", {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
          })
          .then((response) => {
            // console.log("resp is", response);
            // console.log("resp", response.data);
            getUsers();
          })
          .catch((error) => {
            // console.log("erroe", error);
          });
      }
    } else {
      console.log("enter values");
    }
  };
  const handleId = (e) => {
    setId(e.target.value);
    // console.log("id is", id);
  };
  const handlefirstName = (e) => {
    setFirstName(e.target.value);
    setValues({
      firstName: e.target.value,
      lastName: values.lastName,
      email: values.email,
    });

    // console.log("first name is", firstName);
  };
  const handlelastName = (e) => {
    setLastName(e.target.value);
    // console.log("lastName is", lastName);
    setValues({
      firstName: values.firstName,
      lastName: e.target.value,
      email: values.email,
    });
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setValues({
      firstName: values.firstName,
      lastName: values.lastName,
      email: e.target.value,
    });
  };
  const handleBlur = () => {
    // console.log("in blur");
    setErrors(Validation(values));
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
              <StyledTableCell align="right">id</StyledTableCell>
              <StyledTableCell align="right">FirstName</StyledTableCell>
              <StyledTableCell align="right">Lastname</StyledTableCell>
              <StyledTableCell align="right">email</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((obj, i) => (
              <StyledTableRow  key={i}>
                <TableCell align="right">{obj.id}</TableCell>
                <TableCell align="right">{obj.firstName}</TableCell>
                <TableCell align="right">{obj.lastName}</TableCell>
                <TableCell align="right">{obj.email}</TableCell>
                <TableCell align="right">

                <Button variant="contained" color="error" onClick={() => {handleDelete(obj.id)}}> Delete</Button>
                <Button variant="contained" color="success"onClick={() => {handleEditOpen(obj)}}> Edit</Button>
                </TableCell>
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button variant="outlined" onClick={handleEditOpen}>
          Employee Details
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Employee details</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter the following details</DialogContentText>
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
              onBlur={handleBlur}
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
            <Button
              onClick={handleSubmit}
              disabled={!id || !firstName || !lastName || !email}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default DisplayTable;
