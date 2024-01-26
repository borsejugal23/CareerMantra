import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from "./actionTypes";

const initialstate = {
  isAuth: false,
  isLoading: false,
  isError: false,
 
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true };

    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, isError:false };

    default:
      return state;
  }
};
