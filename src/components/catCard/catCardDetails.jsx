import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Axios from 'axios';
import { Card, Button} from 'react-bootstrap';
import './cats.css';
import { NavLink } from "react-router-dom";

export default function CatCardDetails(){
     
    const {name, url}=useParams()
    const[cat, setCat]=useState([]);
    const[img, setImg]=useState([]);
    
    useEffect(()=>{
        Axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${name}`) 

      /*  Axios.get(`https://api.thecatapi.com/v1/breeds`)*/
        .then((info)=>{
            setCat(info.data)
        })
        .catch((err)=>{
            console.log('errores', err)
        })
    }, [])

    useEffect(()=>{
        Axios.get(`https://api.thecatapi.com/v1/images/${url}`) 
      /*  Axios.get(`https://api.thecatapi.com/v1/breeds`)*/
        .then((info)=>{
            setImg(info.data)
        
        })
        .catch((err)=>{
            console.log('errores', err)
        })
    }, [])

/*     const elemento = cat.find((masc)=> masc.name == {idp}); */
  console.log(`https://api.thecatapi.com/v1/images/${url}`)

    return(
        <div className=''>
                          
              {cat.map((ele)=>(
               
               <div key ={ele.id}>  


                <Card className='catCard' >
                    <Card.Header as="h5">Origen: <b>{ele.origin}</b></Card.Header>
                    <Card.Body>
                        <Card.Title> <b>{ele.name}</b></Card.Title>
                        <Card.Img variant="top" src={img.url}  style={{ width: '20rem',display:'block',margin:'auto'}}/>
                        <Card.Text>
                            <p>Temperamento: <b>{ele.temperament}</b></p>
                            <p>Descripción: {ele.description}</p> 
                            <p>Adaptabilidad:<b> {ele.adaptability}</b></p>
                            <p>Nivel de Afecto: <b>{ele.affection_level}</b></p>
                            <p>Nivel de Energia: <b>{ele.energy_level}</b></p>
                            <p>Mas información en:</p>
                            <Card.Link href={ele.cfa_url} target="_blank">The Cat Fanciers’ Association, Inc.</Card.Link>
                            <Card.Link href={ele.vetstreet_url} target="_blank"> Vetstreet</Card.Link>
                            <Card.Link href={ele.wikipedia_url} target="_blank">Wikipedia</Card.Link>
                        </Card.Text>
                        <NavLink to={`/home`}>
                            <Button variant="primary">Volver</Button>
                        </NavLink>
                    </Card.Body>
                </Card>

                </div>
                  
             ))}

        </div>
        )

}