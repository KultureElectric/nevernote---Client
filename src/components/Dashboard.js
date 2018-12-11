import React, { Component } from "react";

import NoteList from "./NoteList";
import NoteEditor from "./NoteEditor";

class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <div className="Note-list-component">
          <h4 className="center fixed">All notes</h4>
          <NoteList />
        </div>
        <div className="Note-editor-component">
          <NoteEditor />
        </div>
      </div>
    );
  }
}

export default Dashboard;
