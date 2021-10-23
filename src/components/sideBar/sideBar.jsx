import React from "react";
import "./sideBar.css";

import { getGatos } from '../../actions/actions'
import { connect } from 'react-redux'
import Xinteligencia from "../filtros/xinteligencia";

function SideBar ({getGatos}){
    
    function handleClick(e){
        e.preventDefault();
        getGatos();
       // console.log(dogies)
    }
    return(
        <div className="buscador text-light ">
            <div className="sideBar">
           
                <ul>
                    <li>
                    <br />
                  
                    </li>
                    <button className="todos" onClick={e=> {handleClick(e)}}>
                        All Gatos
                    </button>
                    <li> </li>
                    <li className="todos" >Nivel de Inteligencia:
                        <Xinteligencia/>
                    </li>
                </ul>
            </div>
        </div>
    );

}
export default connect(null,{getGatos })(SideBar)