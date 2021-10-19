import {NavLink } from "react-router-dom";
import { useEffect } from "react";
import './landingpage.css';
import icono from '../../img/gato.png';
import { Card, Button} from 'react-bootstrap';

export default function Landing(){
   
    return (    
       <body className="fondo">
             
            
            <div class="cover-container d-flex w-100 h-100 p-5 mx-auto flex-column">
                <header class="mb-auto">
                    <div>
                    <h3 class="float-md-start mb-0" className="icono"><img src={icono} alt="Gatos" style={{width:'60px'}} /></h3>
                    <nav class="nav nav-masthead justify-content-center float-md-end">
                   
                       
                    
                      <div className="menu">
                      <NavLink exact to="/home"  >  <Button >Home</Button>{' '}</NavLink>
                      <NavLink to="/about"  > <Button >About</Button>{' '}</NavLink>
                       
                       
                      </div>
                    </nav>
                    </div>
                </header>

                <main class="px-3 text-light" className="opacidad">
                    <h1>Landing Page</h1>
                    <p class=" text-light lead">Si estás pensando en adoptar un gato pero tienes dudas sobre su comportamiento o incluso si ya compartes tu vida con un felino pero quieres saber más sobre los comportamientos más comunes en esta especie, esta página web es para ti.</p>
                    <p class="text-light lead">
                        <NavLink  to="/home">
                      <a href="#"  class="btn btn-lg btn-secondary fw-bold border-white bg-white">Ingresar</a>      
                        </NavLink>
                    
                    </p>
                </main>

               
            </div>
       </body>
)

}