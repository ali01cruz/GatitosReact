import React from "react";
import { Ordenar } from "../../actions/actions";

import { connect } from "react-redux";

function Xorden ({ Ordenar}){
    
    const Inteligence =["asendente","desendente"]
    function modificarChar(e){
        //props.setValor(e)
        Ordenar(e)
    }

    return(
            <div className="inte">
                <select  onChange={(event) => modificarChar(event.target.value)} >
                    <option selected>Odenar</option>
                        {Inteligence.map ( (raz) => (
                            <option value={raz} key={raz}>
                                {raz}
                            </option>
                        ))}
                </select>
            </div>
       
    );

}

export default connect(null,{Ordenar})(Xorden )