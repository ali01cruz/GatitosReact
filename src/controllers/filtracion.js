//atributo es el atributo del objeto

///con dicicion de con que cosa se quiere filtrar
export const filter = (listagatitos, condition, attribute) => {
    try {
        const resutado=listagatitos.filter(
            //primero pregunto si existe el atributo
          (gatito) => gatito[attribute] && gatito[attribute] == condition
        )

        return resutado;
    } catch (error) {
        return []
    }
    
};
 


/* export const filter = (breedList, condition, attribute) => {
    return breedList.filter(
      (breed) => breed[attribute] && breed[attribute] == condition
    );
  }; */