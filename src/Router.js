import { BrowserRouter as Routers , Route, Routes } from "react-router-dom";
import { UserDetail, Profile,MyModal,Dashboard,Login,Register,Welcome } from "./page/index"
import { ErrorPage } from "./components/index";
import PrivateRoute from "./routes/privateRoute";
import { Fragment } from "react";
const Router = () => {
    return (
        <>
            <Router>
                <Fragment>
       
            <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/users" element={<UserDetail />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal" element={<MyModal/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    {/* <Route path="/welcome" element={<PrivateRoute/>} /> */}
                    {/* <PrivateRoute path="/welcome" element={<Welcome/>} ></PrivateRoute> */}
                    {/* <Route exact path='/' element={<PrivateRoute/>}>
                  <Route exact path='/' element={<Dashboard/>}/>
                </Route> */}
                </Routes>
                </Fragment>
            </Router>
        </>
    )
}
export default Router;