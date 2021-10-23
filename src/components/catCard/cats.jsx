import React, { useEffect, useState } from "react";
import './cats.css';
import CatCard from "./catCard";
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'
import { getGatos,CargarCien } from '../../actions/actions'

function Cats ({datosfiltrados,getGatos,CargarCien}){
   //cat es el listado de las cosas filtradas
   
   
   const [band,setband]=useState(true)
   const [bancargar,setbancargar] = useState(true);
   function cargar101(es){
      if (es){
        CargarCien();
        setbancargar(false)
      }
      if(!es){
        getGatos();
        setbancargar(true)
      }
   }


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
            <button className="buscwwww"  onClick={() => modificarChar(false)}> desendente</button>
            <button className="buscwwww"  onClick={() => modificarChar(true)}> asendente</button>
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
              {bancargar?<button className="buscwwww" onClick={() => cargar101(true)} > MAS</button>:<button className="buscwwww" onClick={() => cargar101(false)} > MENOS</button>}
              
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
    datosfiltrados:state.datosfiltrados,
   
  }
}

export default connect(mapStateToProps,{getGatos,CargarCien})(Cats)