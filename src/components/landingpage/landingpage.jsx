import {NavLink } from "react-router-dom";
import { useEffect } from "react";
export default function Landing(props){
    useEffect( ()=> {
        props.activarNav();
    },[])
    return (    
       <div >
              <h1>Landin Page</h1>
              <NavLink exact to="/home"  onClick ={()=>props.activarNav()}>Home</NavLink>
              <br />
              <NavLink exact to="/about"  onClick ={()=>props.activarNav()}>About</NavLink>
       </div>
)

}