import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserDetail, Profile, MyModal, Dashboard, Login, Register, Welcome } from "./page"
import { ErrorPage } from "./components";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import AboutUsPage from "./page/aboutUsPage";
const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/users" element={<UserDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal" element={<MyModal />} />
                    <Route path="aboutUs" element={<AboutUsPage/>}/>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/welcome" element={<PrivateRoute><Welcome /></PrivateRoute>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;