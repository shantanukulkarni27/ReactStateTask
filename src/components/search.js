import { useEffect, useState } from "react";
import axios from "axios";

const Search =()=>{
    const [searchTerm,setSearchTerm]= useState()
    const [data,setData]=useState([]);
    const getUsers = async() => {
         await axios.get("http://localhost:3001/users").then((response) => {
            console.log("resp is",response)
            setData(response.data);
            console.log("res is ",data)
        });
      };

     
      useEffect(()=>{
          getUsers();
          console.log("data is",data)
      },[searchTerm])
return(
    <>
    <input type="text" placeholder="Search" onChange={(e)=>{
        setSearchTerm(e.target.value)
    }} />

  
    {data.filter((val)=>{
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

    </>
)
}
export default Search