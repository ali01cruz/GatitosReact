export const ordenx = (listagatitos,condition) => {

    if (condition === "asendente") {
       
        return listagatitos.sort((a, b) => a.name.localeCompare(b.name))


    }
    return listagatitos.sort((a, b) => b.name.localeCompare(a.name))

 
};
 