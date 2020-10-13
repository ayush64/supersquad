import React from "react";
import Characters from "./Characters";
import Heroes from "./Heroes";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="col-md-6">
        <Characters />
      </div>
      <div className="col-md-6">
        <Heroes />
      </div>
    </div>
  );
};

export default App;
