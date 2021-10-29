import React from "react";
import "./sideBar.css";

import { getGatos ,addFiltro,addFilxInte} from '../../actions/actions'
import { connect } from 'react-redux'
import Xinteligencia from "../filtros/xinteligencia";
import XCantidad from "../filtros/cantidad";
function SideBar ({addFilxInte,palabra,getGatos,addFiltro}){
    
    function handleClick(e){
        e.preventDefault();
        addFiltro(!palabra)
        getGatos();
        addFilxInte("0");
       // console.log(dogies)
    }
    return(
        <div className="buscador text-light ">
            <div className="sideBar">
           
                <ul className="responsi" >
                 
                    <button className="todos" onClick={e=> {handleClick(e)}}>
                        All Cats
                    </button>
                  
                    <li className="todos" > <span  className="perderrr" >intelligence level:</span>
                        <Xinteligencia/>
                    </li>

                    <li className="todos" ><span className="perderrr" >card amount:</span>
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
export default connect(mapStateToProps,{addFilxInte,getGatos,addFiltro })(SideBar)