import { Navigate } from "react-router";

const PublicRoute =({children})=>{
    let token = localStorage.getItem('userToken');
    console.log("token is",token)
    return token? <Navigate to="/welcome"/>:children;
}
export default PublicRoute;