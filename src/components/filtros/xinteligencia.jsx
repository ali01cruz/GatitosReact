import React from "react";
import { filterBy ,addFiltro} from "../../actions/actions";
import { connect } from "react-redux";
function Xinteligencia ({ filterBy ,addFiltro}){
    
    const Inteligence =[1,2,3,4,5]
    function modificarChar(e){
        //props.setValor(e)
        addFiltro(e)
        filterBy(e,"adaptability")
    }

    return(
            <div className="inte">
                <select  onChange={(event) => modificarChar(event.target.value)} >
                    <option selected>Inteligence</option>
                        {Inteligence.map ( (raz) => (
                            <option value={raz} key={raz}>
                                {raz}
                            </option>
                        ))}
                </select>
            </div>
       
    );

}

export default connect(null,{filterBy,addFiltro})(Xinteligencia)