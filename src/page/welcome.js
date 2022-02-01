import { useContext } from "react";
import { useLocation } from "react-router";
import ThemeContext from "../contexts/themeContext";
import { Header } from "../module/index";
const Welcome =()=>{
    const location = useLocation();
    const myName =location.state
    console.log(location)
    const themes= useContext(ThemeContext)
    return(
        <>
       <div style={themes.theme}>
       <Header/>
        <h1>Welcome {myName} </h1>
       </div>
        </>
    )
}
export default Welcome;