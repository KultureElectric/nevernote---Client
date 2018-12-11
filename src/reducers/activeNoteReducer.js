import { SET_CURRENT_NOTE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_NOTE:
      return action.payload;

    default:
      return state;
  }
}
