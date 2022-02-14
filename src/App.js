import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";
import Router from "./Router";
import ThemeContext,{themes} from "./contexts/themeContext";
import { createContext } from "react";



// import SearchContext from "./contexts/SearchContext";

export const SearchContext= createContext()

function App() {
  const [theme,setTheme]=useState(themes.light);
  const [data,setData]=useState("");
  // const dataVal = {Data,setData}
  // console.log("my app data",Data)
  const value= {theme,setTheme}

   useEffect(()=>{

    axios.get("http://localhost:3001/users")
    .then((response)=>{
   
          console.log("response is",response.data)
        // data.ndata = response;
        setData(response.data)

    })
    .catch((error)=>{
        console.log("there is error")
    })
   },[]);
   console.log("data is",data)


  return (

         <SearchContext.Provider value={data} >
      <ThemeContext.Provider value={value} >
      <div className="App">
          <Router/>
          </div>
      </ThemeContext.Provider>
      </SearchContext.Provider>

  );
}

export default App;
