import * as ActionTypes from "../actionTypes";

export const Assets = (
  state = { isLoading: false, errMess: null, assets: [], userAssets: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ASSETS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        assets: action.payload,
      };

    case ActionTypes.ASSETS_LOADING:
      return { ...state, isLoading: true, errMess: null, assets: [] };

    case ActionTypes.ASSETS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.ADD_USERASSETS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        userAssets: action.payload,
      };

    default:
      return state;
  }
};