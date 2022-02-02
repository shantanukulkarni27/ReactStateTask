import { border } from "@mui/system";
import React from "react";
import { useState } from "react";

export const themes ={
    dark:{
        color:'white',
        background:'#858585',
        padding:'5px',
        border:'2px solid black'
    },
    light:{
        color:'black',
        background:'white',
        padding:'5px',
        border:'2px solid black'
    }
}
const ThemeContext = React.createContext(themes.dark);
export default ThemeContext