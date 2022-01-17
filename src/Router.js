import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile,MyModal } from "./page/index"
import { Counter } from "./components/index";
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal" element={<MyModal/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;