import React from 'react'
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
const HookForm = () => {
    const {register ,errors, handleSubmit}= useForm();

    const styleform={
        maxWidth: "500px",
        margin: 'auto',
        backgroundColor:'var(--color1)',
        padding:'1%'
    };
    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <div className="Hookform" style ={styleform}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div >
    );
}
 
export default HookForm;