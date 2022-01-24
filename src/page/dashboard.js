import { useContext } from "react";
import { DashHead } from "../components/styled";
import ThemeButton from "../components/themeButton";
import ThemeContext,{themes} from "../contexts/themeContext";
import { Header } from "../module/index";
const Dashboard = () =>{
    const themes = useContext(ThemeContext)
    return(
        <>
        <div style={themes.theme}>           
        <Header/>
        <DashHead>Welcome to dashboards</DashHead>
        </div>    
        </>
    )
}
export default Dashboard;