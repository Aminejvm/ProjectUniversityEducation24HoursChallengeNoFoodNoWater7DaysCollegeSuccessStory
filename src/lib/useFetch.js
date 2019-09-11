import React from "react";
import axios from "axios";

const initialState = {
  loading: false,
  error: [],
  data: []
};
function Reducer(state, action) {
  switch (action.type) {
    case "FETCHING_START":
      return {
        ...state,
        loading: true
      };
    case "FETCHING_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.value.data
      };
    case "FETCHING_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case "ABORT_ERROR":
      return {
        ...state,
        error: []
      };
    default:
      throw new Error();
  }
}
const useFetch = url => {
  const abortError = () => dispatch("ABORT_ERROR");
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  React.useEffect(() => {
    dispatch({ type: "FETCHING_START" });
    axios
      .get(url)
      .then(res =>
        dispatch({ type: "FETCHING_SUCCESS", value: { data: res.data } })
      )
      .catch(err => dispatch({ type: "FETCHING_ERROR", error: err.response }));
  }, []);
  return [state.loading, state.data, state.error, abortError];
};
export default useFetch;
