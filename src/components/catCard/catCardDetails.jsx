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
        <div >
                          
              {cat.map((ele)=>(
               
               <div className='container' key ={ele.id}>  


                <Card className='catCard_2' >
                    <Card.Header as="h5">Origin: <b>{ele.origin}</b></Card.Header>
                    <Card.Body className="texto">
                        <Card.Title> <b>{ele.name}</b></Card.Title>
                        <Card.Img className="imagen" variant="top" src={img.url} />
                        <Card.Text className="contenido">
                            <p>Temperament: <b>{ele.temperament}</b></p>
                            <p>Description: {ele.description}</p> 
                            <p>Adaptability:<b> {ele.adaptability}</b></p>
                            <p>Affection_Level: <b>{ele.affection_level}</b></p>
                            <p>Energy_level: <b>{ele.energy_level}</b></p>
                            <p>Intelligence: <b>{ele.intelligence}</b></p>
                            <p>More information in:</p>
                            <Card.Link  className="link" href={ele.cfa_url} target="_blank">The Cat Fanciers’ Association, Inc.</Card.Link>
                            <Card.Link className="link" href={ele.vetstreet_url} target="_blank"> Vetstreet</Card.Link>
                            <Card.Link className="link" href={ele.wikipedia_url} target="_blank">Wikipedia</Card.Link>

                        </Card.Text>
                        <NavLink to={`/home`}>
                            <Button className="volver" variant="primary">Back to</Button>
                        </NavLink>
                    </Card.Body>
                </Card>

                </div>
                  
             ))}

        </div>
        )

}