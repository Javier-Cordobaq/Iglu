import {
  FILTRO,
  INGLES,
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
    case INGLES:
      return {
        ...state,
        idioma: action.payload,
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
