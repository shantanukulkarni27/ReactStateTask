  export const Validation = (values)=>{
    // console.log("in validation")
    let errors={};
    // console.log("vals email",values.email)
    let emailPattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)

    if(!values.firstName){
        // console.log("in first name",values.firstName)
        errors.firstName="Full name is required"
    }
    if(!values.lastName){
        errors.lastName="last name requred"
    }
    if(!values.email){
      errors.email="Email is required";
    }else if(!emailPattern){
      errors.email="Email is invalid"
  }
  if(!values.password){
    errors.password="password requires"
  }else if(values.password.length<5){
    errors.password="Password must be more that five "
  }
  return errors
  }