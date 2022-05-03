import {
  FILTRO,
  INGLES,
  LOG_IN,
  POST_PROJECTS,
  GET_PROJECTS_BY_TYPE,
  GET_JOBS,
  GET_ALL_PROJECTS,
  GET_PROJECTS_BY_ID,
  GET_CLIENT,
  RESET
} from "../actions/index";

const inicialState = {
  idioma: "español",
  login: false,
  projects: false,
  allProjects: [],
  jobs: [],
  client: [],
  tipo: [],
  detail: []
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_CLIENT:
      return {
        ...state,
        client: action.payload
      }
    case RESET:
      return {
        ...state,
        detail: [],
      };
    case GET_PROJECTS_BY_ID:
      return {
        ...state,
        detail: action.payload
      }
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload
      }
    case GET_ALL_PROJECTS:
      return {
        ...state,
        allProjects: action.payload
      }
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
