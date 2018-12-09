import { UPDATE_EDITOR_STATE } from "../actions/types";

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return action.payload;

    default:
      return state;
  }
}
