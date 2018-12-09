import axios from "axios";
import { UPDATE_EDITOR_STATE, FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const saveNote = contentState => async dispatch => {
  const res = await axios.post("/api/notes", contentState);
  console.log(res);
};
