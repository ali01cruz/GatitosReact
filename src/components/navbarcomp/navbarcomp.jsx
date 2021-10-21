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
        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
            <Container class="container mx-5">
                <NavLink exact to="/" activeClassName="active"> 
                    <Navbar.Brand >
                        <img src={icono} alt="Gatos" style={{width:'60px', border:'#7A2B95 1px solid', borderRadius:'20px'}} />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" class=" d-flex justify-content-right">
                    <Nav class="mx-1">
                        <NavLink exact to="/home" activeClassName="active" >
                            <Button className="busc" >Home</Button>{' '}
                        </NavLink>
                    </Nav>
                    <Nav class="mx-5">
                        <NavLink exact to="/about" activeClassName="active" >
                            <Button className="busc">About</Button>{' '}
                        </NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Ingrese su búsqueda"
                        className="me-2"
                        aria-label="Search"
                        value={valorBuscar} 
                        onChange={(e)=>setValorBuscar(e.target.value)}
                        />
                        <Button className="busc" variant="outline-success" onClick={()=>onSubmitForm()}>Buscar</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>

        </Navbar>
)

}

export default connect(null,{BuscarGato})(NavbarComp)