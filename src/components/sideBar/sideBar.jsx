import React from "react";
import "./sideBar.css";
import Axios from 'axios';
import { useEffect, useState } from "react";

export default function SideBar (){
    
  
    const[raza, setRaza]=useState([]);
    useEffect(()=>{
        Axios.get('https://api.thecatapi.com/v1/categories')
        .then((info)=>{
            setRaza(info.data)
        })
        .catch((err)=>{
            console.log('errores', err)
        })
    }, [])

    return(
        <div className="buscador text-light">
            <div className="sideBar">
                <h3>SideBar</h3>
                <ul>
                    <li>orden</li>
                    <li> </li>
                    <li>selector x raza</li>
                    <li>
                        <select>
                        <option selected>Open this select</option>
                            {raza.map ( (raz) => (
                                <option value={raz.id} key={raz.id}>
                                {raz.name }
                                </option>
                            ))}
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    );

}