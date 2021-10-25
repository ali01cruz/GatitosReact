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
                    <h1>Gatehook</h1>
                    <p class=" text-light lead">If you are thinking of adopting a cat but have doubts about its behavior or even if you already share your life with a feline but want to know more about the most common behaviors in this species, this website is for you.</p>
                    <p class="text-light lead">
                        <NavLink  to="/home">
                      <a href="#"  class="btn btn-lg btn-secondary fw-bold border-white bg-white">Enter</a>      
                        </NavLink>
                    
                    </p>
                </main>

               
            </div>
       </body>
)

}