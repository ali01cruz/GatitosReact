import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import icono from '../../img/gato.png';
import icono1 from '../../img/contacto2.png';
import ModalFooter from 'react-bootstrap/ModalFooter'


export default function Footer(){

    return(
        <div >
            <footer className="main-footer text-white py-2 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to='/Home' className="col-12 col-md-3 d-flex aling-center justify-content-center">
                        <img src={icono} alt="Gatos" style={{width:'50px', height:'50px'}} />
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Cruz Ali Emanuel</li>
                            <li >
                                <a href="https://www.facebook.com/aliemanuelcruz" target="_blank" className="mx-2"><i className="bi bi-facebook"></i></a>
                                <a href="https://www.linkedin.com/in/alicruzoficial/" target="_blank" className="mx-2"><i class="bi bi-linkedin"></i></a>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Silvana Fuentes</li>
                            <li >
                                <a href="https://www.facebook.com/silvana.f.14/" target="_blank" className="mx-2"><i className="bi bi-facebook"></i></a>
                                <a href="https://www.linkedin.com/in/silvana-fuentes-4418477a/" target="_blank" className="mx-2"><i class="bi bi-linkedin"></i></a>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <Link to='/form' className="contacto">
                                    Contact <br/>
                                    <img src={icono1} alt="Gatos" style={{width:'35px', height:'35px'}} />
                            </Link>
                        </ul>
                        
                    </nav>
                </div>
            </footer>
        </div>
    )

}