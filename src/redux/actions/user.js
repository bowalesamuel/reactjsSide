import { notification } from "antd";
import * as actionTypes from "../constants";
import authService from "../services/AuthService";

// import { history } from "../store";

const key = actionTypes.KEY;



const GetFilms = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_FILMS_PENDING,
  });

  await authService
    .getFilms(data)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_FILMS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_FILMS_FAILED,
        payload: err,
      });
    });
};

export const getFilms = (data) => (dispatch) => {
  dispatch(GetFilms(data));
};

const GetSpecies = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_SPECIES_PENDING,
  });

  await authService
    .getFilms(data)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_SPECIES_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_SPECIES_FAILED,
        payload: err,
      });
    });
};

export const getSpecies = (data) => (dispatch) => {
  dispatch(GetSpecies(data));
};

const GetVehicles = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_VEHICLES_PENDING,
  });

  await authService
    .getFilms(data)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_VEHICLES_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_VEHICLES_FAILED,
        payload: err,
      });
    });
};

export const getVehicles = (data) => (dispatch) => {
  dispatch(GetVehicles(data));
};

const GetStarships = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_STARSHIPS_PENDING,
  });

  await authService
    .getFilms(data)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_STARSHIPS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_STARSHIPS_FAILED,
        payload: err,
      });
    });
};

export const getStarships = (data) => (dispatch) => {
  dispatch(GetStarships(data));
};

const GetPeople = (data) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_PEOPLE_PENDING,
  });

  await authService
    .getFilms(data)
    .then((response) => {
      dispatch({
        type: actionTypes.GET_PEOPLE_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.GET_PEOPLE_FAILED,
        payload: err,
      });
    });
};

export const getPeople = (data) => (dispatch) => {
  dispatch(GetPeople(data));
};