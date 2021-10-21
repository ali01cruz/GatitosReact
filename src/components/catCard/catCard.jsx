import React from "react";
import { NavLink } from "react-router-dom";
import './cats.css';
import { Card, Button} from 'react-bootstrap';
import { useState ,useEffect} from "react";
import axios from "axios";
export default function CatCard (props){
        //imagen por defecto
        const imgpordefect = "https://svgsilh.com/png-1024/3245088.png" 
        const[img, setImg]=useState([]);
        useEffect(()=>{
            axios.get(`https://api.thecatapi.com/v1/images/${props.url}`) 
          /*  Axios.get(`https://api.thecatapi.com/v1/breeds`)*/
            .then((info)=>{
                setImg(info.data)
            
            })
            .catch((err)=>{
                console.log('errores', err)
            })
        })
        
        return (
            <div  className="card">
               <div> 
                    <NavLink to={`/home/cats/${props.name}/${props.url}`}>
                        <Card style={{ width: '18rem', height:'25rem', margin:'10px', paddingTop:'8px' }}>
                          { <Card.Img style={{  height:'20rem',}} 
                            
                            variant="top" src={img.url?img.url:imgpordefect} alt='Imagen no disponible'/> }
                            
                            <Card.Body>
                                <Button className="nombre" variant="primary">{props.name}</Button>
                            </Card.Body>
                        </Card>             
                       
                    </NavLink>
                </div> 
            </div>
        );
    

}