import { useContext,useState,useEffect } from "react";
import {SearchContext} from "../App";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



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

const FilteredData =()=>{

    const myData = useContext(SearchContext);
    const [searchTerm, setSearchTerm] = useState()
    // const [data, setData] = useState([]);
    // console.log("searched data",myData)

   const getUsers=()=>{
    //    setData(myData);
    //    console.log("data issss",data)
    }

    useEffect(() => {

        console.log("data is", myData)
    }, [searchTerm]);

    return(
        <>
         <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => {
                        if(e.target.value){
                        setSearchTerm(e.target.value)
                        // console.log("e val",e.target.value)
                        }else{
                            setSearchTerm();
                        }
                    }}
                />
            </Search>
            <div style={{background:'white',color:'black'}}>
            {Object.values(myData).filter((val)=>{
        if(searchTerm==""){
            return val
        }else if(val.firstName.includes(searchTerm)){
            return val
        }
    }).map((val,key)=>{
        return(
            <div key={key}>
                <p>{val.firstName}</p>
            </div>
        )
    })}
            </div>
        </>
    )
}
export default FilteredData;