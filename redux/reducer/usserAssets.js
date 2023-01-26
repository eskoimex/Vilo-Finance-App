import * as ActionTypes from "../actionTypes";

export const UserAssets = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERASSETS:
      if (state.some((el) => el === action.payload)) return state;
      else return state.concat(action.payload);

    case ActionTypes.REMOVE_USERASSETS:
      return state.filter((asset) => asset !== action.payload);

    default:
      return state;
  }
};