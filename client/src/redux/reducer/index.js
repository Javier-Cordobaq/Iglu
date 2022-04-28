import {
  FILTRO,
  INGLES,
  SET_MENSAJE,
  LOG_IN
} from "../actions/index";

const inicialState = {
  idioma: "español",
  filtro: [],
  login: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case FILTRO:
      return {
        ...state,
        filtro: action.payload
      }
    case SET_MENSAJE:
      return {
        ...state,
        mensaje: "",
        login: [],
      };
    case INGLES:
      return {
        ...state,
        idioma: state.idioma === "español" ? "ingles" : "español",
      };
    case LOG_IN:
        return {
          ...state,
          login: action.payload,
        };

    default:
      return state;

  }
};

export default rootReducer;
