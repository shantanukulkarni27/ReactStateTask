import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const location = useLocation();
    let user = location.state.users;
    let navigator = useNavigate();
    const redirectLogin = () => {
        navigator('/')
    }
    return (
        <>
            <h1>welcome :{user.name} </h1>
            <h1>email is :  {user.email} </h1>
            <button onClick={redirectLogin}>Logout</button>
        </>
    )
}
export default Profile;