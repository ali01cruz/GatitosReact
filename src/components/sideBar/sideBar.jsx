import React from "react";
import "./sideBar.css";


import Xinteligencia from "../filtros/xinteligencia";
import Xorden from "../filtros/orden";
function SideBar (){
    

    return(
        <div className="buscador text-light">
            <div className="sideBar">
           
                <ul>
                    <li>
                    <br />
                  
                    </li>
                   
                    <li> </li>
                    <li>Nivel de Inteligencia:
                        <Xinteligencia/>
                    </li>
                </ul>
            </div>
        </div>
    );

}
export default SideBar