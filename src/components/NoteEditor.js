import React, { Component } from "react";
import { connect } from "react-redux";
import { Editor, EditorState, convertToRaw } from "draft-js";

import * as actions from "../actions";

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });

    this.handleNoteSave = this.handleNoteSave.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  handleNoteSave() {
    const contentState = this.state.editorState.getCurrentContent();
    this.props.saveNote(convertToRaw(contentState));
  }

  _onClick(e) {}

  render() {
    const styles = ["BOLD", "UNDERLINE", "ITALIC", "CODE"];
    const buttons = styles.map(style => {
      return (
        <button
          key={style}
          name={style}
          className="btn"
          onClick={this._onClick}
        >
          {style}
        </button>
      );
    });
    return (
      <div className="Note-editor-root">
        <div className="toolbar">{buttons}</div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        <div className="fixed-action-btn">
          <button
            to="/surveys/new"
            className="btn-floating btn-large red"
            onClick={this.handleNoteSave}
          >
            <i className="material-icons">check</i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ editorState }) => {
  return { editorState };
};

export default connect(
  mapStateToProps,
  actions
)(NoteEditor);
