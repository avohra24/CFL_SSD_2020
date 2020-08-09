import {
  UPDATE_ACTION_BAR_TITLE,
  GET_INITIAL_DATA,
  UPDATE_SUBMIT_BUTTON,
} from "../actions/action-types";

const initialState = {
  pageName: "Dashboard",
  initial: {},
  loaded: false,
  submitButton: false,
  submitAction: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ACTION_BAR_TITLE:
      return {
        ...state,
        pageName: action.payload,
      };
    case UPDATE_SUBMIT_BUTTON:
      return {
        ...state,
        submitButton: action.payload.submitButton,
        submitAction:
          action.payload.submitButton === true
            ? action.payload.submitAction
            : null,
      };
    case GET_INITIAL_DATA:
      return {
        ...state,
        initial: action.payload,
        loaded: true,
      };
    default:
      return state;
  }
}
