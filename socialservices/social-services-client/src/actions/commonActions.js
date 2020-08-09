import {
  UPDATE_ACTION_BAR_TITLE,
  GET_INITIAL_DATA,
  UPDATE_SUBMIT_BUTTON,
} from "./action-types";
import axios from "axios";

export const updatePageName = (pageName) => async (dispatch) => {
  dispatch({
    type: UPDATE_ACTION_BAR_TITLE,
    payload: pageName,
  });
};

export const updateSubmitButton = (submitButton, submitAction) => async (
  dispatch
) => {
  dispatch({
    type: UPDATE_SUBMIT_BUTTON,
    payload: { submitButton: submitButton, submitAction: submitAction },
  });
};

export const getInitialData = () => async (dispatch) => {
  const res = await axios.get("/common/load");
  dispatch({
    type: GET_INITIAL_DATA,
    payload: res.data,
  });
};
