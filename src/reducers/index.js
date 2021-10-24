import { filter } from "../controllers/filtracion";
import { ordenx } from "../controllers/ordenacontro";
import { CargarCantidad } from "../controllers/cantidad";
const initialState = {
  palabra: [],
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
          datosfiltrados:action.payload,

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
    
    case "ORDENAR":
      return {
        ...state,
        datosfiltrados: ordenx(
          state.datosfiltrados,
          action.payload.valor
        ),
      };
      case "CargarCantidad":
      return {
        ...state,
        datosfiltrados: CargarCantidad(
          state.datos,
          action.payload.N
        ),
      };
      
      
    default:
      return state;
  }
};

export default rootReducer;
