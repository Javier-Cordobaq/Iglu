import {
  FILTRO,
  INGLES,
  SET_MENSAJE,
} from "../actions/index";

const inicialState = {
  idioma: "español",
  filtro: []
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

    default:
      return state;

  }
};

export default rootReducer;
