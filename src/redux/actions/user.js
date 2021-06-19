import * as actionTypes from "../constants";
import authService from "../services/AuthService";

const GetFilms = (data) => async (dispatch) => {
  let uri = "https://swapi.dev/api/films/?format=json";
  dispatch({
    type: actionTypes.GET_FILMS_PENDING,
  });
  fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      dispatch({
        type: actionTypes.GET_FILMS_SUCCESS,
        payload: response.results,
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
  let uri = "https://swapi.dev/api/species/?format=json";
  dispatch({
    type: actionTypes.GET_SPECIES_PENDING,
  });

  fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      dispatch({
        type: actionTypes.GET_SPECIES_SUCCESS,
        payload: response.results,
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
  let uri = "https://swapi.dev/api/vehicles/?format=json";
  dispatch({
    type: actionTypes.GET_VEHICLES_PENDING,
  });

  fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      dispatch({
        type: actionTypes.GET_VEHICLES_SUCCESS,
        payload: response.results,
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
  let uri = "https://swapi.dev/api/starships/?format=json";
  dispatch({
    type: actionTypes.GET_STARSHIPS_PENDING,
  });

  fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      dispatch({
        type: actionTypes.GET_STARSHIPS_SUCCESS,
        payload: response.results,
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
  let uri = "https://swapi.dev/api/people/?format=json";
  dispatch({
    type: actionTypes.GET_PEOPLE_PENDING,
  });

  fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      dispatch({
        type: actionTypes.GET_PEOPLE_SUCCESS,
        payload: response.results,
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
