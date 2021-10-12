import React from "react";
import { Link } from "react-router-dom";
import './footer.css';


export default function Footer(){

    return(
        <div >
            <footer className="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex aling-center justify-content-center">
                                   LOGO
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
                            <Link to='/' className="">
                                    Contacto
                            </Link>
                        </ul>
                        
                    </nav>
                </div>
            </footer>
        </div>
    )

}