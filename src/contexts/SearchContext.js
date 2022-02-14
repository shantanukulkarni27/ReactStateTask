import React from "react";
import axios from "axios";
import { createContext } from "react";
import { useState } from "react";

    
 function FilteredData(){
    const [filtereddata,setFdata]= useState()
    axios.get("http://localhost:3001/users")
    .then((response)=>{
   
          console.log("response is",response)
        // data.ndata = response;
        // setFdata(data.ndata)
        // console.log("resp mm is",data.ndata)
    })
    .catch((error)=>{
        console.log("there is error")
    })
 }
 
 
 




const SearchContext = React.createContext();
export default SearchContext