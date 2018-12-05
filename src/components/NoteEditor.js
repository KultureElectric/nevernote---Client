import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this._onClick = this._onClick.bind(this);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }
  _onClick(e) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, e.target.value)
    );
  }
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
          {" "}
          {style}{" "}
        </button>
      );
    });
    return (
      <div>
        {" "}
        <div className="toolbar">{buttons}</div>{" "}
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />{" "}
      </div>
    );
  }
}

export default NoteEditor;
