const Profile = (props) =>{
    console.log("props",props)
    return(
        <>
        <h1>hello {props.data.name}</h1>
        <h1>email is {props.data.email} </h1>

        </>
    )
}

export default Profile;