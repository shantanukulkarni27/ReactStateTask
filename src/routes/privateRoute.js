import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import { Welcome } from "../page";
const PrivateRoute =()=>{
    const isAuth=true;
    const navigator = useNavigate()

    return(
        <>
       {/* <Route>
       <Welcome/>
       </Route> */}
         {/* return( {isAuth ? <Outlet /> : navigator('/login')};) */}
         return <Outlet/>
        {/* <Route render={()=>isAuth?<Welcome/>:navigator('/login')} /> */}
       
       
        {/* {isAuth?<Welcome/>:navigator('/login')}  */}
        </>
    )
}
export default PrivateRoute;