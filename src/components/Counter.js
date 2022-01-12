import { useEffect, useState } from "react";

const MyCounter =()=>{
    const [count,setCount] =useState(0);
    const Updater =()=>{
        let x= 0;
        const interval = setInterval(()=>{
            if(x<20){
                x= x+1;
            }
            else{
                x=0
                clearInterval(interval);
            }
            setCount(x);
        },1000)
    }
    useEffect(()=>{
        Updater();
    },[])
    return(
        <>
            <h1>Counts: {count} </h1>
        </>
    )
}
export default MyCounter;