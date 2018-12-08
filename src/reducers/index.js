import { combineReducers } from "redux";
import editorReducer from "./editorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  contentState: editorReducer,
  auth: authReducer
});
