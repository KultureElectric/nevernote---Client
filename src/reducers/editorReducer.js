import { EditorState } from "draft-js";

const initialState = EditorState.createEmpty();

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
