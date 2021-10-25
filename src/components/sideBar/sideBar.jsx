import React from "react";
import "./sideBar.css";

import { getGatos ,addFiltro} from '../../actions/actions'
import { connect } from 'react-redux'
import Xinteligencia from "../filtros/xinteligencia";
import XCantidad from "../filtros/cantidad";
function SideBar ({palabra,getGatos,addFiltro}){
    
    function handleClick(e){
        e.preventDefault();
        addFiltro(!palabra)
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
                        All Cats
                    </button>
                    <li> </li>
                    <li className="todos" >intelligence level:
                        <Xinteligencia/>
                    </li>

                    <li className="todos" >card amount:
                        <XCantidad/>
                    </li>
                </ul>
            </div>
        </div>
    );

}

const mapStateToProps = state =>{
    return {
        palabra:state.palabra
    }
  }
export default connect(mapStateToProps,{getGatos,addFiltro })(SideBar)