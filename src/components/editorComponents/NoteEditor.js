import "draft-js/dist/Draft.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw
} from "draft-js";

import * as actions from "../../actions";
import InlineStyleControls from "./InlineStyleControls";

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    // basic on change for editor
    this.onChange = editorState => this.setState({ editorState });

    // All the binds for the editor
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);

    // Not editor related
    this.handleNoteSave = this.handleNoteSave.bind(this);
  }

  componentWillReceiveProps(p) {
    const contentState = convertFromRaw(p.activeNote);
    this.setState({ editorState: EditorState.createWithContent(contentState) });
  }

  handleNoteSave() {
    const contentState = this.state.editorState.getCurrentContent();
    this.props.saveNote(convertToRaw(contentState));
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

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
        <InlineStyleControls
          editorState={this.state.editorState}
          onToggle={this.toggleInlineStyle}
        />
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          placeholder="Tell a story..."
          ref="editor"
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
    // this.props.activeNote is only the editor body,
    // date created and last updated aren't given because
    // of simplification of current note select on note creation
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
