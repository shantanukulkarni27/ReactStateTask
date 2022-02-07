import { useContext } from "react"
import { Link } from 'react-router-dom'
import { DashUl, DashLi } from "../components/styled"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/styles';
import ThemeButton from "../components/themeButton";
import ThemeContext from "../contexts/themeContext";

const useStyles = makeStyles({
    link: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
    },
    boxes: {
        marginLeft: 80
    }
})
const Header = () => {
    const removeSession = () => {
        localStorage.removeItem("userToken")
    }
    const themes = useContext(ThemeContext);
    const classes = useStyles()
    return (
        <div style={themes.theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 0 }} className={classes.boxes}  >
                            <Link to="/dashboard" className={classes.link} >Dashboard</Link>
                        </Box>
                        <Box sx={{ flexGrow: 0 }} className={classes.boxes} >
                            <Link to="/users" className={classes.link} >User Deatils</Link>
                        </Box>
                        <Box sx={{ flexGrow: 0 }} className={classes.boxes}  >
                            <Link to="/aboutUs" className={classes.link}>About us</Link>
                        </Box>
                        <Box sx={{ flexGrow: 0 }} className={classes.boxes}  >
                            <Link to="/login" className={classes.link} onClick={removeSession} >Logout</Link>
                        </Box>
                        <Box sx={{ flexGrow: 0 }} className={classes.boxes} >
                            <ThemeButton />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header;