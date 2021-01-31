import React from "react";
import PropTypes from "prop-types";



function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;