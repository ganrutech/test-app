import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const currentData = new Date();

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: React New Build | {currentData}</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
