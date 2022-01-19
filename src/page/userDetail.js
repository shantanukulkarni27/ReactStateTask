import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { InputField,Mylabel } from "../components/styled";
import { Counter,MyCounter } from "../components/index";
const UserDetail =()=>{
    const [users,setUsers] =useState(
        {
            name: "",
            email:"",
            Password:"",
        }
    )
    let navigate = useNavigate();
    const HandleChange =(e) =>{

      setUsers({
            ...users,
            [e.target.name]:e.target.value,
            [e.target.email]:e.target.value,
            [e.target.Password]:e.target.value,
        })
        console.log("usets",users);
        
    }
    let data = users;
    const redirectHandler =() =>{
        navigate('/profile',{state: {users}})
    }
    return(
        <>
             <h1> Enter details </h1>
             <Mylabel>Name</Mylabel>
             <InputField type="text" name="name" placeholder="Enter Username" onChange={(HandleChange)}/>  
             <Mylabel>email</Mylabel>
             <InputField type="email" name="email" placeholder="Enter email" onChange={HandleChange}  />
             <Mylabel>Password</Mylabel> 
             <InputField type="password" name="password" placeholder="Enter Password" onChange={HandleChange}  />  
             <button onClick={redirectHandler}> Submit</button>
         <MyCounter/>
         <button onClick={()=>{navigate('/modal')}} >Modal</button>
        </>
    )
}
export default UserDetail;