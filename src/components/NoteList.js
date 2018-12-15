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
    this.props.setCurrentNote(note.body);
  }

  handleNoteDelete(note) {
    this.props.deleteNote(note);
  }

  renderNotes() {
    const { notes } = this.props;
    if (notes) {
      notes.sort((a, b) => {
        const dateA = new Date(a.lastUpdated);
        const dateB = new Date(b.lastUpdated);

        return dateB - dateA;
      });
    }

    return _.map(notes, note => {
      return (
        <div
          key={note.noteKey}
          className="note-item collection-item"
          onClick={() => this.handleNoteSelect(note)}
        >
          <button
            className="btn-floating right"
            onClick={() => this.handleNoteDelete(note)}
          >
            <i className="material-icons">delete</i>
          </button>
          <h1 className="card-title">Title</h1>
          <div className="card-action">{note.body.blocks[0].text}</div>

          <p>{new Date(note.lastUpdated).toLocaleDateString()}</p>
        </div>
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
