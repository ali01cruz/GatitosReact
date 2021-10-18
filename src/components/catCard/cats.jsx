import React from "react";
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { useEffect, useState } from "react";
import CatCard from "./catCard";

export default function Cats (props){

    const[url, setImage]= useState('');
    const[cat, setCat]=useState([]);
    
    useEffect(()=>{
        Axios.get('https://api.thecatapi.com/v1/breeds')
        .then((info)=>{
            console.log(info.data)
            setCat(info.data)
        
        })
        .catch((err)=>{
            console.log('errores', err)
        })
    }, [])

   
    return (
        <div name='name' className="cats">
            <h2>Gatos</h2>
          
            {cat.map((element)=>(
               
              <div className="lista">  <CatCard
                
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
