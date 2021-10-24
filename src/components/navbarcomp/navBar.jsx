import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container" 
import Nav from "react-bootstrap/Nav" 
import { FormControl,Form ,Button , NavDropdown} from "react-bootstrap"
import icono from '../../img/gato.png';
import './navbar.css'


export default function NavBar(){


    return (    
       
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
            <NavLink exact to="/" activeClassName="active"> 
                <Navbar.Brand >
                        <img src={icono} alt="Gatos" style={{width:'60px', border:'rgb(102, 43, 158) 1px solid', borderRadius:'20px',filter:'brightness(130%)'}} />
                </Navbar.Brand>
            </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          
          <Nav>
            <NavLink exact to="/home" activeClassName="active">
              <Button className="busc" >Home</Button>{' '}
            </NavLink>
            <NavLink exact to="/about" >
              <Button className="busc" >About</Button>{' '}
            </NavLink>
            <NavLink exact to="/form" >
              <Button className="busc" >Contact</Button>{' '}
            </NavLink>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

}
