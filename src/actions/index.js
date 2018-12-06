import { UPDATE_EDITOR_STATE } from "./types";

export const onEditorStateUpdate = editorState => {
  return {
    type: UPDATE_EDITOR_STATE,
    payload: editorState
  };
};
