import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Form ,Button} from 'react-bootstrap'
import {NavLink } from "react-router-dom";
import './dd.css';
import '../footer/footer.css';

export function validacion(input){

    let errors ={}
  
    
    if (!input.email){
        errors.email= "el email es requerido"
    }else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email= "el campo tiene que ser un email "
    }

    if (!input.nombre){
        errors.nombre= "el nombre es requerido"
    }else if(input.nombre.length<3){
        errors.nombre= "el nombre tiene que ser mayor  2 caracteres"
    }
    
    if (!input.mensaje){
        errors.mensaje= "el mensaje es requerido"
    }else if(input.mensaje.length>256 ){
        errors.mensaje= " el mensaje, debe contener como máximo 256 caracteres."
    }

    return errors;
}
const HookForm = () => {

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
        alert(`
               el coreo es : ${stateForm.email}
               el nombre es : ${stateForm.nombre}
               el mensaje es : ${stateForm.mensaje}
        `)
        ///limpiando formulario
        setStateForm({
            email:"",
            nombre:"",
            mensaje:"",
        })
    }
    const[error,setError] = useState({
        email: "el email es requerido",
        nombre: "el nombre es requerido",
        mensaje: "el mensaje es requerido",
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
        <div class="container">
            <div  className="Hookform formulario" style ={styleform}>

                            <Form className="text-white my-4 campo" onSubmit={(e)=>onSubmitForm(e)}>
                                <h4 class="mb-5">Completa el Siguiente registro:</h4>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control 
                                        value={stateForm.nombre} 
                                        type="text" 
                                        placeholder="Nombre" 
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
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control 
                                        value={stateForm.mensaje} 
                                        as="textarea" 
                                        rows={3} 
                                        placeholder="Mensaje"
                                        name="mensaje"
                                        onChange={(e)=>onHandleChange(e)}
                                        />
                                    {error.mensaje && <p> {error.mensaje} </p>}
                                </Form.Group>
                                    
                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                                <NavLink style={{marginLeft:'5px'}} variant="success" exact to="/home" ><div className="btn btn-success">Cancelar</div></NavLink>

                            </Form>
                
            </div >
        </div>
    );
}
 
export default HookForm;