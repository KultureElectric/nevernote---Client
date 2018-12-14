import { FETCH_NOTES } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_NOTES:
      action.payload.forEach(note => (note.body = JSON.parse(note.body)));
      return action.payload;

    default:
      return state;
  }
}
