import React, {Fragment} from 'react'
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const HookForm = () => {
    const styleform={
        maxWidth: "500px",
        margin: 'auto',
        backgroundColor:'var(--color1)',
        padding:'1%'
    };

    return (
        <div className="Hookform" style ={styleform}>
            <Form>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div >
    );
}
 
export default HookForm;