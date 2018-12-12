import React, { Component } from "react";
import { connect } from "react-redux";
import { EditorState, convertToRaw } from "draft-js";

import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

import * as actions from "../actions";

class Dashboard extends Component {
  handleCreateNote() {
    const freshContentState = EditorState.createEmpty().getCurrentContent();
    this.props.saveNote(convertToRaw(freshContentState));
  }

  render() {
    return (
      <div className="content">
        <div className="Note-list-component">
          <h4 className="center fixed">
            All notes{"  "}
            <button
              className="btn-floating btn-large waves-effect waves-light red"
              onClick={this.handleCreateNote.bind(this)}
            >
              <i className="material-icons">add</i>
            </button>
          </h4>

          <NoteList />
        </div>
        <div className="Note-editor-component">
          <NoteEditor />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);
