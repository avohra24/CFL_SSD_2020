import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import commonReducer from "./commonReducer";

export default combineReducers({
  student: studentReducer,
  common: commonReducer,
});
