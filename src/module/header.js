import { DashAnchor,DashUl,DashLi } from "../components/styled"

const header = () =>{

    const removeSession=()=>{
        localStorage.removeItem("userToken")
    }
    return(
        <div>
            <DashUl>
                <DashLi><a href="./">Dashboard</a></DashLi>
                <DashLi><a href="/contact" >Contact</a></DashLi>
                <DashLi><a href="/aboutUs">About us</a></DashLi>
                <DashLi><a href="/" onClick={removeSession} >Logout</a></DashLi>
            </DashUl>

        </div>
    )
}

export default header;