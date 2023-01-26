import * as ActionTypes from "../actionTypes";

export const Card = (
  state = {
    isCardAvailable: false,
    isLoading: false,
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.CARD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isCardAvailable: false,
      };

    case ActionTypes.CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCardAvailable: true,
        errMess: "",
      };

    case ActionTypes.CARD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isCardAvailable: false,
        errMess: action.message,
      };
    default:
      return state;
  }
};