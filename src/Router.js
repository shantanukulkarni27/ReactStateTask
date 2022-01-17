import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profile,MyModal } from "./page/index"
import { ErrorPage } from "./components/index";
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal" element={<MyModal/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;