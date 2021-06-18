import { notification } from "antd";
import * as actionTypes from "../constants";

const initState = {
  loading: false,
  
  species: {
    referrals: [],
    meta: {},
  },
  films: {
    referrals: [],
    meta: {},
  },
  vehicles: {
    referrals: [],
    meta: {},
  },
  people: {
    referrals: [],
    meta: {},
  },
  starships: {
    referrals: [],
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
        films:action.payload
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
        starships:action.payload
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
        people:action.payload
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
        species:action.payload
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
        vehicles:action.payload
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
