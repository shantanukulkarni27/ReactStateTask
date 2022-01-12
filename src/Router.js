import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile } from "./page/index"
import { Counter } from "./components/index";
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                   
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;