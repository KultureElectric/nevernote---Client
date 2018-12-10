import axios from "axios";
import { FETCH_NOTES, FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const saveNote = contentState => async dispatch => {
  const res = await axios.post("/api/notes", contentState);
  dispatch({
    type: FETCH_NOTES,
    payload: res.data
  });
};

export const fetchNotes = () => async dispatch => {
  const res = await axios.get("/api/notes");
  dispatch({
    type: FETCH_NOTES,
    payload: res.data
  });
};
