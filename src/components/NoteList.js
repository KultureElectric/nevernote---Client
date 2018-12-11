import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import * as actions from "../actions";

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  handleNoteSelect(note) {
    // perfect time to get a note shown
    this.props.setCurrentNote(note);
  }

  renderNotes() {
    const { notes } = this.props;
    return _.map(notes, note => {
      return (
        <a
          key={note.noteKey}
          className="note-item card-content collection-item"
          onClick={() => this.handleNoteSelect(note)}
        >
          <h1 className="card-title">Title</h1>
          <div className="card-action">{note.body.blocks[0].text}</div>
          <p>{new Date(note.lastUpdated).toLocaleDateString()}</p>
        </a>
      );
    });
  }

  render() {
    return (
      <div className="Note-list card collection">{this.renderNotes()}</div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(
  mapStateToProps,
  actions
)(NoteList);
