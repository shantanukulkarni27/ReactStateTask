import { useContext } from "react"
import { DashAnchor,DashUl,DashLi } from "../components/styled"
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
                <DashLi><a href="/dashboard">Dashboard</a></DashLi>
                <DashLi><a href="/users" >User Deatils</a></DashLi>
                <DashLi><a href="/aboutUs">About us</a></DashLi>
                <DashLi><a href="/" onClick={removeSession} >Logout</a></DashLi>
                <DashLi><ThemeButton/></DashLi>
            </DashUl>
        </div>
    )
}

export default Header;