import { useContext } from "react"
import {Link} from 'react-router-dom'
import {DashUl,DashLi } from "../components/styled"
import ThemeButton from "../components/themeButton"
import ThemeContext from "../contexts/themeContext"

const Header = () =>{
    const removeSession=()=>{
        localStorage.removeItem("userToken")
    }
    const themes = useContext(ThemeContext);
    return(
        <div style={themes.theme}>     
            <DashUl>
                <DashLi><Link to="/dashboard">Dashboard</Link></DashLi>
                <DashLi><Link to="/users" >User Deatils</Link></DashLi>
                <DashLi><Link to="/aboutUs">About us</Link></DashLi>
                <DashLi><Link to="/login" onClick={removeSession} >Logout</Link></DashLi>
                <DashLi><ThemeButton/></DashLi>
            </DashUl>
        </div>
    )
}

export default Header;