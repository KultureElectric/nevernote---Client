import React, { Component } from "react";

import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <div className="Note-list">
          <h4 className="center">All notes</h4>
          <NoteList />
        </div>
        <div className="Note-editor">
          <h4 className="center">Editor</h4>
          <NoteEditor />
        </div>
      </div>
    );
  }
}

export default Dashboard;
