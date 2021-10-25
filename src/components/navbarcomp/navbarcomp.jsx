import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container" 
import Nav from "react-bootstrap/Nav" 
import { FormControl,Form ,Button } from "react-bootstrap"
import { useState } from "react";
import { BuscarGato } from "../../actions/actions";
import { connect } from "react-redux";
import icono from '../../img/gato.png';
import './navbar.css'

function NavbarComp({ BuscarGato }){
    const [valorBuscar,setValorBuscar] = useState('');
    //siempre crear un set por que sino no funciona

    function onSubmitForm(){    
        BuscarGato(valorBuscar)
        setValorBuscar('')
    }

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
                    <NavLink exact to="/home" activeClassName="active" >
                        <Button className="busc" >Home</Button>{' '}
                    </NavLink>
                   
                    <NavLink exact to="/about" activeClassName="active" >
                        <Button className="busc">About</Button>{' '}
                    </NavLink>
                  
                    <Form className="d-flex" style={{background: 'grey', padding:'3px', marginLeft:'10px' }}>
                        <FormControl
                        type="search"
                        placeholder="Enter your search..."
                        className="me-2"
                        aria-label="Search"
                        value={valorBuscar} 
                        onChange={(e)=>setValorBuscar(e.target.value)}
                        />
                        <Button className="busc" variant="outline-success" onClick={()=>onSubmitForm()}>Search</Button>
                    </Form>
                </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
)

}

export default connect(null,{BuscarGato})(NavbarComp)