import React, { useState } from "react";
import './cats.css';
import CatCard from "./catCard";
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'
function Cats ({datosfiltrados}){
   //cat es el listado de las cosas filtradas
   const [band,setband]=useState(true)
   
   function modificarChar(estado){
    if (estado){
      datosfiltrados= datosfiltrados.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (!estado){
      datosfiltrados= datosfiltrados.sort((a, b) => b.name.localeCompare(a.name))
    }
    
    setband(estado) 
    console.log(datosfiltrados);
   }
   
    return (
        <>
          <div className="btn-flotante ">
            <button className="buscwwww"  onClick={() => modificarChar(false)}> DESC</button>
            <button className="buscwwww"  onClick={() => modificarChar(true)}> ASC</button>
          </div>
          {band?(<div className="lista">
                {datosfiltrados.map((element)=>(
                  
                  <div key="element.id" >  
                            <CatCard
                            id={element.id}
                            name={element.name}
                            desc={element.description}
                            url={element.reference_image_id}
                            /> 
                    </div>
                )
              )}
          </div>):(
            <div className="lista">
                {datosfiltrados.map((element)=>(
                  
                  <div key="element.id" >  
                            <CatCard
                            id={element.id}
                            name={element.name}
                            desc={element.description}
                            url={element.reference_image_id}
                            /> 
                    </div>
                )
              )}
          </div>

          )}
        </>
    );


}
const mapStateToProps = state =>{
  return {
    datosfiltrados:state.datosfiltrados
  }
}

export default connect(mapStateToProps)(Cats)