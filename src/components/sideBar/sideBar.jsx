import React from "react";
import "./sideBar.css";

import Xinteligencia from "../filtros/xinteligencia";

export default function SideBar (){
    

    return(
        <div className="buscador text-light">
            <div className="sideBar">
                <h3>SideBar</h3>
                <ul>
                    <li>orden</li>
                    <li> </li>
                    <li>selector x raza</li>
                    <li>
                        <Xinteligencia/>
                    </li>
                </ul>
            </div>
        </div>
    );

}