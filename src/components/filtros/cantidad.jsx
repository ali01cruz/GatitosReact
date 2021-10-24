import React from "react";
import { cargarcantidad } from "../../actions/actions";
import { connect } from "react-redux";
function XCantidad ({ cargarcantidad }){
    
    const Inteligence =[5,20,30,45,66]
    function modificarChar(e){
        //props.setValor(e)
        cargarcantidad(e)
    }

    return(
            <div className="inte">
                <select style={{ backgroundColor:"rgb(102, 43, 158)"}} onChange={(event) => modificarChar(event.target.value)} >
                    <option selected>cantidad</option>
                        {Inteligence.map ( (raz) => (
                            <option value={raz} key={raz}>
                                {raz}
                            </option>
                        ))}
                </select>
            </div>
       
    );

}

export default connect(null,{cargarcantidad})(XCantidad)