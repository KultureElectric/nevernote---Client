import React, { Component } from "react";
import { connect } from "react-redux";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";

import * as actions from "../actions";

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });

    this.handleNoteSave = this.handleNoteSave.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  componentWillReceiveProps(p) {
    const contentState = convertFromRaw(p.activeNote.body);
    this.setState({ editorState: EditorState.createWithContent(contentState) });
  }

  handleNoteSave() {
    const contentState = this.state.editorState.getCurrentContent();
    this.props.saveNote(convertToRaw(contentState));
  }

  _onClick(e) {}

  renderInlineStyleButtons() {
    const styles = ["BOLD", "UNDERLINE", "ITALIC", "CODE"];
    return styles.map(style => {
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
  }

  renderContent() {
    if (!this.props.activeNote) {
      return (
        <div className="show-on-start">
          <h4>You have no note selected to work on currently</h4>
          <h6>Either create one or select one</h6>
        </div>
      );
    }

    return (
      <div className="Note-editor-root">
        <div className="toolbar">{this.renderInlineStyleButtons()}</div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Write something"
        />
        <div className="fixed-action-btn">
          <button
            className="btn-floating btn-large red"
            onClick={this.handleNoteSave}
          >
            <i className="material-icons">check</i>
          </button>
        </div>
      </div>
    );
  }

  render() {
    return <div className="Note-editor-root">{this.renderContent()}</div>;
  }
}

const mapStateToProps = ({ activeNote }) => {
  return { activeNote };
};

export default connect(
  mapStateToProps,
  actions
)(NoteEditor);
