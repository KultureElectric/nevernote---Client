import React, { Component } from "react";
import { connect } from "react-redux";

class NoteList extends Component {
  render() {
    console.log(this.props.editorState);
    return <div>A list of notes</div>;
  }
}

const mapStateToProps = ({ editorState }) => {
  return { editorState };
};

export default connect(mapStateToProps)(NoteList);
