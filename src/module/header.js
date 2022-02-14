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
import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {MySearch} from "../components/index"
import FilteredData from "../page/filteredData";

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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
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
                            <FilteredData/>
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