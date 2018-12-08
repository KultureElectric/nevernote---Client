import axios from "axios";
import { UPDATE_EDITOR_STATE, FETCH_USER } from "./types";

export const onEditorStateUpdate = editorState => {
  return {
    type: UPDATE_EDITOR_STATE,
    payload: editorState
  };
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
