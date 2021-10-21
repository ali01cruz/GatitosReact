import React from "react";
import "./sideBar.css";
import { ButtonGroup ,Button } from "react-bootstrap"

import Xinteligencia from "../filtros/xinteligencia";

export default function SideBar (){
    

    return(
        <div className="buscador text-light">
            <div className="sideBar">
           
                <ul>
                    <li>
                    <br />
                    Orden:
                        <ButtonGroup vertical>
                            <Button>Ascendente</Button>
                            <Button>Descendente</Button>
                        </ButtonGroup>
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