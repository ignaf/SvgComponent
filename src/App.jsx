import Github from "./iconComponents/githubIcon";
import Trello from "./iconComponents/trelloIcon";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar bg-dark">
        <div className="container">
          <Github width="50" height="50" />
          <Github width="100" height="100" color={"#333"} />
          <Trello />
          <Trello width="200px" fontColor="#fff" />
          <Trello width="600px" fontColor="#333" iconColor="#fafafa" />
        </div>
      </nav>
    </React.Fragment>
  );
}

export default App;
