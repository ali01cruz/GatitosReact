//atributo es el atributo del objeto

import axios from "axios";


///con dicicion de con que cosa se quiere filtrar
export const filter = (breedList, condition, attribute) => {
    try {
        const resutado=breedList.filter(
            //primero pregunto si existe el atributo
          (breed) => breed[attribute].includes(condition)
        )

        return resutado;
    } catch (error) {
        return null
    }
    
};

export const buscarGato= (name)=>{
    axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${name}`) 
    /*  Axios.get(`https://api.thecatapi.com/v1/breeds`)*/
      .then((info)=>{
          return (info); 
      })
      .catch((err)=>{
          console.log('errores', err)
          return []
      })
}