import * as ActionTypes from "../actionTypes";

export const User = (state = { isLoading: true, errMess: null, user: {} }, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOADING:
      return state;

    case ActionTypes.ADD_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case ActionTypes.USER_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };

    default:
      return state;
  }
};