import React from "react";
import '../App.css';



const Header =() =>
{
    return(
        <div  style={{height:"100px", width:"100%", backgroundColor:"Blue", display:"flex", justifyContent:"space-between", alignContent:"center"}}>
            <div>Logo</div>
            <div style={{width:"300px", display:"flex",justifyContent:"space-between" ,alignItems:"center"}}>
                <a href="#" style={{color:"white"}}>Home</a>
                <a href="#" style={{color:"white"}}>About</a>
                <a href="#" style={{color:"white"}}>Contact</a>i
            </div>
        </div>
    )
}

export default Header