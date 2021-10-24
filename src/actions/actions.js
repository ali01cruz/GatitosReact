
const axios = require("axios");

 export const addFiltro = palabra => {
  return {
    type: "AGREGAR_FILTRO",
    payload:palabra
  }
};  
export const getGatos = () => {
  return async function (dispatch) {
    const { data } = await axios.get("https://api.thecatapi.com/v1/breeds");
    dispatch({
      type: "CARGAR",
      payload: data,
    });
  };
};



export const addDatoFiltro = datofitro => {
  return {
    type: "DATOS_FILTRAR",
    payload:datofitro 
  }
}; 
export const filterBy = (condition, attribute1) => {
  return {
    type: "FILTER",
    payload: {
      condition,
      attribute1,
    },
  };
};

export const BuscarGato = (name) => {
  return async function (dispatch) {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${name}`);
    dispatch({
      type: "BUSCAR_GATO",
      payload: data,
    });
  };
};

export const sort = (type) => {
  return {
    type:"SORT",
    payload:type 
  };
};

export const Ordenar= (valor) => {
  return {
    type: "ORDENAR",
    payload: {
      valor,
    },
  };
};

export const cargarcantidad= (N) => {
  return {
    type: "CargarCantidad",
    payload: {
      N,
    },
  };
};
