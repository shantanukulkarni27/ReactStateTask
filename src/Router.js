import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Login,Profile} from "./page/index"
const Router = () =>{
   return(
       <>
        <BrowserRouter>
    <Routes>
        <Route path="" element={<Login/>}  />
    </Routes>
    <Routes>
        <Route path="/profile" element={<Profile/>}  />
    </Routes>
    </BrowserRouter>
       </>
   )
}

export default Router;