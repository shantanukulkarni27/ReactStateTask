import { useLocation } from "react-router";
import {useNavigate} from "react-router-dom"

const Profile = (props) =>{
    const location = useLocation();
    let myData = location.state;
    let navigator = useNavigate();
    
    const redirectLogin =()=>{
         navigator('/')
    }
    return(
        <>
        <h1>welcome :{myData.users.name} </h1>
        <h1>email is :  {myData.users.email} </h1>
        <button onClick={redirectLogin}>Logout</button>
        </>
    )
}
export default Profile;