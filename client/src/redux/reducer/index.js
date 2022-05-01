import {
  FILTRO,
  INGLES,
  LOG_IN,
  POST_PROJECTS,
  GET_PROJECTS_BY_TYPE
} from "../actions/index";

const inicialState = {
  idioma: "español",
  filtro: [],
  login: false,
  projects: false,
  tipo: []
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_BY_TYPE:
      return {
        ...state,
        tipo: action.payload
      }
    case POST_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
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
          login: action.payload
        };

    default:
      return state;

  }
};

export default rootReducer;
