import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Form ,Button} from 'react-bootstrap'
import {NavLink } from "react-router-dom";
import './dd.css';
import '../footer/footer.css';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export function validacion(input){

    let errors ={}
  
    
    if (!input.email){
        errors.email= "el email es requerido"
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email= "enter a valid email address"
    }

    if (!input.nombre){
        errors.nombre= "the name is require"
    }else if(input.nombre.length<3){
        errors.nombre= "enter more than 2 characters"
    }
    
    if (!input.mensaje){
        errors.mensaje= "the message is required"
    }else if(input.mensaje.length>256 ){
        errors.mensaje= "the message must contain a maximum of 256 characters"
    }

    return errors;
}
const HookForm = () => {
    const history = useHistory();
    const styleform={
        maxWidth: "500px",
        margin: 'auto',
        paddingTop: '1%',
        //backgroundColor:'var(--color1)',
        padding:'1%',
        borderRadius:'5px'
    };
    const [stateForm ,setStateForm] = useState({
        email:"",
        nombre:"",
        mensaje:"",
    })

    ///enviando formulario
    function onSubmitForm(e){
        //este prevente defaul es para que no se envien directamente por el metodo get 
        //cuando se aprete el boton
        e.preventDefault();
        Swal.fire({
            icon: "success",
            title: "Message sent",
            showConfirmButton: false,
            timer: 1000,
          });
        ///limpiando formulario
        setStateForm({
            email:"",
            nombre:"",
            mensaje:"",
        })
        history.push("/home");
    }
    const[error,setError] = useState({
        email: "the email is required",
        nombre: "the name is required",
        mensaje: "the message is required",
    })
    

    function onHandleChange(e){
        setStateForm({
            ...stateForm,
            [e.target.name]:e.target.value,
            //otra forma de pasa un parametro 
        }) 

        setError(validacion(
            {
                ...stateForm,
                [e.target.name]:e.target.value,
            })
            )
    }

    return (
        <div class="my-2">
        <div class="container mt-1">
            <div  className="Hookform formulario" style ={styleform}>

                            <Form className="text-white my-4 campo" onSubmit={(e)=>onSubmitForm(e)}>
                                <h4 class="mb-5">Contact:</h4>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control 
                                        value={stateForm.nombre} 
                                        type="text" 
                                        placeholder="Name" 
                                        name="nombre"
                                        onChange={(e)=>onHandleChange(e)}
                                        />
                                    {error.nombre && <p> {error.nombre} </p>}
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control 
                                                value={stateForm.email}
                                                type="email"
                                                name="email"
                                                placeholder="Email" 
                                                onChange={(e)=>onHandleChange(e)}
                                                />
                                    {error.email && <p> {error.email} </p>}
                                </Form.Group>
                                    
                                                
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control 
                                        value={stateForm.mensaje} 
                                        as="textarea" 
                                        rows={3} 
                                        placeholder="Message"
                                        name="mensaje"
                                        onChange={(e)=>onHandleChange(e)}
                                        />
                                    {error.mensaje && <p> {error.mensaje} </p>}
                                </Form.Group>
                                    
                                <Button 
                                    variant="primary" 
                                    type="submit"
                                    style={{ color: "white" }}
                                    disabled={
                                        error.email || error.nombre || error.mensaje ? true : false
                                    }
                                    >
                                    Send
                                </Button>
                                <NavLink style={{marginLeft:'5px'}} variant="success" exact to="/home" ><div className="btn btn-success">Cancel</div></NavLink>

                            </Form>
                
            </div >
        </div></div>
    );
}
 
export default HookForm;