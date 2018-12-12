import { SET_CURRENT_NOTE } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      return action.payload;

    default:
      return state;
  }
}
