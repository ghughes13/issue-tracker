import React, { useState, useEffect } from "react";
import AddIssue from "./components/AddIssue/AddIsssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";

import "./App.css";

function App() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="grey-card-contianer">
        {addIssue ? <AddIssue /> : <CurrentIssue />}
      </div>
      <div className="view-selection-div">
        <button class="view-button">Current Issues</button>
        <button class="view-button active-button">Add Issue</button>
      </div>
    </div>
  );
}

export default App;
