//atributo es el atributo del objeto

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

