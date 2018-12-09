import { combineReducers } from "redux";
import editorReducer from "./editorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  editorState: editorReducer,
  auth: authReducer
});
