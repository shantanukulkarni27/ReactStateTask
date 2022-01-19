import { useLocation } from "react-router";
import { Header } from "../module/index";
const Welcome =()=>{
    const location = useLocation();
    const myName =location.state
    console.log(location)
    return(
        <>
        <Header/>
        <h1>Welcome {myName} </h1>
        </>
    )
}

export default Welcome;