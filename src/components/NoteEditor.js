import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onChange = this.onChange.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  _onClick(e) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, e.target.name)
    );
  }

  render() {
    const styles = ["BOLD", "ITALIC", "UNDERLINE", "CODE"];
    const buttons = styles.map(style => {
      return (
        <button
          className="btn"
          key={style}
          onClick={this._onClick}
          name={style}
        >
          {style}
        </button>
      );
    });
    return (
      <div>
        <div className="toolbar">{buttons}</div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default NoteEditor;
