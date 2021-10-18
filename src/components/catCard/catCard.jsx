import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import './cats.css';
import { Card, Button} from 'react-bootstrap';

export default function CatCard (props){
        const style = {
            margin: '0 auto',
            background: 'var(--card-color)',
            width: '400px',
            padding: '20px',                    
          };
         
        return (
            <div  >
               <div> 
                    <NavLink to={`/home/cats/${props.name}/${props.url}`}>
                        <Card style={{ width: '18rem', height:'25rem', margin:'10px', paddingTop:'8px' }}>
                          { <Card.Img style={{  height:'20rem',}} 
                            variant="top" src={props.imagen} alt='Imagen no disponible'/> }
                            
                            <Card.Body>
                                <Button variant="primary">{props.name}</Button>
                            </Card.Body>
                        </Card>             
                       
                    </NavLink>
                </div> 
            </div>
        );
    

}