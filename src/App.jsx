import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: Guruprakash New Build</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum pariatur
      perferendis tempore dolore? Unde eligendi accusamus, distinctio cum optio
      alias laudantium vel a nemo, corrupti explicabo enim illum consequatur
      consequuntur.
    </p>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
