import React, { useEffect, useState } from "react";
import './cats.css';
import CatCard from "./catCard";
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css'
import Loading from "../../img/loading.gif";
import found from "../../img/found.gif";
function Cats ({datosfiltrados}){
   //cat es el listado de las cosas filtradas
   const [band,setband]=useState(true)
   const [loading, setLoading] = useState(false);
   useEffect(() => {
    loadPage();
    
  },[]);
   useEffect(() => {
    
    // Actualiza el título del documento usando la API del navegador
    setband(true)
    
     
    
  },[datosfiltrados]);
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
   const texto = (
    <div >
      <img className="loadinggatito" src={found} alt="loading" style={{maxWidth:"500px"}} />
    </div>); 

   useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, [loading]);

  const loadPage = () => {
    setLoading(!loading);
    setTimeout(()=>{
      setLoading(!loading); }, 2500)
  }

  if (loading) return (
    <div >
      <img className="loadinggatito" src={Loading} alt="loading" />
    </div>);

    return (
        <>
          {datosfiltrados.length===0 && texto}
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