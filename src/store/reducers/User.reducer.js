const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

export const registerUser = (email) => {
  return async function (dispatch) {
    try {
      dispatch({ type: USER_SUCCESS, payload: email });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err });
      alert("Something was wrong!");
    }
  };
};

const initialState = {
  userEmail: "",
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        userEmail: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
