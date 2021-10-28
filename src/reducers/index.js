import { filter } from "../controllers/filtracion";
import { ordenx } from "../controllers/ordenacontro";
import { CargarCantidad } from "../controllers/cantidad";
const initialState = {
  palabra:false,
  filtroXespe:0,
  datos: [],
  datosfiltrados:[],
  datosrespaldo:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_FILTRO":
      return {
        ...state,
        palabra:action.payload , 
      };
    case "CARGAR":    
        return {
          ...state,
          datos: action.payload,
          datosfiltrados: CargarCantidad(
            action.payload,
            20
          ),
          datosrespaldo:CargarCantidad(
            action.payload,
            20
          ),

        }
    case "FILTER":
          return {
            ...state,
            datosfiltrados: filter(
              state.datosrespaldo,
              action.payload.condition,
              action.payload.attribute1
            ),
          }
    case "BUSCAR_GATO":
            return {
              ...state,
              datosfiltrados: action.payload,
              datosrespaldo: action.payload,
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

      if ("345".includes(parseInt(state.filtroXespe))){
        return {
          ...state,
          datosfiltrados: filter(CargarCantidad(
            state.datos,
            action.payload.N
          ),parseInt(state.filtroXespe),"intelligence"),
          datosrespaldo: CargarCantidad(
            state.datos,
            action.payload.N
          ),
        };

      }else{

        return {
          ...state,
          datosfiltrados: CargarCantidad(
            state.datos,
            action.payload.N
          ),
          datosrespaldo: CargarCantidad(
            state.datos,
            action.payload.N
          ),
        };
      }

      




      case "addFilxInte":
        return {
          ...state,
            filtroXespe:action.payload,
        };
      
      
    default:
      return state;
  }
};

export default rootReducer;
