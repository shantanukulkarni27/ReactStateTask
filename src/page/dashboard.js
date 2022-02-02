import { useContext, useEffect, useState } from "react";
import { DashHead } from "../components/styled";
import ThemeButton from "../components/themeButton";
import ThemeContext, { themes } from "../contexts/themeContext";
import { Header } from "../module/index";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EmpModal from "../components/EmpModal";
import DisplayTable from "./DisplayTable";

const Dashboard = () => {
  
    const themes = useContext(ThemeContext)

  
    // let a=[];
    // result.forEach((obj)=>{
    //     a.push(obj.title)
    // })
    // console.log("res is ", result)

    // console.log(a)
    return (
        <>
            <div style={themes.theme}>
                <Header />
                <DashHead>Welcome to dashboards</DashHead>
                <DisplayTable/>
           

         
            {/* <EmpModal/> */}

            </div>
        </>
    )
}
export default Dashboard;