import * as ActionTypes from "../actionTypes";

export const requestCard = () => (dispatch) => {
  dispatch(cardRequestSuccess());
};

const cardRequestSuccess = () => {
  return {
    type: ActionTypes.CARD_SUCCESS,
  };
};
