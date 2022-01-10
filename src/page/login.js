import { Form,Button } from "../components/index";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import  Profile  from "./Profile";
const Login =()=>{

    const [users,setUsers] =useState(
        {
            name: "",
            email:"",
            Password:"",
        }
    )
    let navigate = useNavigate();
    const HandleChange =() =>{
      var data=  setUsers({
            ...users,
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            Password:document.getElementById("password").value,

        })
        console.log("data is",users)
    }
    // const mydata= HandleChange();
    console.log("my data is",users)
    return(
        <>
             <form>
             <label>Name</label>
             <input type="text" id="name" onChange ={HandleChange}  /> <br/><br/>
             <label>email</label>
             <input type="email" id="email" onChange ={HandleChange}  /><br/><br/>
             <label>password</label>
             <input type="password" id="password" onChange ={HandleChange}  />
             <hr/>
             <button onClick={()=>{navigate("./profile")}}> Submit</button>
         </form>
         <Profile data = {users}/>
         
        </>
    )
}

export default Login;