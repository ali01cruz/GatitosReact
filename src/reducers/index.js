import { filter } from "../controllers/filtracion";

const initialState = {
  palabra: "",
  datos: [],
  datosfiltrados:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_FILTRO":
      return {
        ...state,
        palabra:state.palabra.concat(action.payload ), 
      };
    case "CARGAR":    
        return {
          ...state,
          datos: action.payload,
          datosfiltrados: action.payload,
        }
    case "FILTER":
          return {
            ...state,
            datosfiltrados: filter(
              state.datos,
              action.payload.condition,
              action.payload.attribute1
            ),
          }
    case "BUSCAR_GATO":
            return {
              ...state,
              datosfiltrados: action.payload,
            };
    default:
      return state;
  }
};

export default rootReducer;
