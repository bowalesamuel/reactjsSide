import { notification } from "antd";
import * as actionTypes from "../constants";

const initState = {
  loading: false,
  
  species: {
    results: [],
    meta: {},
  },
  films: {
    results: [],
    meta: {},
  },
  vehicles: {
    results: [],
    meta: {},
  },
  people: {
    results: [],
    meta: {},
  },
  starships: {
    results: [],
    meta: {},
  },
};
const key = actionTypes.KEY;

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILMS_PENDING:
    case actionTypes.GET_PEOPLE_PENDING:
    case actionTypes.GET_SPECIES_PENDING:
    case actionTypes.GET_VEHICLES_PENDING:
    case actionTypes.GET_STARSHIPS_PENDING:
      notification.info({
        message: "Loading.....",
        duration: 0,
        key,
      });
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case actionTypes.GET_FILMS_SUCCESS:
      notification.success({
        message: "Successful",
        duration: 1,
        key,
      });
      return {
        ...state,
        loading: false,
        error: null,
        films:{
          ...state.films,
          results:action.payload
        }
      };

      case actionTypes.GET_STARSHIPS_SUCCESS:
      notification.success({
        message: "Successful",
        duration: 1,
        key,
      });
      return {
        ...state,
        loading: false,
        error: null,
        starships:{
          ...state.starships,
          results:action.payload
        }
      };

      case actionTypes.GET_PEOPLE_SUCCESS:
      notification.success({
        message: "Successful",
        duration: 1,
        key,
      });
      return {
        ...state,
        loading: false,
        error: null,
        people: {
          ...state.people,
          results:action.payload
        }
      };

      case actionTypes.GET_SPECIES_SUCCESS:
      notification.success({
        message: "Successful",
        duration: 1,
        key,
      });
      return {
        ...state,
        loading: false,
        error: null,
        species: {
          ...state.species,
          results:action.payload
        }
      };

      case actionTypes.GET_VEHICLES_SUCCESS:
      notification.success({
        message: "Successful",
        duration: 1,
        key,
      });
      return {
        ...state,
        loading: false,
        error: null,
        vehicles: {
          ...state.vehicles,
          results:action.payload
        }
      };
    
    case actionTypes.GET_STARSHIPS_FAILED:
    case actionTypes.GET_PEOPLE_FAILED:
    case actionTypes.GET_SPECIES_FAILED:
    case actionTypes.GET_VEHICLES_FAILED:
    case actionTypes.GET_FILMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
