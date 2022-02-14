import { useContext} from "react";
import { DashHead } from "../components/styled";
import ThemeContext  from "../contexts/themeContext";
import { Header } from "../module";
import DisplayTable from "./DisplayTable";

const Dashboard = () => {
    const themes = useContext(ThemeContext)
    return (
        <>
            <div style={themes.theme}>
                <Header />
                <DashHead>Welcome to dashboards</DashHead>
                <DisplayTable/>
            </div>
        </>
    )
}
export default Dashboard;