import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container" 
import Nav from "react-bootstrap/Nav" 
import { FormControl,Form ,Button } from "react-bootstrap"
import { useState } from "react";

export default function NavbarComp(){
    const [valorBuscar,setValorBuscar] = useState('');
    //siempre crear un set por que sino no funciona

    function onSubmitForm(){    

        setValorBuscar(valorBuscar)
    }

    return (    
        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
            <Container>
                <NavLink exact to="/" activeClassName="active"> <Navbar.Brand >gato</Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavLink exact to="/home" activeClassName="active" ><div className="boton">Home</div></NavLink>
                    </Nav>
                    <Nav>
                        <NavLink exact to="/about" activeClassName="active" ><div className="boton">About</div></NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={valorBuscar} 
                        onChange={(e)=>setValorBuscar(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={()=>onSubmitForm()}>Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>

        </Navbar>
)

}