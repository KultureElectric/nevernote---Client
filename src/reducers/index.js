import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import authReducer from "./authReducer";
import activeNoteReducer from "./activeNoteReducer";

export default combineReducers({
  notes: noteReducer,
  auth: authReducer,
  activeNote: activeNoteReducer
});
