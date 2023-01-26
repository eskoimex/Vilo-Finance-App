import * as ActionTypes from "../actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Auth = (
  state = {
    isAuthenticated: false,
    isAccountCreated: false,
    isVerificationComplete: false,
    isLoading: false,
    accessToken: AsyncStorage.getItem("accessToken"),
    errMess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: "",
        accessToken: action.accessToken,
      };

    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: action.message,
      };

    case ActionTypes.LOGOUT_REQUEST:
      return { ...state, isLoading: true, isAuthenticated: true };

    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        accessToken: "",
      };

    case ActionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAccountCreated: false,
      };

    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAccountCreated: true,
        errMess: "",
      };

    case ActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAccountCreated: false,
        errMess: action.message,
      };

    case ActionTypes.ONBOARDING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.ONBOARDING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isVerificationComplete: true,
        errMess: "",
      };

    case ActionTypes.ONBOARDING_FAILURE:
      return {
        ...state,
        isLoading: false,
        isVerificationComplete: false,
        errMess: action.message,
      };

    // case ActionTypes.METAMAP_SUCCESS:
    //   return {
    //     ...state,
    //     isMetaMapVerificationComplete: true,
    //   };

    // case ActionTypes.METAMAP_FAILURE:
    //   return {
    //     ...state,
    //     isMetaMapVerificationComplete: false,
    //     errMess: action.message,
    //   };
    default:
      return state;
  }
};