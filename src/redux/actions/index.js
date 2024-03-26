export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_TO_LIST = "REMOVE_TO_LIST";
export const GET_JOBS = "GET_JOBS";

export const addToFavourite = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data,
  };
};

export const removeFromList = (i) => {
  return {
    type: REMOVE_TO_LIST,
    payload: i,
  };
};

export const getCompanies = (query) => {
  return (dispatch, getState) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    fetch(baseEndpoint + query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore");
        }
      })
      .then(({ data }) => {
        dispatch({ type: GET_JOBS, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
