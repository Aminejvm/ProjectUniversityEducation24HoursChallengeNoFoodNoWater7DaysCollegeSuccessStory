import React from "react";
import axios from "axios";

const initialState = {
  loading: false,
  error: [],
  data: []
};
function Reducer(state, action) {
  switch (action.type) {
    case "POSTING_START":
      return {
        ...state,
        loading: true
      };
    case "POSTING_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.value.data
      };
    case "POSTING_ERROR":
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
const usePost = (url, data) => {
  const abortError = () => dispatch("ABORT_ERROR");
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  React.useEffect(() => {
    dispatch({ type: "POSTING_START" });
    axios
      .post(url, data)
      .then(res =>
        dispatch({ type: "POSTING_SUCCESS", value: { data: res.data } })
      )
      .catch(err => dispatch({ type: "POSTING_ERROR", error: err.response }));
  }, []);
  return [state.loading, state.data, state.error, abortError];
};
export default usePost;
