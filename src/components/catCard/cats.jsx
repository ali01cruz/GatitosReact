import React from "react";
import './cats.css';
import CatCard from "./catCard";
import { connect } from "react-redux"
function Cats ({datosfiltrados}){
    

   //cat es el listado de las cosas filtradas
    return (
        <div className="lista">
            
          
            {datosfiltrados.map((element)=>(
               
              <div key="element.id" >  
                        <CatCard
                
                        id={element.id}
                    
                        name={element.name}
                        desc={element.description}
                        imagen={
                            element.image?.url
                        }
                        url={element.image?.id}
                                
                        /> 
                </div>
                 
            ))}
            
        </div>
    );


}
const mapStateToProps = state =>{
  return {
    datosfiltrados:state.datosfiltrados
  }
}

export default connect(mapStateToProps)(Cats)