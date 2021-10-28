import React from "react";
import { filterBy ,addFilxInte} from "../../actions/actions";
import { connect } from "react-redux";
function Xinteligencia ({addFilxInte, palabra,filterBy }){
    
    const Inteligence =[3,4,5]
    function modificarChar(e){
        //props.setValor(e)
        addFilxInte(e)
        filterBy(e,"intelligence")
    }
   
    return(
            <>
                {palabra&&
                (
                <div className="inte">
                    <select style={{ backgroundColor:"rgb(102, 43, 158)"}} onChange={(event) => modificarChar(event.target.value)} >
                        <option selected disabled> select in</option>
                            {Inteligence.map ( (raz) => (
                                <option value={raz} key={raz}>
                                    {raz}
                                </option>
                            ))}
                    </select>
                </div>
                ) }
                {!palabra&&
                (
                <div className="inte">
                    <select style={{ backgroundColor:"rgb(102, 43, 158)"}} onChange={(event) => modificarChar(event.target.value)} >
                        <option selected disabled>select in</option>
                            {Inteligence.map ( (raz) => (
                                <option value={raz} key={raz}>
                                    {raz}
                                </option>
                            ))}
                    </select>
                </div>
                ) }
            </>
            
       /* */
    );

}

const mapStateToProps = state =>{
    return {
        palabra:state.palabra,
        
    }
  }
  
export default connect(mapStateToProps,{addFilxInte,filterBy})(Xinteligencia)